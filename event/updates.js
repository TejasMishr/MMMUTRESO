function addNewItem(tabType, title, description, link, buttonText) {

  const listItem = document.createElement('li');
  listItem.classList.add('p-10');


  const titleElement = document.createElement('h6');
  titleElement.innerHTML = `<span>${title}</span>`;
  listItem.appendChild(titleElement);


  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;
  listItem.appendChild(descriptionElement);


  if (link) {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = buttonText;
    buttonElement.classList.add('tab-more-button', 'price-dec', 'hvr-float-shadow', 'bg-info');
    buttonElement.addEventListener('click', () => {
      window.open(link, '_blank');
    });
    listItem.appendChild(buttonElement);
  }


  const tabBlock = document.querySelector(`#${tabType} .tab-block`);


  const previousItem = tabBlock.lastChild;
  if (previousItem) {
    tabBlock.insertBefore(document.createElement('hr'), previousItem.nextSibling);
  }
  document.querySelector('hr').classList.add('hr');


  tabBlock.appendChild(listItem);
}



//Events


let currentIndex = 0;
const eventItems = [
  {
    title: 'Register for the New Semester: Navigate Your Academic Journey Through Registration Portal',
    description: 'Registration Portal',
    link: 'https://registration.mmmut.ac.in/',
    buttonText: 'Register'
  },
  {
    title: 'RESULT OF ALL SEMESTERS (Connect to Campus Wi-Fi)',
    description: 'Username: student & Password: student',
    link: 'http://172.16.1.250:8081/jasperserver/login.html',
    buttonText: 'LOGIN'
  },
  {
    title:'Student LOGIN Portal: Your Gateway to Academic Resources and Campus Information. Access Your Educational Journey',
    description: 'Student LOGIN Portal',
    link: 'https://registration.mmmut.ac.in/StudentLogin',
    buttonText: 'LOGIN'
  },
  {
    title: 'Register Ragging Complaint',
    description: 'Anti-Ragging',
    link: 'https://forms.office.com/Pages/ResponsePage.aspx?id=1i5z0J-ojUiyneXp583eXH--PWniG4JFlYuBA5ETzWdUN0VENjUzUzZSVkJSVkNQNDIyUUdUQVk4Ny4u',
    buttonText: 'Complaint'
  },
  {
    title: 'Website Access Login Portal ( Faculties )',
    description: 'Only For Faculties',
    link: 'http://www.mmmut.ac.in/admin_stsmmm/adminlogin_mmmec',
    buttonText: 'LOGIN.'
  },
  {
    title: 'RESULT OF ALL SEMESTERS ( Connect With University Wi-fi )',
    description: 'Username:student & Password:student',
    link: 'http://172.16.1.250:8081/jasperserver/login.html',
    buttonText: 'LOGIN.'
  },
  {
    title: 'Website Access Login Portal ( Faculties )',
    description: 'Only For Faculties',
    link: 'http://www.mmmut.ac.in/admin_stsmmm/adminlogin_mmmec',
    buttonText: 'LOGIN.'
  },
  {
    title: 'Sponsored Research Projects ',
    description: 'Funded Projects',
    link: 'http://www.mmmut.ac.in/ViewSponsoredProjects',
    buttonText: 'View..'
  },
  {
    title: 'Register for the New Semester: Navigate Your Academic Journey Through Registration Portal',
    description: 'Registration Portal',
    link: 'https://registration.mmmut.ac.in/',
    buttonText: 'Register'
  },
  {
    title: 'Training And Placement Website',
    description: 'Website',
    link: 'https://tnpmmmut.tech/',
    buttonText: 'View.'
  },
  {
    title: 'RESULT OF ALL SEMESTERS ( Connect With University Wi-fi )',
    description: 'Username:student & Password:student',
    link: 'http://172.16.1.250:8081/jasperserver/login.html',
    buttonText: 'Login.'
  },
  {
    title: 'Stay Linked: Connect with Your Alumni Network for Insights, Opportunities, and Lifelong Connections!',
    description: 'Alumini Portal',
    link: 'https://www.malaviyans.in/',
    buttonText: 'Login.'
  },
  {
    title: 'Eighth Convocation Celebration',
    description: 'on 19th September 2023',
    link: 'News_content/24134news_09012023.pdf',
    buttonText: 'More..'
  },
  {
    title: 'Stay Linked: Connect with Your Alumni Network for Insights, Opportunities, and Lifelong Connections!',
    description: 'Alumini Portal',
    link: 'https://www.malaviyans.in/',
    buttonText: 'Login.'
  },
  {
    title: 'Training and Placement Cell - Your Bridge to Career Success Begins Here',
    description: 'Training And Placement Website',
    link: 'https://tnpmmmut.tech/',
    buttonText: 'View'
  },
  {
    title: 'Website Access Login Portal',
    description: 'Only For Faculties',
    link: 'http://www.mmmut.ac.in/admin_stsmmm/adminlogin_mmmec',
    buttonText: 'LOGIN.'
  }
];



//NEWS

const newsItems = [
  {
    title: 'Holidays and Academic Calander MMMUT Gorakhpur',
    description: 'Academic Calender',
    link: 'https://www.mmmut.xyz/holidays/holidays.html',
    buttonText: 'View.'
  },
  {
    title: 'Previous Year Cutoff (2021 , 2022 , 2023) ',
    description: 'MMMUT Cutoff',
    link: 'http://www.mmmut.xyz/cutoff/cutoff.html',
    buttonText: 'Explore'
  },
  {
    title: 'Fee Structure Of MMMUT (B.tech,BBA,MCA,B-Pharma,MBA,M.tech)',
    description: 'Fee Structure MMMUT',
    link: 'http://www.mmmut.xyz/Fee/feestructure.html',
    buttonText: 'VIEW.'
  },
  {
    title: 'Previous Year Placement Bronchure MMMUT (2021,2022)',
    description: 'Placement Bronchure',
    link: 'https://www.mmmut.xyz/Placement/placement.html',
    buttonText: 'View.'
  },
  {
    title: 'Eighth Convocation Celebration',
    description: 'on 19th September 2023',
    link: 'News_content/24134news_09012023.pdf',
    buttonText: 'VIEW..'
  },
  {
    title: 'RESULT OF ALL SEMESTERS',
    description: 'Username: student & Password: student',
    link: 'http://172.16.1.250:8081/jasperserver/login.html',
    buttonText: 'LOGIN'
  },
  {
    title: 'Important Notice regarding inauguration of New Administrative Building',
    description: 'on 26.09.2023, 11:00 AM',
    link: 'http://www.mmmut.ac.in/News_content/11022news_09252023.pdf',
    buttonText: 'More.'
  },
  {
    title: 'Holidays and Academic Calander MMMUT Gorakhpur',
    description: 'Academic Calender',
    link: 'https://www.mmmut.xyz/holidays/holidays.html',
    buttonText: 'View.'
  },
  {
    title: 'RESULT OF ALL SEMESTERS',
    description: 'Username: student & Password: student',
    link: 'http://172.16.1.250:8081/jasperserver/login.html',
    buttonText: 'More..'
  },
  {
    title: 'Important Notice regarding inauguration of New Administrative Building',
    description: 'on 26.09.2023, 11:00 AM',
    link: 'http://www.mmmut.ac.in/News_content/11022news_09252023.pdf',
    buttonText: 'More.'
  },
  {
    title: 'Previous Year Cutoff (2021 , 2022 , 2023) ',
    description: 'MMMUT Cutoff',
    link: 'http://www.mmmut.xyz/cutoff/cutoff.html',
    buttonText: 'Explore'
  },
  {
    title: 'Fee Structure Of MMMUT (B.tech,BBA,MCA,B-Pharma,MBA,M.tech)',
    description: 'Fee Structure MMMUT',
    link: 'http://www.mmmut.xyz/fee/fee.html',
    buttonText: 'VIEW.'
  },
  {
    title: 'Previous Year Placement Bronchure MMMUT (2021,2022)',
    description: 'Placement Bronchure',
    link: 'https://www.mmmut.xyz/placement/placement.html',
    buttonText: 'View.'
  },
  {
    title: 'Important Notice regarding inauguration of New Administrative Building',
    description: 'on 26.09.2023, 11:00 AM',
    link: 'http://www.mmmut.ac.in/News_content/11022news_09252023.pdf',
    buttonText: 'More.'
  },
  {
    title: 'Important Notice for Induction Program',
    description: '21 September 2023',
    link: 'http://www.mmmut.ac.in/News_content/44324news_09222023.pdf',
    buttonText: 'More..'
  },
  {
    title: 'Anti-Ragging Duty List',
    description: 'NOTICE',
    link: 'http://www.mmmut.ac.in/News_content/14040news_09182023.pdf',
    buttonText: 'More..'
  },
  {
    title: 'Important Notice for Newly Admitted Students Session 2023-24',
    description: 'NOTICE',
    link: 'http://www.mmmut.ac.in/News_content/45340news_09142023.pdf',
    buttonText: 'More..'
  },
  {
    title: 'Final Result of written exam for Assistant Professor (Contractual)',
    description: 'on 16th September 2023',
    link: 'http://www.mmmut.ac.in/News_content/00003news_08022023.pdf',
    buttonText: 'More..'
  }
 
];


function displayAllEvents() {
  const tabBlock = document.querySelector('#events .tab-block');
  for (let i = 0; i < eventItems.length; i++) {
    const eventItem = eventItems[i];
    addNewItem('events', eventItem.title, eventItem.description, eventItem.link, eventItem.buttonText);
  }

  if (tabBlock.children.length > 2) {
    tabBlock.removeChild(tabBlock.firstChild);
  }
}

function scrollEventItems() {
  if (currentIndex >= eventItems.length) {
    currentIndex = 0;
  }

  const tabBlock = document.querySelector('#events .tab-block');
  const eventItem = eventItems[currentIndex];
  const newsItem = newsItems[currentIndex];

  addNewItem('events', eventItem.title, eventItem.description, eventItem.link, eventItem.buttonText);
  if (currentIndex < newsItems.length) {
    addNewItem('news', newsItem.title, newsItem.description, newsItem.link, newsItem.buttonText);
  }

  if (tabBlock.children.length > 2) {
    tabBlock.removeChild(tabBlock.firstChild);
  }

  currentIndex++;
}


displayAllEvents();

setTimeout(function() {
  setInterval(scrollEventItems, 2000);
}, 5000); // Adjust the delay and interval as needed

// FORMAT -> addNewItem('Events', 'Event Title', 'Event Description', 'https://example.com', 'Button text');


