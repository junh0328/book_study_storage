for (const p of people) {
  if (!found) {
    if (p === "Don") {
      sendAlert();
      break;
    }
  }
}
