const ROUTES = {
    path : function (r, callback) {
        ROUTES[r] = callback
    }
}

ROUTES.path("opencalls", getOpenCalls)
ROUTES.path("member", getMemberByEmail)

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

