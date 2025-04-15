import puppeteer from "puppeteer";
import { room } from "@/app/types";
import chromium from "@sparticuz/chromium-min";
import puppeteerCore from "puppeteer-core";

export const getWellsData = async () => {
  //Browser Setup

  let browser = undefined;

  if (process.env.NEXT_PUBLIC_VERCEL_ENVIRONMENT === "production") {
    browser = await puppeteerCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
    return browser;
  } else {
    browser = await puppeteer.launch({
      headless: true,
      defaultViewport: null,
    });
  }

  try {
    //Page Creation
    const page = await browser.newPage();

    //Navigation with while loading for dynamic data
    await page.goto("https://iub.libcal.com/reserve/wells", {
      waitUntil: "networkidle0",
    });

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

    //adds all of the rooms to the final array
    for (let i = 0; i < scrapedData.length - 1; i++) {
      if (scrapedData[i].room != scrapedData[i + 1].room) {
        roomAvailabilityData.push(scrapedData[i]);
      }
    }
    roomAvailabilityData.push(scrapedData[scrapedData.length - 1]);
    //not very fast, need to see if we can write something faster
    //loops through all of the rooms and adds the first 10 time slots
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
