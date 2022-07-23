const ROUTES = {
    path : function (r, callback, params) {
        ROUTES[r] = callback(params)
    }
}

/* const ROUTES = {
    path : function (key, callback, params) {
        ROUTES[key] = callback
        if (params) {
            ROUTES[key] = params
        }
    }
}
 */
function initRoutes() {
    ROUTES.path("opencalls", getOpenCalls)

    return ROUTES
}

/* function setPath(path, callback, params) {
    ROUTES.path(path, callback)
    if (params) { 
        ROUTES[callback] = params     
    }
    return ROUTES
} */

function doGet(e) {
    let result = route(e.parameter['q'])
    let response = JSON.stringify(result)
    
    return ContentService
        .createTextOutput(response)
        .setMimeType(ContentService.MimeType.JSON)
}

function doPost(e) {
    let result = route('post', e.parameter['q'])
}

function route(path) {
    let result = ROUTES[path]()
    return result
}
