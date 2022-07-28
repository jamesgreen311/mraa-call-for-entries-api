function testGetMemberRunAll() {
    const expected = {}
    testGetMember1(expected, true)
}

function testGetMember1(expected, verbose) {
    let d = getMember('jamesgreen.311@gmail.com')
    let t = 1
    
    if (verbose) {
        console.log("Test %s: Valid member record %s ", t, d)
    }

    if (typeof d === typeof expected && d.length>0) {
        console.log("Test %s pass", t)
    } else {
        console.error("Test %s fail", t)
    }
    return 
}