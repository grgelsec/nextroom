import puppeteer from "puppeteer";

interface room {
  date: string | undefined;
  room: string | undefined;
  availability: string | undefined;
}

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
    const roomData: room[] = await page.evaluate(() => {
      const getRoomList = document.querySelectorAll("a.fc-timeline-event");

      //convert DOM nodelist to array for processing and accessing attributes
      const roomArray: room[] = Array.from(getRoomList).map((room) => ({
        date: room
          .getAttribute("title")
          ?.substring(0, room?.getAttribute("title")?.indexOf(" - ")),
        room: room
          .getAttribute("title")
          ?.slice(
            room.getAttribute("title")?.indexOf("-"),
            room.getAttribute("title")?.lastIndexOf(" -")
          )
          .substring(2),
        availability: room
          .getAttribute("title")
          ?.slice(room.getAttribute("title")?.lastIndexOf(" "))
          .trimStart(),
      }));

      return roomArray;
    });
    await browser.close();

    const nextAvailableRoom: room[] = [];

    for (let i = 0; i < roomData.length - 1; i++) {
      if (roomData[i + 1].room != roomData[i].room) {
        nextAvailableRoom.push(roomData[i]);
      }
    }
    return nextAvailableRoom;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to gather data from source.");
  }
};
