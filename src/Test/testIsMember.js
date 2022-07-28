function testIsMemberRunAll() {
    const expected = true
    testIsMember1(expected, true)
}

function testIsMember1(expected, verbose) {
    let d = isMember('jamesgreen.311@gmail.com', 'active', 'exhibiting')
    let t = 1
    
    if (verbose) {
        console.log("Test %s: Is Member Valid, Active and Exhibitor > %s ", t, (d?"Yes":"No"))
    }

    if (d===expected) {
        console.log("Test %s pass", t)
    } else {
        console.error("Test %s fail", t)
    }
    return 
}