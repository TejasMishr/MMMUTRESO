function createUpdateLink(text, href) {
  var updateLink = document.createElement("a");
  updateLink.textContent = text;
  updateLink.href = href;
  updateLink.target = "_blank";
  updateLink.style.color = "blue";
  updateLink.style.fontSize = "15px";
  updateLink.style.fontWeight = "bold";

  //  image element
  var img = document.createElement("img");
  //star
  img.src = "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2Fstar.gif?alt=media&token=3986e7fb-4607-4fd9-a6de-a27e061eefa8";
  img.style.width = "22px";

  var marquee = document.getElementById("m5");
  marquee.appendChild(img);
  marquee.appendChild(document.createTextNode("\u00A0"));
  marquee.appendChild(updateLink);
  marquee.appendChild(document.createTextNode("\u00A0|\u00A0")); //separator
}

function createUpdateExtraLink(text, href) {
  var updateLink = document.createElement("a");
  updateLink.textContent = text;
  updateLink.href = href;
  updateLink.target = "_blank";
  updateLink.style.color = "blue";
  updateLink.style.fontSize = "15px";
  updateLink.style.fontWeight = "bold";

  // image element
  var img = document.createElement("img");
  //warn
  img.src = "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2Fwarn.png?alt=media&token=9aec9265-8f27-47ad-ab5f-99bc9f553997";
  img.style.width = "22px";

  var marquee = document.getElementById("m5");
  marquee.appendChild(img);
  marquee.appendChild(document.createTextNode("\u00A0"));
  marquee.appendChild(updateLink);
  marquee.appendChild(document.createTextNode("\u00A0|\u00A0")); //pipe separator
}
createUpdateLink("Mechanical Minor 2 papers updated", "#");
createUpdateLink("MMMUT RESOURCE HUB", "#");
createUpdateLink("New Holiday Calender updated", "#");
createUpdateLink("Mechanical Minor 2 papers updated", "#");
createUpdateLink("Cutoff Added", "https://mmmut.xyz/cutoff/cutoff.html");
createUpdateLink("Placement stats added", "https://mmmut.xyz/Placement/placement.html");
createUpdateLink("Syllabus Updated", "https://mmmut.xyz/syllabus/syllabus.html");
// createUpdateExtraLink("Report Issues", "report.html");

createUpdateLink("IOT Notes Updated", "#");

createUpdateLink("B-pharma updated", "#");

createUpdateLink("Mechanical Notes Added", "#");
createUpdateLink("Important Links Added", "#");
createUpdateLink("  ", "#");

document.getElementById("m5").start();
