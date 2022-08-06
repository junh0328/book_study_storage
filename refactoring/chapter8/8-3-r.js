function renderPerson(person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  return result.join("\n");
}

function photoDiv(photo) {
  return ["<div>", emitPhotoData(photo), "</div>"].join("\n");
}

function emitPhotoData(photo) {
  const result = [];
  result.push(`<p>title: ${photo.photo.title}</p>`);
  result.push(`<p>location: ${photo.location}</p>`);
  result.push(`<p>date: ${photo.date.toDateString()}</p>`);
  return result.join("\n");
}

function renderPhoto(photo) {
  return "";
}
