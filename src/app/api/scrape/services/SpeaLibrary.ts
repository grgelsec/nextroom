import puppeteer from "puppeteer-core";
import { room } from "@/app/types";
import Chromium from "@sparticuz/chromium";

export const getSpeaData = async () => {
  //Browser Setup
  try {
    let browser = undefined;
    if (process.env.NEXT_PUBLIC_APP_ENVIRONMENT == "development") {
      browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null,
      });
    } else {
      browser = await puppeteer.launch({
        args: Chromium.args,
        executablePath: await Chromium.executablePath(),
        headless: Chromium.headless,
        defaultViewport: Chromium.defaultViewport,
      });
    }

    //Page Creation
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const block = ["image", "stylesheet", "font"];
      if (block.includes(req.resourceType())) {
        req.abort();
      } else {
        req.continue();
      }
    });
    //Navigation with while loading for dynamic data
    await page.goto("https://iub.libcal.com/reserve/bsic");
    await page.waitForSelector("a.fc-timeline-event");
    await page.setJavaScriptEnabled(false);

    //data extraction
    const scrapedData: room[] = await page.evaluate(() => {
      const getRoomList = document.querySelectorAll("a.fc-timeline-event");

      //convert DOM nodelist to array for processing and accessing attributes
      const scrapedDataArray: room[] = Array.from(getRoomList).map((room) => ({
        room: room
          .getAttribute("title")
          ?.slice(
            room.getAttribute("title")?.indexOf("-"),
            room.getAttribute("title")?.lastIndexOf(" -")
          )
          .substring(2),
        times: [
          {
            date: room
              .getAttribute("title")
              ?.substring(0, room?.getAttribute("title")?.indexOf(" - ")),
            reserved: room
              .getAttribute("title")
              ?.slice(room.getAttribute("title")?.lastIndexOf(" "))
              .trimStart(),
          },
        ],
      }));

      return scrapedDataArray;
    });
    await browser.close();

    const roomAvailabilityData: room[] = [];

    for (let i = 0; i < scrapedData.length - 1; i++) {
      if (scrapedData[i].room != scrapedData[i + 1].room) {
        roomAvailabilityData.push(scrapedData[i]);
      }
    }
    roomAvailabilityData.push(scrapedData[scrapedData.length - 1]);
    //not very fast, need to see if we can write something faster
    for (let i = 0; i <= roomAvailabilityData.length - 1; i++) {
      for (let j = 0; j < scrapedData.length - 1; j++) {
        if (
          roomAvailabilityData[i].times.length < 10 &&
          scrapedData[j].room == roomAvailabilityData[i].room &&
          scrapedData[j].room == scrapedData[j + 1].room
        ) {
          roomAvailabilityData[i].times.push(scrapedData[j].times[0]);
        }
      }
    }

    return roomAvailabilityData;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to gather data from source.");
  }
};
