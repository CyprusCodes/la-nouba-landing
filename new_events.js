const SHEET_ID = "1-ER6EUPMzWpQhPh_-3p_5nQb4uUi8kMDepwpet77WmU";
const SHEET_TITLE = "Events";
const SHEET_RANGE = "A1:D101";
const Column_IDs = ["event_id", "event_title", "event_image"];

const FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tq=&gid=0&headers=1&tqx=out:csv&range=${SHEET_RANGE}`;

fetch(FULL_URL)
  .then((res) => res.text())
  .then((csvData) => {
    console.log("CSV Data:", csvData);
    let rows = csvData.split("\n");
    let data = rows.map((row) => row.split('","'));
    const headers = data[0].map((header) => header.replace(/"/g, ""));

    const slideContainer = document.getElementById("events_new_images");

    for (let i = data.length - 1; i > 0; i--) {
      const rowData = data[i].map((value) => value.replace(/"/g, ""));

      const slideDiv = document.createElement("div");
      slideDiv.className = "slide";

      const obj = {};
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = rowData[j];

        if (headers[j] === "event_image") {
          const img = document.createElement("img");
          img.src = rowData[j];
          img.className = "lazy lazyload pic";
          img.alt = obj.event_title;
          slideDiv.appendChild(img);
        }
      }

      slideDiv.innerHTML += `<p class="carousel_description">${obj.event_date}</p>`;

      slideContainer.appendChild(slideDiv);
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
