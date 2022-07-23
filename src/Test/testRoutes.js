function testRoutesRunAll() {
    const expected = {}
    testRoutes1(expected, true)
}

function testRoutes1(expected, verbose) {
    let d = initRoutes()
    let t = 1
    
    if (verbose) {
        console.log("Test %s: Route path %s ", t, d["opencalls"])
    }

    if (typeof d === typeof expected) {
        console.log("Test %s pass", t)
    } else {
        console.error("Test %s fail", t)
    }
    return 
}