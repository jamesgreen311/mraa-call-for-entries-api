function testGetArtistUploadsRunAll() {
    const expected = ""
    testGetArtistUploads1(expected, true)
    testGetArtistUploads2(expected, true)
    testGetArtistUploads3(expected, true)
}

function testGetArtistUploads1(expected, verbose) {
    const artistId = "bowles3@gmail.com"
    const event = "4E011C4"
    const evtKey = "id"
    const params = {
        'artist' : artistId,
        'event' : event,
        'key' : evtKey
    }
    const d = getArtistUploads(JSON.stringify(params))
    const t = `1 - Upload History for ${params.event} by ${params.artist}, get by Event Id`
    
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
    const event = "TESTSHOW-ONLYATEST"
    const artistId = "bowles3@gmail.com"
    const evtKey = "title"
    const params = {
        "artist" : artistId,
        "event" : event,
        "key" : evtKey
    }
    const d = getArtistUploads(JSON.stringify(params))
    const t = `2 - Upload History for ${params.event} by ${params.artist}, get by Event Title`
    
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
    const event = "TESTSHOW-ONLYATEST"
    const artistId = "bowles3@gmail.com"
    const params = {
        'artist' : artistId,
        'event' : event
    }
    const d = getArtistUploads(JSON.stringify(params))
    const t = `3 - Upload History for ${params.event} by ${params.artist}, default to title `
    
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