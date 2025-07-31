// Google Apps Script Code for SmartSuitex Inquiry Form
// Deploy this as a web app to handle form submissions

// SmartSuitex Customer Inquiry Spreadsheet ID
const SPREADSHEET_ID = '16-F-UxF9sKDK-x3L7dVSJnbK8RHQY-jL4eYW1512fVI';

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get the spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getActiveSheet();
    
    // Prepare the row data
    const rowData = [
      new Date().toISOString(), // Timestamp
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.country || '',
      data.isdCode || '',
      data.company || '',
      data.productInterest || '',
      data.message || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput('SmartSuitex Inquiry Form Handler is running')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Function to set up the spreadsheet headers
function setupHeaders() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getActiveSheet();
  
  const headers = [
    'Timestamp',
    'First Name',
    'Last Name',
    'Email',
    'Phone',
    'Country',
    'ISD Code',
    'Company',
    'Product Interest',
    'Message'
  ];
  
  // Clear existing data and set headers
  sheet.clear();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#4285f4')
    .setFontColor('white');
    
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
}

// Function to export data as CSV
function exportAsCSV() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getActiveSheet();
  
  const data = sheet.getDataRange().getValues();
  const csvContent = data.map(row => 
    row.map(cell => `"${cell}"`).join(',')
  ).join('\n');
  
  const fileName = `inquiries_${new Date().toISOString().split('T')[0]}.csv`;
  
  // Create a temporary file
  const file = DriveApp.createFile(fileName, csvContent, MimeType.CSV);
  
  return file.getDownloadUrl();
} 