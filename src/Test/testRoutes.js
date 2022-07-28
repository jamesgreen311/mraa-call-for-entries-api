function testRoutesRunAll() {
    const notfound = []
    const oldest = '4E011C4'
    const byId = 'CABE37'
    testRoutes1(oldest, true)
    testRoutes2(byId, true)
    testRoutes3(notfound, true)
}

function testRoutes1(expected, verbose) {
    let d = route('opencalls')
    let t = '1, default to oldest'
    
    if (verbose) {
        console.log("Test %s: Open Call returned: %s ", t, d)
    }

    if (d[1] === expected) {
        console.log("Test %s pass", t)
    } else {
        console.error("Test %s fail", t)
    }
    return 
}

function testRoutes2(expected, verbose) {
    let d = route('opencalls', expected)
    let t = '2, select by Id'
    
    if (verbose) {
        console.log("Test %s: Open Call returned: %s ", t, d)
    }

    if (d[1] === expected) {
        console.log("Test %s pass", t)
    } else {
        console.error("Test %s fail", t)
    }
    return 
}

function testRoutes3(expected, verbose) {
    let d = route('opencalls', 'AAAAAA')
    let t = '3, id not found'
    
    if (verbose) {
        console.log("Test %s: Open Call returned: [ %s] ", t, d)
    }

    if (d.length === expected.length) {
        console.log("Test %s pass", t)
    } else {
        console.error("Test %s fail", t)
    }
    return 
}