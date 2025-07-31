# Google Sheets Setup Guide for SmartSuitex Customer Inquiries

## 📋 Current Status
Your Google Sheets document at [https://docs.google.com/spreadsheets/d/16-F-UxF9sKDK-x3L7dVSJnbK8RHQY-jL4eYW1512fVI/edit?usp=sharing](https://docs.google.com/spreadsheets/d/16-F-UxF9sKDK-x3L7dVSJnbK8RHQY-jL4eYW1512fVI/edit?usp=sharing) is currently empty and needs to be configured.

## 🚀 Step-by-Step Setup Instructions

### Step 1: Set Up Google Sheets Headers

1. **Open your Google Sheets document**
2. **Add Headers in Row 1** (A1 to J1):
   ```
   A1: Timestamp
   B1: First Name
   C1: Last Name
   D1: Email
   E1: Phone
   F1: Country
   G1: ISD Code
   H1: Company
   I1: Product Interest
   J1: Message
   ```

3. **Format Headers**:
   - Select cells A1:J1
   - Make text **Bold**
   - Set background color to **Blue** (#4285f4)
   - Set text color to **White**
   - Center align the text

4. **Freeze Row 1**:
   - Select row 1
   - Go to View → Freeze → 1 row

### Step 2: Create Google Apps Script

1. **Go to [script.google.com](https://script.google.com)**
2. **Click "New Project"**
3. **Rename the project** to "SmartSuitex Inquiry Handler"
4. **Replace the default code** with the code from `GOOGLE_APPS_SCRIPT_CODE.gs`
5. **Update the Spreadsheet ID** in the script:
   ```javascript
   const SPREADSHEET_ID = '16-F-UxF9sKDK-x3L7dVSJnbK8RHQY-jL4eYW1512fVI';
   ```

### Step 3: Deploy as Web App

1. **Click "Deploy" → "New deployment"**
2. **Select type**: "Web app"
3. **Configure settings**:
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. **Click "Deploy"**
5. **Copy the Web App URL** (you'll need this for the next step)

### Step 4: Update Website Configuration

1. **Open** `smartsuitex-website/shadcn-ui/src/services/googleSheetsService.ts`
2. **Replace the placeholder URL**:
   ```typescript
   const GOOGLE_APPS_SCRIPT_URL = 'YOUR_WEB_APP_URL_HERE';
   ```
3. **Save the file**

### Step 5: Test the Integration

1. **Start your development server**:
   ```bash
   cd smartsuitex-website/shadcn-ui
   npm run dev
   ```

2. **Fill out the customer inquiry form**
3. **Click "Send Inquiry"**
4. **Check your Google Sheets** for new entries

## 🔧 Manual Setup Script

If you prefer to run a setup script, you can use this Google Apps Script function:

```javascript
function setupInquirySheet() {
  const spreadsheet = SpreadsheetApp.openById('16-F-UxF9sKDK-x3L7dVSJnbK8RHQY-jL4eYW1512fVI');
  const sheet = spreadsheet.getActiveSheet();
  
  // Clear existing data
  sheet.clear();
  
  // Set headers
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
  
  // Set headers in row 1
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('white');
  headerRange.setHorizontalAlignment('center');
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
  
  // Freeze first row
  sheet.setFrozenRows(1);
  
  console.log('Inquiry sheet setup complete!');
}
```

## 📊 Expected Data Structure

After setup, your Google Sheets will receive data in this format:

| Timestamp | First Name | Last Name | Email | Phone | Country | ISD Code | Company | Product Interest | Message |
|-----------|------------|-----------|-------|-------|---------|----------|---------|------------------|---------|
| 2024-01-15T10:30:00Z | John | Doe | john@example.com | 9876543210 | India | +91 | ABC Corp | hr-management | Looking for HR solution |

## 🚨 Troubleshooting

### Common Issues:

1. **"Script not found" error**:
   - Make sure the Google Apps Script is deployed as a web app
   - Check that the URL is correct in the service file

2. **"Permission denied" error**:
   - Ensure the web app is set to "Anyone" access
   - Check that the spreadsheet ID is correct

3. **Data not appearing**:
   - Verify the headers are set up correctly
   - Check the browser console for error messages
   - Ensure the form validation is passing

4. **CORS errors**:
   - The Google Apps Script handles CORS automatically
   - If issues persist, check the script deployment settings

## 📞 Support

If you encounter any issues:
1. Check the browser console for error messages
2. Verify all URLs and IDs are correct
3. Test the Google Apps Script manually using the test function
4. Ensure the spreadsheet has proper permissions

## ✅ Verification Checklist

- [ ] Google Sheets headers are set up (A1:J1)
- [ ] Headers are formatted (bold, blue background, white text)
- [ ] Google Apps Script is created and deployed
- [ ] Spreadsheet ID is correct in the script
- [ ] Web app URL is updated in the service file
- [ ] Development server is running
- [ ] Form submission works without errors
- [ ] Data appears in Google Sheets

Once all steps are completed, your customer inquiry form will automatically save all submissions to your Google Sheets document! 