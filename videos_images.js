const SHEET_ID = "1ChPRBmzmtJXhpP_s9Y1sWZ-E6mbdaXCdb6Ack-7i9No";
const SHEET_TITLE = "videos_lanouba";
const SHEET_RANGE = "A1:D101";
const Column_IDs = ["video_id", "v_link", "img_link"];

const FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tq=&gid=0&headers=1&tqx=out:csv&range=${SHEET_RANGE}`;

fetch(FULL_URL)
  .then((res) => res.text())
  .then((csvData) => {
    let rows = csvData.split("\n");
    let data = rows.map((row) => row.split('","'));
    const headers = data[0].map((header) => header.replace(/"/g, ""));

    const slideContainer = document.getElementById("video_imgs");

    for (let i = data.length - 1; i > 0; i--) {
      const rowData = data[i].map((value) => value.replace(/"/g, ""));

      const slideDiv = document.createElement("div");
      slideDiv.className = "image";
      slideDiv.setAttribute("v_link", rowData[Column_IDs.indexOf("v_link")]);

      const obj = {};
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = rowData[j];

        if (headers[j] === "img_link") {
          const img = document.createElement("img");
          img.src = rowData[j];
          img.className = "lazy lazyload pic";
          img.loading = "lazy"; // Add this line for lazy loading
          img.alt = obj.video_id; // Set a meaningful alt text
          slideDiv.appendChild(img);
        }
      }

      slideContainer.appendChild(slideDiv);
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
