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
  img.src = "topbar/star.gif";
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
  img.src = "topbar/warn.jpeg";
  img.style.width = "22px";

  var marquee = document.getElementById("m5");
  marquee.appendChild(img);
  marquee.appendChild(document.createTextNode("\u00A0"));
  marquee.appendChild(updateLink);
  marquee.appendChild(document.createTextNode("\u00A0|\u00A0")); //pipe separator
}

createUpdateLink("Cutoff Added", "https://mmmut.xyz/cutoff/cutoff.html");
createUpdateLink("Placement stats added", "https://mmmut.xyz/Placement/placement.html");
createUpdateLink("Syllabus Updated", "https://mmmut.xyz/syllabus/syllabus.html");
createUpdateExtraLink("Report Issues", "report.html");

createUpdateLink("IOT Notes Updated", "#");

createUpdateLink("B-pharma updated", "#");

createUpdateLink("Time Table UPDATED", "timetable/timetale.html");
createUpdateLink("MCA BBA MBA PYQ Added", "#");
createUpdateLink("Mechanical Notes Added", "#");
createUpdateLink("Important Links Added", "#");

document.getElementById("m5").start();
