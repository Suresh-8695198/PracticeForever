// Google Apps Script to receive webhooks and write to a Google Sheet
// Instructions:
// 1. Create a new Google Sheet named "Leads"
// 2. Add these headers to the first row: Date, Email, Interest, Source
// 3. Go to Extensions > Apps Script
// 4. Delete any existing code and paste this entire script
// 5. Click Deploy > New Deployment
// 6. Select type: "Web app"
// 7. Execute as: "Me"
// 8. Who has access: "Anyone"
// 9. Click Deploy and copy the "Web app URL"
// 10. Add that URL to your Vercel Environment Variables as GOOGLE_SHEETS_WEBHOOK_URL

function doPost(e) {
  try {
    // Open the active spreadsheet and the first sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    
    // Parse the incoming JSON payload
    const data = JSON.parse(e.postData.contents);
    
    // Extract variables
    const date = data.timestamp || new Date().toISOString();
    const email = data.email || "";
    const interest = data.interest || "";
    const source = data.source || "";
    
    // Append the row to the sheet
    sheet.appendRow([date, email, interest, source]);
    
    // Return a success response
    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return an error response
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
