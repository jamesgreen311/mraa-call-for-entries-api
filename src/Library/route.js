const ROUTES = {
    path : function (r, callback) {
        ROUTES[r] = callback
    }
}

ROUTES.path("opencalls", getOpenCalls)
ROUTES.path("member", getMemberByEmail)
ROUTES.path("uploads", getArtistUploads)

function doGet(e) {
    const path = e.parameter['q']
    const id = e.parameter['id']
    let result = route(path, id)

    let response = JSON.stringify(result)
    
    return ContentService
        .createTextOutput(response)
        .setMimeType(ContentService.MimeType.JSON)
}

function route(path, id) {
    let result = ROUTES[path](id)
    return result
}

function doPost(request) {
    const body = request.postData.contents;
    const bodyJSON = JSON.parse(body)

    const fileid = saveImage(bodyJSON.eventid, bodyJSON.image)
    const member = "Yes"
    const availability = ""
    const hidden = ""
    const fullname = bodyJSON.firstname + " " + bodyJSON.lastname
    const row = [
      bodyJSON.eventid,
      bodyJSON.eventtitle,
      bodyJSON.firstname,
      bodyJSON.lastname,
      bodyJSON.email,
      bodyJSON.phone,
      bodyJSON.worktitle,
      bodyJSON.medium,
      bodyJSON.width,
      bodyJSON.height,
      bodyJSON.price,
      bodyJSON.filename,
      fileid,
      member,
      availability,
      hidden,
      fullname,
      bodyJSON.timestamp
    ]

    const submission = addSubmission(row)
    return ContentService.createTextOutput(submission)
}