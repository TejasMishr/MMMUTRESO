function switchCustomTab(tabName) {

    const tabPanels = document.querySelectorAll(".custom-tab-panel");
  
    tabPanels.forEach(panel => {
      panel.style.display = "none";
    });
  
  
    const selectedTab = document.querySelector(`#custom-${tabName}`);
    if (selectedTab) {
      selectedTab.style.display = "block";
    }
  }
  
  const customTabItems = document.querySelectorAll(".custom-tab-item");
  customTabItems.forEach(item => {
    item.addEventListener("click", function() {
     
      const tabName = this.getAttribute("data-custom-tab");
  
      // Remove 'active' class from all tab items
      customTabItems.forEach(tabItem => {
        tabItem.classList.remove("active");
      });
  
     
      this.classList.add("active");
  
     
      switchCustomTab(tabName);
    });
  });
  
  
  switchCustomTab("notes");
  
  
  
  
  
  
  
  
  
  
  
  
  // Function to create and add image elements with titles, anchor tags, and a parent div to a specific custom tab
  function addImagesToCustomTab(tabName, imageInfo) {
    const customTabBlock = document.querySelector(`#custom-tab-block-${tabName}`);
    
    // Clear existing content
    customTabBlock.innerHTML = "";
    for (const info of imageInfo) {
      const imgParentDiv = document.createElement("div");
      const imgParentDiv2 = document.createElement("div");
      imgParentDiv.classList.add("image-container"); // Add a class for styling
      imgParentDiv2.classList.add("image-container2"); // Add a class for styling
  
     
      const anchor = document.createElement("a");
      anchor.href = info.link; 
      anchor.target = "_blank"; 
      const img = document.createElement("img");
      img.src = info.src;
      img.alt = "Image";
  
      
      anchor.appendChild(img);
  
     
      imgParentDiv.appendChild(anchor);
  
      const title = document.createElement("div");
      title.textContent = info.title;
      title.classList.add("image-title"); 
  
      
      imgParentDiv.appendChild(title);
  
      
      customTabBlock.appendChild(imgParentDiv2);
      imgParentDiv2.appendChild(imgParentDiv);
    }
  }
  
  
  // Adding dynamic images with titles to the "Notes" custom tab
  const notesImages = [
    { src: "img/cse.jpg", title: "CSE",link: "notes/note.html?branch=0"},
    { src: "img/IT.jpg", title: "IT",link: "notes/note.html?branch=1" },
    { src: "img/ECE.jpg", title: "ECE" ,link: "notes/note.html?branch=2"},
    { src: "img/IOT.jpg", title: "IOT" ,link: "notes/note.html?branch=13"},
    { src: "img/EE.jpg", title: "EE",link: "notes/note.html?branch=3" },
    { src: "img/CIVIL.jpg", title: "CIVIL" ,link: "notes/note.html?branch=4"},
    { src: "img/mech.jpg", title: "MECH",link: "notes/note.html?branch=5" },
    { src: "img/CHEM.jpg", title: "CHEM" ,link: "notes/note.html?branch=6"},
   
    { src: "img/Bpharma.jpg", title: "BPHARMA",link: "notes/note.html?branch=7" },
    { src: "img/MCA.jpg", title: "MCA",link: "notes/note.html?branch=8" },
    { src: "img/BBA.jpg", title: "BBA",link: "notes/note.html?branch=9" },
    { src: "img/MBA.jpg", title: "MBA" ,link: "notes/note.html?branch=10"},
    { src: "img/MSC.jpg", title: "MSC" ,link: "notes/note.html?branch=11"},
    { src: "img/MTECH.jpg", title: "MTECH" ,link: "notes/note.html?branch=12"},
   
  ];
  
  // Adding dynamic images with titles to the "PYQs" custom tab
  const pyqsImages = [
    { src: "img/btech_pyq.jpg", title: "BTECH",link: "pyq/PYQ.html" },
    { src: "img/mca_pyq.jpg", title: "MCA",link: "MCA/mca.html?branch=0" },
    { src: "img/Bpharma_pyq.jpg", title: "BPHARMA" ,link: "Bpharm/bpharm.html?branch=0"},
    
    { src: "img/bba_pyq.jpg", title: "BBA",link: "BBMBA/BBMB.html" },
    { src: "img/mba_pyq.jpg", title: "MBA",link: "BBMBA/BBMB.html" },
    // { src: "img/mca_pyq.jpg", title: "MCA",link: "notes/note.html?branch=0" },
    { src: "img/mtech_pyq.jpg", title: "MTECH",link: "mtech/mtech.html" },
  ];
  
  // Adding dynamic images with titles to the "Lectures" custom tab
  const lecturesImages = [
    { src: "img/btech_pyq.jpg", title: "BTECH",link: "Lecture/lecture.html" },
    { src: "img/mtech_pyq.jpg", title: "MTECH",link: "Contribute.html" },
    { src: "img/Bpharma_pyq.jpg", title: "BPharm" ,link: "Bpharm/Lecture/lecture.html"},
    { src: "img/mca_pyq.jpg", title: "MCA",link: "MCA/Lecture/lecture.html" },
    { src: "img/bba_pyq.jpg", title: "BBA",link: "Contribute.html" },
    { src: "img/mba_pyq.jpg", title: "MBA",link: "Contribute.html" },
    // { src: "img/mca_pyq.jpg", title: "MCA",link: "Contribute.html" },
    
  ];
  
  // Adding dynamic images with titles to the "Misc Materials" custom tab
  const miscImages = [
    { src: "img/Registration.jpeg", title: "Register" ,link: "https://registration.mmmut.ac.in/"},
    { src: "img/syllabus.jpg", title: "SYLLABUS",link: "syllabus/syllabus.html" },
    { src: "img/Result.jpeg", title: "Result" ,link: "http://172.16.1.250:8081/jasperserver/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2FStudents&reportUnit=%2FStudents%2FResult_of_All_Semesters&standAlone=true"},
    { src: "img/Academic_calender.jpeg", title: "Calender",link: "holidays/holidays.html" },
    { src: "img/Cutoff.jpeg", title: "Cutoff" ,link: "cutoff/cutoff.html"},
    { src: "img/Fee.jpeg", title: "Fee" ,link: "Fee/feestructure.html"},
    { src: "img/Notice.jpeg", title: "Contribute" ,link: "Contribute.html"},
    { src: "img/placement.jpeg", title: "Placement" ,link: "Placement/placement.html"},
    { src: "img/Timetable.jpeg", title: "TimeTable" ,link: "timetable/timetable.html"},
    { src: "img/Alumini.jpeg", title: "Alumini" ,link: "https://www.malaviyans.in/"},
  ];
  
  // Call the function to add dynamic images with titles and parent divs to the respective custom tabs
  
  
  addImagesToCustomTab("notes", notesImages);
  addImagesToCustomTab("pyqs", pyqsImages);
  addImagesToCustomTab("lectures", lecturesImages);
  addImagesToCustomTab("misc", miscImages);
  
  
  
   