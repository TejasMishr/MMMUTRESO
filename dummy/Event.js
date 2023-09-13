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
  if (link) {
      const linkElement = document.createElement('a');
      linkElement.textContent = 'More..';
      linkElement.classList.add('pull-right', 'price-dec', 'hvr-float-shadow', 'bg-info');
      linkElement.href = link;
      linkElement.target = '_blank';
      listItem.appendChild(linkElement);
  }

  // Get the tab block for the specified tabType
  const tabBlock = document.querySelector(`#${tabType} .tab-block`);

  // Add the new item to the tab block
  tabBlock.appendChild(listItem);
}

// Example usage:
// Add an event item
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', '.pdf');

// Add a news item
addNewItem('news', 'Final screening report of Pharmaceutical Science and Technology Department', 'MMMUT', '.pdf');
