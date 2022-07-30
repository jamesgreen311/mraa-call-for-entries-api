function testGetMemberRunAll() {
    const expected = []
    testGetMember1(expected, true)
    testGetMember2(expected, true)
}

function testGetMember1(expected, verbose) {
    let d = getMemberByEmail('jamesgreen.311@gmail.com')
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

function testGetMember2(expected, verbose) {
    let d = getMemberByEmail('notamember@gmail.com')
    let t = 2
    
    if (verbose) {
        console.log("Test %s: Not a Member, %s ", t, (d.length?d:'returned an empty array'))
    }

    if (typeof d === typeof expected && d.length===0) {
        console.log("Test %s pass", t)
    } else {
        console.error("Test %s fail", t)
    }
    return 
}