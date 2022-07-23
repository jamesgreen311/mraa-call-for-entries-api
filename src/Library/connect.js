/**
 * Placing connect here ensures that the SpreadsheetApp object is created 
 * and available to all the Models
 * @param  {string} id Spreadsheet id
 * @returns {object} SpreadsheetApp object
 */
 function connect(id) {
    let conn;
    if (id) {
        conn = SpreadsheetApp.openById(id);
    } else {
        conn = SpreadsheetApp.getActiveSpreadsheet();
    }
    return conn;
  }