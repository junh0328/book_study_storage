/**
 *   outStream.write(`<p>location: ${photo.location}</p>\n`); 를 외부에서 사용해야 하는 경우
 */

function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write("<div>\n");
      emitPhotoData(outStream, p);
      outStream.write("</div>\n");
    });
}

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>title: ${photo.title}</p>\n`);
  outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
  outStream.write(`<p>location: ${photo.location}</p>\n`);
}

function renderPhoto(outStream, aPhoto) {
  outStream.write("");
}

function recentDateCutoff() {
  //7 days ago.
  return new Date().setDate(new Date().getDate() - 7);
}
