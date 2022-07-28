/* const wsMembers = connect(membersDirectoryId).getSheetByName("Member Directory");
const memberInfo = getMemberInfo();
const exhibtingMembers = getExhibitingMembers();
const activeExhibitingMembers = getActiveExhibitingMembers(); */

function getMemberTables () {
    return {
        "directory" : {
            "name" : "Member Directory",
            "type" : "standard",
            "headers" : 2,
            "schema" : {
                "email" : "a",
                "firstname" : "b",
                "lastname" : "c",
                "preferredname" : "d",
                "status" : "e",
                "streetaddress" : "f",
                "streetaddressextended" : "g",
                "city" : "h",
                "state" : "i",
                "zipcode" : "j",
                "primarycontactnumber" : "k",
                "alternatecontactnumber" : "l",
                "membership" : "m",
                "jurydate" : "n",
                "medium" : "o", // not currently used
                "datejoined" : "p", // not currently used
                "artistsignature" : "q", // not currently used
                "businessname" : "r", // not currently used
                "comments" : "s"
            }
        }
    }
}


/**
 * @param  none
 * @returns [] array of all exhibiting members information
 * 
 * Member information array:
 *  email
 *  first name
 *  last name
 *  status
 *  phone number
 *  membership type 
*/
function getExhibitingMembers() {
    let exhibitingMembers = memberInfo.filter(function (e) {
        return e[5].toLowerCase() === "exhibiting";
    })
    return exhibitingMembers;
}

/**
 * @param none
 * @returns [] array of all active exhibiting members information
 * 
 * Member information array:
 *  email
 *  first name
 *  last name
 *  status
 *  phone number
 *  membership type
 */
/* function getActiveExhibitingMembers() {
    let activeExhibitingMembers = memberInfo.filter(function (e) {
        return e[5].toLowerCase() === "exhibiting" && e[3].toLowerCase() === "active";
    });
    return activeExhibitingMembers;  
} */

/**
 * Gets six columns from the membership spreadsheet. All columns are combined
 * into one array for each member
 * @param string member email
 * @returns [] array of member first name, last name, status, phone, membership type
 */
function getMemberByEmail(email) {
    const memberTables = getMemberTables()
    const members = connect(MEMBER_ID).getSheetByName(memberTables.directory.name)
    const memberSchema = memberTables.directory.schema
    const emailPos = memberSchema.email.colToIndex()
    const startRow = memberTables.directory.headers + 1
    const startCol = 1
    const data = members
        .getRange(startRow,
            startCol,
            members.getLastRow() - startRow,
            members.getLastColumn()
            )
        .getDisplayValues()

    const member = data.filter(m => m[emailPos] === email)[0]
    return member

/*     let lastRow = wsMembers.getLastRow();
    let firstRow = 3; // Assumes two header rows
    let memberInfoList = wsMembers.getRangeList(['A'+firstRow+':C'+lastRow, 
      'E'+firstRow+':E'+lastRow, 
      'K'+firstRow+':K'+lastRow, 
      'M'+firstRow+':M'+lastRow]); 
    let ranges = memberInfoList.getRanges();
    let colEmailName = ranges[0].getValues();
    let colStatus = ranges[1].getValues();
    let colPhone = ranges[2].getValues();
    let colMembership = ranges[3].getValues();
    let colCombined = [];

    for (x=0; x<ranges[0].getValues().length; x++) {
      colCombined.push([...colEmailName[x], ...colStatus[x], ...colPhone[x], ...colMembership[x]]);
    }
    return colCombined;  */
}

/**
 * Checks membership status and type 
 * @param {string} email Email address
 * @returns {boolean} 
 */
function isMember(email, status, type) {
    const memberTables = getMemberTables()
    const memberSchema = memberTables.directory.schema
    const statusPos = memberSchema.status.colToIndex()
    const typePos = memberSchema.membership.colToIndex()
    const memberInfo = getMemberByEmail(email)
    const memberStatus = (memberInfo[statusPos] === status)
    const memberType = (memberInfo[typePos] === type)
    const validMember = memberInfo.length > 0

    return (validMember && memberStatus && memberType)
}

/**
 * Searches the array of active exhibiting members retreived from the Membership spreadsheet
 * @param {string} email 
 * @returns array of member info or empty array
 */
/* function findMember(email) {
    let found = activeExhibitingMembers.filter(
        member => member[0].trim().toLowerCase() === email.trim().toLowerCase()
      );
      
    return found[0];
} */

/**
 * Gets the members first name from array if found
 * @param {string} email 
 * @returns string
 */
function getMemberFirstName(email) {
    let memberInfo = findMember(email);
    let firstName = "";

    if (memberInfo && memberInfo.length>0) {
        firstName = memberInfo[1];
    }

    return firstName;
}

/**
 * Gets the members last name from array if found
 * @param {string} email 
 * @returns string
 */
function getMemberLastName(email) {
    let memberInfo = findMember(email);
    let lastName = "";

    if (memberInfo && memberInfo.length>0) {
        lastName = memberInfo[2];
    }

    return lastName;
}

/**
 * Gets the members phone number from array if found
 * @param {string} email 
 * @returns string
 */
function getMemberPhone(email) {
    let memberInfo = findMember(email);
    let phone = "";

    if (memberInfo && memberInfo.length>0) {
        phone = memberInfo[4];
    }

    return phone;
}