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
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2Fcse.jpg?alt=media&token=27e85a4e-1363-40c2-a8aa-f582921540eb", title: "CSE",link: "notes/note.html?branch=0"},
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FIT.jpg?alt=media&token=dcd24693-a912-40c9-ae3f-040429d004e3", title: "IT",link: "notes/note.html?branch=1" },
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FECE.jpg?alt=media&token=1287f913-9066-4f47-aedb-c354d21cadad", title: "ECE" ,link: "notes/note.html?branch=2"},
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FIOT.jpg?alt=media&token=67a36957-19bc-46cd-946b-df0aec66b494", title: "IOT" ,link: "notes/note.html?branch=13"},
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FEE.jpg?alt=media&token=a658faa6-432a-4ef5-a846-eb430118fd81", title: "EE",link: "notes/note.html?branch=3" },
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FCIVIL.jpg?alt=media&token=a687cddb-8b23-4f7c-9353-17cb746d553e", title: "CIVIL" ,link: "notes/note.html?branch=4"},
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2Fmech.jpg?alt=media&token=e0d2eab3-5190-4cfc-a15b-38340d148f22", title: "MECH",link: "notes/note.html?branch=5" },
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FCHEM.jpg?alt=media&token=486a1114-84a6-47d2-bf6f-06708690902d", title: "CHEM" ,link: "notes/note.html?branch=6"},
   
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FBpharma.jpg?alt=media&token=3bec86d8-c32a-4127-8e76-dcc714b1915a", title: "BPHARMA",link: "notes/note.html?branch=7" },
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FMCA.jpg?alt=media&token=9f4e55f5-de11-4107-99b8-4dd7d7f5856f", title: "MCA",link: "notes/note.html?branch=8" },
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FBBA.jpg?alt=media&token=5d93cb58-3a00-4550-af42-e1e7ba376f61", title: "BBA",link: "notes/note.html?branch=9" },
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FMBA.jpg?alt=media&token=438d3057-479c-49df-98f1-bb5da2cd0e7c", title: "MBA" ,link: "notes/note.html?branch=10"},
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FMSC.jpg?alt=media&token=29c0eb31-f16e-4de4-8b23-9698ee90792d", title: "MSC" ,link: "notes/note.html?branch=11"},
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FMTECH.jpg?alt=media&token=f9e84528-284c-447a-aee6-7229717a37cd", title: "MTECH" ,link: "notes/note.html?branch=12"},
   
  ];
  
  // Adding dynamic images with titles to the "PYQs" custom tab
  const pyqsImages = [
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2Fbtech_pyq.jpg?alt=media&token=f6a7543a-c90d-4ec9-bab7-5f929c51e19f", title: "BTECH",link: "pyq/PYQ.html" },
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2Fmca_pyq.jpg?alt=media&token=f74338d8-b4b2-40e5-9598-fdca55965084", title: "MCA",link: "MCA/mca.html?branch=0" },
    { src: "img/Bpharma_pyq.jpg", title: "BPHARMA" ,link: "Bpharm/bpharm.html?branch=0"},
    
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2Fbba_pyq.jpg?alt=media&token=cba0d7ae-0870-445a-bece-250f6b2c7e9b", title: "BBA",link: "BBMBA/BBMB.html" },
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2Fmba_pyq.jpg?alt=media&token=1966851c-707a-4da8-816a-84c016c168e1", title: "MBA",link: "BBMBA/BBMB.html" },
    // { src: "img/mca_pyq.jpg", title: "MCA",link: "notes/note.html?branch=0" },
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2Fmtech_pyq.jpg?alt=media&token=a3ddbde3-4332-4ebc-9891-77fede4fb1ac", title: "MTECH",link: "mtech/mtech.html" },
  ];
  
  // Adding dynamic images with titles to the "Lectures" custom tab
  const lecturesImages = [
    { src: "img/btech_pyq.jpg", title: "BTECH",link: "Lecture/lecture.html" },
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2Fmtech_pyq.jpg?alt=media&token=a3ddbde3-4332-4ebc-9891-77fede4fb1ac", title: "MTECH",link: "Contribute.html" },
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FBpharma.jpg?alt=media&token=3bec86d8-c32a-4127-8e76-dcc714b1915a", title: "BPharm" ,link: "Bpharm/Lecture/lecture.html"},
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2Fmca_pyq.jpg?alt=media&token=f74338d8-b4b2-40e5-9598-fdca55965084", title: "MCA",link: "MCA/Lecture/lecture.html" },
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FBBA.jpg?alt=media&token=5d93cb58-3a00-4550-af42-e1e7ba376f61", title: "BBA",link: "Contribute.html" },
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2Fmba_pyq.jpg?alt=media&token=1966851c-707a-4da8-816a-84c016c168e1", title: "MBA",link: "Contribute.html" },
    // { src: "img/mca_pyq.jpg", title: "MCA",link: "Contribute.html" },
    
  ];
  
  // Adding dynamic images with titles to the "Misc Materials" custom tab
  const miscImages = [
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FRegistration.jpeg?alt=media&token=dfaa40d9-18c2-46b8-8d0f-2cb87242cb92", title: "Register" ,link: "https://registration.mmmut.ac.in/"},
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2Fsyllabus.jpg?alt=media&token=d54b81ad-f1d7-43b9-a8d9-3a8145bd0c7b", title: "SYLLABUS",link: "syllabus/syllabus.html" },
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FResult.jpeg?alt=media&token=adab2cc0-b7b9-41d6-8d74-994bf1cf84db", title: "Result" ,link: "http://172.16.1.250:8081/jasperserver/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2FStudents&reportUnit=%2FStudents%2FResult_of_All_Semesters&standAlone=true"},
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FAcademic_calender.jpeg?alt=media&token=01e42dc8-a4d0-440f-9a5d-2888080ba17c", title: "Calender",link: "holidays/holidays.html" },
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FCutoff.jpeg?alt=media&token=23d2aa22-b929-4d41-9ce6-4d561a649d68", title: "Cutoff" ,link: "cutoff/cutoff.html"},
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FFee.jpeg?alt=media&token=ffb27728-17b6-4bd4-b984-1f5ffc984369", title: "Fee" ,link: "Fee/feestructure.html"},
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FNotice.jpeg?alt=media&token=55e60add-8377-4c06-ba1d-60aacbbfe8ae", title: "Contribute" ,link: "Contribute.html"},
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2Fplacement.jpeg?alt=media&token=5ae54dfb-21cd-4106-b41d-d3ac6b6dd031", title: "Placement" ,link: "Placement/placement.html"},
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FTimetable.jpeg?alt=media&token=e416e03c-edb2-49a6-9a08-ebf60eae64ba", title: "TimeTable" ,link: "timetable/timetable.html"},
    { src: "https://firebasestorage.googleapis.com/v0/b/mmmutapi.appspot.com/o/img%2FAlumini.jpeg?alt=media&token=d6252154-ccc2-4bc9-b0b9-be4a074e7538", title: "Alumini" ,link: "https://www.malaviyans.in/"},
  ];
  
  // Call the function to add dynamic images with titles and parent divs to the respective custom tabs
  
  
  addImagesToCustomTab("notes", notesImages);
  addImagesToCustomTab("pyqs", pyqsImages);
  addImagesToCustomTab("lectures", lecturesImages);
  addImagesToCustomTab("misc", miscImages);
  
  
  
   