
var bari1 = document.querySelector('#bar1');
var bari2 = document.querySelector('#bar2');
var bari3 = document.querySelector('#bar3');

var navi = document.querySelector('.navbar ul');
var menu = document.querySelector('#mobile-menu');
// /transform: translate(-101%);

var count = 0;


var f1 = ()=>{
    // alert('ok');
   count++;
   
     
   if(count%2==0){
    // alert("ok");
    navi.style.transform = "translate(-101%)";

    bari2.style.display="flex";
    bari1.style.transform="rotate(0) translateY(0px)";
    bari3.style.transform="rotate(0)  translateY(0px)";
   }else{
    
    navi.style.display="flex";
    navi.style.transform = "translate(0%)";
    bari2.style.display="none";
    bari1.style.transform="rotate(45deg) translateY(6px)";
    bari3.style.transform="rotate(-45deg)  translateY(-5px)";
   }




}


// Js for paper code
var paperCodes = {
    0: { // Session 2022-24
        0: { // MCA
            0: ['MCA-111', 'MCA-112', 'MCA-113', 'MCA-114', 'BHM-01'], // Sem 1
            1: ['MCA-201', 'MCA-202', 'MCA-203', 'MCA-204', 'MHM-102'], // Sem 2
            2: ['MCA-301', 'MCA-302', 'MCA-303', 'MCA-304', 'MCA-305', 'MCA-***', 'MCA-Ind'], // Sem 3
            3: ['MCA-401', 'MCA-***', 'MCA-Sem', 'MCA-Prj']  // Sem 4
        }
    },
    1: { // Session 2023-25
        0: { // MCA
            0: ['MCA-111', 'MCA-112', 'MCA-113', 'MCA-114', 'BHM-01'], // Sem 1
            1: ['MCA-201', 'MCA-202', 'MCA-203', 'MCA-204', 'MHM-102'], // Sem 2
            2: ['MCA-301', 'MCA-302', 'MCA-303', 'MCA-304', 'MCA-305', 'MCA-***', 'MCA-Ind'], // Sem 3
            3: ['MCA-401', 'MCA-***', 'MCA-Sem', 'MCA-Prj']  // Sem 4
        }
    }
};

var sessionSelect = document.getElementById('session');
var branchSelect = document.getElementById('branch');
var semesterSelect = document.getElementById('fileSelect');
var paperCodeSelect = document.getElementById('Pcode');
var pdfViewer = document.getElementById('pdfViewer');
var ripple = document.querySelector("#load");
var maine = document.querySelector('.main');
var pdf = document.querySelector('.pdf-container');

// Function ripple
function displayRipple(duration) {
    ripple.style.display = "flex";
    setTimeout(() => {
        ripple.style.display = "none";
    }, duration);
}

function updatePDF() {
    var selectedSession = sessionSelect.value;
    var selectedBranch = branchSelect.value;
    var selectedSemester = semesterSelect.value;
    var selectedPaperCode = paperCodeSelect.value;

    // Check if any of the selections is -1
    if (selectedSession == -1 || selectedBranch == -1 || selectedSemester == -1 || selectedPaperCode == -1) {
        // Display the "ripple" for 60 seconds (1 minute)
        displayRipple(60000);
        paperCodeSelect.style.backgroundColor = "#fe0000";
        paperCodeSelect.style.color = "white";
    } else {
        paperCodeSelect.style.backgroundColor = "#e1e1e1";
        paperCodeSelect.style.color = "black";

        // Hide "ripple" after 4 seconds
        setTimeout(() => {
            ripple.style.display = "none";
        }, 4000);
    }

    var paperIndex = paperCodes[selectedSession][selectedBranch][selectedSemester].indexOf(selectedPaperCode);
    var selectedFileID = fileIDs[selectedSession][selectedBranch][selectedSemester][paperIndex];

    if (selectedFileID === 'null') {
        maine.style.display = "flex";
        pdf.style.display = "none";
    } else {
        maine.style.display = "none";
        pdf.style.display = "flex";
        // Display the "ripple" for 60 seconds (1 minute)
        displayRipple(60000);
    }

    // Update the src attribute of the iframe
    pdfViewer.src = 'https://drive.google.com/file/d/' + selectedFileID + '/preview';
}

function updatePaperCodes() {
    var selectedSession = sessionSelect.value;
    var selectedBranch = branchSelect.value;
    var selectedSemester = semesterSelect.value;

    if (selectedSession == -1 || selectedBranch == -1 || selectedSemester == -1) {
        paperCodeSelect.style.display = "none";
        return;
    }

    var codes = paperCodes[selectedSession][selectedBranch][selectedSemester];
    paperCodeSelect.innerHTML = '<option value="-1">Select Paper Code</option>';
    codes.forEach(function (code) {
        var option = document.createElement('option');
        option.value = code;
        option.text = code;
        paperCodeSelect.appendChild(option);
    });
    paperCodeSelect.style.display = "block";
}

sessionSelect.addEventListener('change', function () {
    updatePDF();
    updatePaperCodes();
});
branchSelect.addEventListener('change', function () {
    updatePDF();
    updatePaperCodes();
});
semesterSelect.addEventListener('change', function () {
    updatePDF();
    updatePaperCodes();
});
paperCodeSelect.addEventListener('change', updatePDF);

// Initial update when the page loads
updatePDF();
updatePaperCodes();
