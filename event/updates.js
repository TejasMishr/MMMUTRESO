// Function to add a new item to either Events or Latest News
function addNewItem(tabType, title, description, link) {
  // Create a new list item element
  const listItem = document.createElement('li');
  // listItem.id.add('P-10');
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
// Create the button element (if a link is provided)
if (link) {
  const buttonElement = document.createElement('button'); // Create a button element
  buttonElement.textContent = 'More..';
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





// Call the auto-scroll function for both events and news tabs




// Add an event item
addNewItem('events', 'Notice Regarding Orientation Cum Induction Progarammen', 'Notice', 'http://www.mmmut.ac.in/News_content/51201news_09212023.pdf');
addNewItem('events', 'Live webcasting of MMMUT 8th Convocation-2023 on 19-09-2023 at 10:00 AM', '19th September 2023', 'https://www.youtube.com/watch?v=TobiCVMpb0k');
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf');
addNewItem('events', 'Game Of Codes : Codechef MMMUT Chapter', 'on 14th September 2023', 'News_content/24134news_09012023.pdf');
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf');
addNewItem('events', 'Game Of Codes : Codechef MMMUT Chapter', 'on 14th September 2023', 'News_content/24134news_09012023.pdf');
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf');
addNewItem('events', 'Game Of Codes : Codechef MMMUT Chapter', 'on 14th September 2023', 'News_content/24134news_09012023.pdf');addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf');
addNewItem('events', 'Game Of Codes : Codechef MMMUT Chapter', 'on 14th September 2023', 'News_content/24134news_09012023.pdf');
// Add a news item
addNewItem('news', ' Important Notice for Induction Program', '21 September 2023', 'http://www.mmmut.ac.in/News_content/44324news_09222023.pdf');
addNewItem('news', ' Anti-Ragging Duty List', 'NOTICE', 'http://www.mmmut.ac.in/News_content/14040news_09182023.pdf');
addNewItem('news', 'Important Notice for Newly Admitted Students Session 2023-24', 'NOTICE', 'http://www.mmmut.ac.in/News_content/45340news_09142023.pdf');

addNewItem('news', 'Final Result of written exam for Assistant Professor (Contractual) ', 'on 16th September 2023', 'http://www.mmmut.ac.in/News_content/00003news_08022023.pdf');

addNewItem('news', ' Important Notice for Induction Program', '21 September 2023', 'http://www.mmmut.ac.in/News_content/44324news_09222023.pdf');
addNewItem('news', ' Anti-Ragging Duty List', 'NOTICE', 'http://www.mmmut.ac.in/News_content/14040news_09182023.pdf');
addNewItem('news', 'Important Notice for Newly Admitted Students Session 2023-24', 'NOTICE', 'http://www.mmmut.ac.in/News_content/45340news_09142023.pdf');
addNewItem('news', ' Important Notice for Induction Program', '21 September 2023', 'http://www.mmmut.ac.in/News_content/44324news_09222023.pdf');
addNewItem('news', ' Anti-Ragging Duty List', 'NOTICE', 'http://www.mmmut.ac.in/News_content/14040news_09182023.pdf');
addNewItem('news', 'Important Notice for Newly Admitted Students Session 2023-24', 'NOTICE', 'http://www.mmmut.ac.in/News_content/45340news_09142023.pdf');




