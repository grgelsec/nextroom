import puppeteer from "puppeteer";

interface room {
  room: string | undefined;
  times: availability[];
}

type availability = {
  date: string | undefined;
  reserved: string | undefined;
};

export const getData = async () => {
  //current date
  //const today = new Date();
  //const day: number = today.getDate();

  //Browser Setup
  try {
    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport: null,
    });

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

    for (let i = 0; i < scrapedData.length - 1; i++) {
      if (scrapedData[i].room != scrapedData[i + 1].room) {
        roomAvailabilityData.push(scrapedData[i]);
      }
    }

    for (let i = 0; i < roomAvailabilityData.length - 1; i++) {
      for (let j = 0; j < scrapedData.length - 1; j++) {
        if (
          roomAvailabilityData[i].times.length < 20 &&
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
