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

createUpdateLink("Update 1", "https://example.com/update1");
createUpdateLink("Update 2", "https://example.com/update2");
createUpdateLink("Syllabus Updated", "sy/sy.html");
createUpdateExtraLink("Report Issues", "report.html");

createUpdateLink("IT Content Updated", "#");

createUpdateLink("B-pharma Sem 1 Added", "#");

createUpdateLink("Civil old Notes Added", "pages/pages.html");
createUpdateLink("MCA BBA MBA department Added", "#");
createUpdateLink("Civil old Notes Added", "pages/pages.html");
createUpdateLink("MCA BBA MBA department Added", "#");

document.getElementById("m5").start();
