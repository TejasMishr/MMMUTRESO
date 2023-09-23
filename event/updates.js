// Function to add a new item to either Events or Latest News
function addNewItem(tabType, title, description, link, buttonText) {
  // Create a new list item element
  const listItem = document.createElement('li');
  listItem.classList.add('p-10');

  // Create the title element
  const titleElement = document.createElement('h6');
  titleElement.innerHTML = `<span>${title}</span>`;
  listItem.appendChild(titleElement);

  // Create the description element
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;
  listItem.appendChild(descriptionElement);

  // Create the link element (if a link is provided)
  if (link) {
    const buttonElement = document.createElement('button'); // Create a button element
    buttonElement.textContent = buttonText; // Set the button text
    buttonElement.classList.add('tab-more-button', 'price-dec', 'hvr-float-shadow', 'bg-info'); // Add button styles
    buttonElement.addEventListener('click', () => {
      window.open(link, '_blank'); // Open the link in a new tab when the button is clicked
    });
    listItem.appendChild(buttonElement);
  }

  // Get the tab block for the specified tabType
  const tabBlock = document.querySelector(`#${tabType} .tab-block`);

  // Insert a horizontal line (hr) before the new item
  const previousItem = tabBlock.lastChild;
  if (previousItem) {
    tabBlock.insertBefore(document.createElement('hr'), previousItem.nextSibling);
  }
  document.querySelector('hr').classList.add('hr');
  
  // Add the new item to the tab block
  tabBlock.appendChild(listItem);
}

// Example usage of the updated function


// addNewItem('Events', 'Event Title', 'Event Description', 'https://example.com', 'Learn More');




// Add an event item
addNewItem('events', 'Notice Regarding Orientation Cum Induction Progarammen', 'Notice', 'http://www.mmmut.ac.in/News_content/51201news_09212023.pdf','VIEW..');
addNewItem('events', 'Live webcasting of MMMUT 8th Convocation-2023 on 19-09-2023 at 10:00 AM', '19th September 2023', 'https://www.youtube.com/watch?v=TobiCVMpb0k','Watch..');
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf','VIEW..');
addNewItem('events', 'RESULT OF ALL SEMESTERS', 'USERNAME : student & PASSWORD : student', 'http://172.16.1.250:8081/jasperserver/login.html','LOGIN');
addNewItem('events', 'Game Of Codes : Codechef MMMUT Chapter', 'on 14th September 2023', 'News_content/24134news_09012023.pdf','REGISTER');
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf','More..');
addNewItem('events', 'RESULT OF ALL SEMESTERS', 'USERNAME : student & PASSWORD : student', 'http://172.16.1.250:8081/jasperserver/login.html','More..');
addNewItem('events', 'Game Of Codes : Codechef MMMUT Chapter', 'on 14th September 2023', 'News_content/24134news_09012023.pdf','REGISTER');
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf','More..');
addNewItem('events', 'RESULT OF ALL SEMESTERS', 'USERNAME : student & PASSWORD : student', 'http://172.16.1.250:8081/jasperserver/login.html','Login');
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf','More..');
addNewItem('events', 'Game Of Codes : Codechef MMMUT Chapter', 'on 14th September 2023', 'News_content/24134news_09012023.pdf','REGISTER');


// Add a news item
addNewItem('news', ' Important Notice for Induction Program', '21 September 2023', 'http://www.mmmut.ac.in/News_content/44324news_09222023.pdf','More..');
addNewItem('news', ' Anti-Ragging Duty List', 'NOTICE', 'http://www.mmmut.ac.in/News_content/14040news_09182023.pdf','More..');
addNewItem('news', 'Important Notice for Newly Admitted Students Session 2023-24', 'NOTICE', 'http://www.mmmut.ac.in/News_content/45340news_09142023.pdf','More..');

addNewItem('news', 'Final Result of written exam for Assistant Professor (Contractual) ', 'on 16th September 2023', 'http://www.mmmut.ac.in/News_content/00003news_08022023.pdf','More..');

addNewItem('news', ' Important Notice for Induction Program', '21 September 2023', 'http://www.mmmut.ac.in/News_content/44324news_09222023.pdf','More..');
addNewItem('news', ' Anti-Ragging Duty List', 'NOTICE', 'http://www.mmmut.ac.in/News_content/14040news_09182023.pdf','More..');
addNewItem('news', 'Important Notice for Newly Admitted Students Session 2023-24', 'NOTICE', 'http://www.mmmut.ac.in/News_content/45340news_09142023.pdf','More..');
addNewItem('news', ' Important Notice for Induction Program', '21 September 2023', 'http://www.mmmut.ac.in/News_content/44324news_09222023.pdf','More..');
addNewItem('news', ' Anti-Ragging Duty List', 'NOTICE', 'http://www.mmmut.ac.in/News_content/14040news_09182023.pdf','More..');
addNewItem('news', 'Important Notice for Newly Admitted Students Session 2023-24', 'NOTICE', 'http://www.mmmut.ac.in/News_content/45340news_09142023.pdf','VIEW..');




