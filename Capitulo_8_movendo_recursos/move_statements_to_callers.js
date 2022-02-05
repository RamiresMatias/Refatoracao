// Mover isntruções para os pontos de chamada (Move Statements to Callers)

// Antes
function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`)
    renderPhoto(outStream, person.photo)
    emitPhotoData(outStream, person.photo)
}

function listRecentPhotos(outStream, photos){
    photos
        .filter(p => p.date > recentDateCutoff())
        .forEach(p => {
            outStream.write('<div>\n')
            emitPhotoData(outStream, p)
            outStream.write('</div>\n')
        })
}

function emitPhotoData(outStream, photo) {
    outStream.write(`<p>title: ${photo.title}</p>\n`)
    outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`)
    outStream.write(`<p>location: ${photo.location}</p>\n`)
}


// Depois

function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`)
    renderPhoto(outStream, person.photo)
    emitPhotoData(outStream, person.photo)
    outStream.write(`<p>location: ${person.photo.location}</p>\n`)
}

function listRecentPhotos(outStream, photos){
    photos
        .filter(p => p.date > recentDateCutoff())
        .forEach(p => {
            outStream.write('<div>\n')
            emitPhotoData(outStream, p)
            outStream.write(`<p>location: ${p.location}</p>\n`)
            outStream.write('</div>\n')
        })
}

function emitPhotoData(outStream, photo) {
    outStream.write(`<p>title: ${photo.title}</p>\n`)
    outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`)
}