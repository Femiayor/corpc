// This code toggles the color theme of the website between green and white.

function toggleColorTheme() {
  var body = document.body;

  if (body.style.backgroundColor === "#ffffff") {
    body.style.backgroundColor = "#00a65a";
    body.style.color = "#ffffff";
  } else {
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#000000";
  }
}
