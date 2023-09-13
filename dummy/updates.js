// Function to add a new item to either Events or Latest News
function addNewItem(tabType, title, description, link) {
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

  // Add the new item to the tab block
  tabBlock.appendChild(listItem);
}





// Call the auto-scroll function for both events and news tabs




// Add an event item
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf');

// Add a news item
addNewItem('news', 'Final screening report of Pharmaceutical Science and Technology Department', 'MMMUT', 'News_content/24504news_09122023.pdf');
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf');

addNewItem('news', 'Final screening report of Pharmaceutical Science and Technology Department', 'MMMUT', 'News_content/24504news_09122023.pdf');
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf');

addNewItem('news', 'Final screening report of Pharmaceutical Science and Technology Department', 'MMMUT', 'News_content/24504news_09122023.pdf');
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf');


addNewItem('news', 'Final screening report of Pharmaceutical Science and Technology Department', 'MMMUT', 'News_content/24504news_09122023.pdf');
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf');


addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf');

// Add a news item
addNewItem('news', 'Final screening report of Pharmaceutical Science and Technology Department', 'MMMUT', 'News_content/24504news_09122023.pdf');
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf');

addNewItem('news', 'Final screening report of Pharmaceutical Science and Technology Department', 'MMMUT', 'News_content/24504news_09122023.pdf');
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf');

addNewItem('news', 'Final screening report of Pharmaceutical Science and Technology Department', 'MMMUT', 'News_content/24504news_09122023.pdf');
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf');


addNewItem('news', 'Final screening report of Pharmaceutical Science and Technology Department', 'MMMUT', 'News_content/24504news_09122023.pdf');
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf');






