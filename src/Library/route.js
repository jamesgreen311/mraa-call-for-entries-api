const ROUTES = {
    path : function (r, callback) {
        ROUTES[r] = callback
    }
}

ROUTES.path("opencalls", getOpenCalls)

function doGet(e) {
    let result = route(e.parameter['q'])
    let response = JSON.stringify(result)
    
    return ContentService
        .createTextOutput(response)
        .setMimeType(ContentService.MimeType.JSON)
}

function route(path) {
    let result = ROUTES[path]()
    return result
}
