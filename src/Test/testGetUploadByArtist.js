function testGetArtistUploadsRunAll() {
    const expected = ""
    testGetArtistUploads1(expected, true)
    testGetArtistUploads2(expected, true)
    testGetArtistUploads3(expected, true)
}

function testGetArtistUploads1(expected, verbose) {
    const artistId = "bowles3@gmail.com"
    const eventId = "4E011C4"
    const evtKey = "id"
    const d = getArtistUploads(artistId, eventId, evtKey)
    const t = `1 - Upload History for ${eventId} by ${artistId}, get by Event Id`
    
    if (verbose) {
        console.log("Test %s: %s ", t, d)
    }

    if (d.length>0) {
        console.log("Test %s pass", t)
    } else {
        console.error("Test %s fail", t)
    }
    return 
}

function testGetArtistUploads2(expected, verbose) {
    const eventTitle = "TESTSHOW-ONLYATEST"
    const artistId = "bowles3@gmail.com"
    const evtKey = "title"
    const d = getArtistUploads(artistId, eventTitle, evtKey)
    const t = `2 - Upload History for ${eventTitle} by ${artistId}, get by Event Title`
    
    if (verbose) {
        console.log("Test %s: %s ", t, d)
    }

    if (d.length>0) {
        console.log("Test %s pass", t)
    } else {
        console.error("Test %s fail", t)
    }
    return 
}

function testGetArtistUploads3(expected, verbose) {
    const eventTitle = "TESTSHOW-ONLYATEST"
    const artistId = "bowles3@gmail.com"
    const d = getArtistUploads(artistId, eventTitle)
    const t = `3 - Upload History for ${eventTitle} by ${artistId}, default to title `
    
    if (verbose) {
        console.log("Test %s: %s ", t, d)
    }

    if (d.length>0) {
        console.log("Test %s pass", t)
    } else {
        console.error("Test %s fail", t)
    }
    return 
}