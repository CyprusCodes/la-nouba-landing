// Define string values for SHEET_ID, SHEET_TITLE, SHEET_RANGE, and Column_IDs
const SHEET_ID = "1-ER6EUPMzWpQhPh_-3p_5nQb4uUi8kMDepwpet77WmU";
const SHEET_TITLE = "Events";
const SHEET_RANGE = "A1:D101"; // Assuming the sheet has columns for event_title, event_id, event_image
const Column_IDs = ["event_id", "event_title", "event_image"];

// Construct the FULL_URL using the string values
const FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tq=&gid=0&headers=1&tqx=out:csv&range=${SHEET_RANGE}`;

fetch(FULL_URL)
  .then((res) => res.text())
  .then((csvData) => {
    console.log("CSV Data:", csvData);
    let rows = csvData.split("\n");
    let data = rows.map((row) => row.split('","'));
    // Extract headers from the first row
    const headers = data[0].map((header) => header.replace(/"/g, ""));

    // Get the parent element to which we'll add event items
    const eventList = document.getElementById("eventList");

    // Iterate through the rows (excluding the header row) in reverse order
    for (let i = data.length - 1; i > 0; i--) {
      const rowData = data[i].map((value) => value.replace(/"/g, ""));

      // Create a div for each event
      const eventDiv = document.createElement("div");
      eventDiv.className = "event-item";

      // Create an object using headers as keys
      const obj = {};
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = rowData[j];

        // If the header is 'event_image', create an image element
        if (headers[j] === "event_image") {
          const img = document.createElement("img");
          img.src = rowData[j];
          img.alt = obj.event_title;
          eventDiv.appendChild(img);
        }
      }

      // Add other details to the eventDiv (e.g., event title, event id)
      eventDiv.innerHTML += `<h1>${obj.event_title}</h1>`;
      //   eventDiv.innerHTML += `<p>Event ID: ${obj.event_id}</p>`;

      // Append the eventDiv to the parent element
      eventList.appendChild(eventDiv);
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
