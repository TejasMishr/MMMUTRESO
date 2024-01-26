function addNewItem(tabType, title, description, link, buttonText, imageUrl) {
  const listItem = document.createElement('li');
  listItem.classList.add('p-10', 'd-flex', 'align-items-center');

  // Create and append image element
  const imageElement = document.createElement('img');
  imageElement.src = imageUrl;
  imageElement.alt = title;
  imageElement.style.height = '100px';
  listItem.appendChild(imageElement);

  // Create and append title element
  const titleElement = document.createElement('h6');
  titleElement.innerHTML = `<span>${title}</span>`;
  listItem.appendChild(titleElement);

  // Create and append description element
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;
  listItem.appendChild(descriptionElement);

  // Create and append button element if link is provided
  const buttonElement = document.createElement('button');
  let count = parseInt(localStorage.getItem(`${tabType}_${title}_count`)) || getRandomInt(100, 300);

  buttonElement.textContent = `🎂 ${count}`;
  buttonElement.classList.add('tab-more-button', 'price-dec', 'hvr-float-shadow', 'bg-info');

  buttonElement.addEventListener('click', () => {
    const previousCount = count;
    count++;
    buttonElement.textContent = `🎂 ${count}`;

    // Update count in local storage
    localStorage.setItem(`${tabType}_${title}_count`, count.toString());

    // Check if the count has changed
    if (previousCount !== count) {
      // Apply celebration background for two seconds
      listItem.classList.add('celebration-background');
      setTimeout(() => {
        listItem.classList.remove('celebration-background');
      }, 2000);
    }

    // window.open(link, '_blank');
  });

  listItem.appendChild(buttonElement);

  // Append the new item to the tab block
  const tabBlock = document.querySelector(`#${tabType} .tab-block`);
  const previousItem = tabBlock.lastChild;

  if (previousItem) {
    tabBlock.insertBefore(document.createElement('hr'), previousItem.nextSibling);
  }

  document.querySelector('hr').classList.add('hr');
  tabBlock.appendChild(listItem);
}

// Function to get a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Example usage
// addNewItem(
//   'events',
//   'Event Title 1',
//   'Event Description 1',
//   'https://example.com',
//   '🎉 112',
//   'https://s3-us-west-2.amazonaws.com/dbsmedia/'
// );








function isBirthdayToday(birthday) {
  // Assuming the birthday is in the format "MM-DD"
  const today = new Date();
  const formattedToday = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;
  
  var ans = formattedToday.substring(0,6);
  var bir = birthday.substring(0,6);
 
  return bir === ans; 

}

var din = new Date();
var 
currentMonth= din.getMonth();
var month;

switch (currentMonth) {
  case 0:

      month = "Jan.json";

      break;
  case 1:
      month = "Feb.json";
      break;
  case 2:
      month = "Mar.json";
      break;
  case 3:
      month = "Apr.json";
      break;
  case 4:
      month = "May.json";
      break;
  case 5:
      month = "Jun.json";
      break;
  case 6:
      month = "Jul.json";
      break;
  case 7:
      month = "Aug.json";
      break;
  case 8:
      month = "Sept.json";
      break;
  case 9:
      month = "Oct.json";
      break;
  case 10:
      month = "Nov.json";
      break;
  case 11:
      month = "Dec.json";
      break;
  default:
      month = "Invalid Month"; // Handle unexpected cases
}




async function fetchData() {
     var apiUrl = "https://raw.githubusercontent.com/AnonymousAdgaur/BirthdayApi/main/";
   apiUrl = apiUrl + month;
  const proxyUrl = "https://api.allorigins.win/get?url=";

  try {
//  const response = await fetch(apiUrl);
      const response = await fetch(proxyUrl + encodeURIComponent(apiUrl), {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          }
          // ,
          // mode: 'no-cors',
      });

      if (!response.ok) {
          throw new Error(`Error fetching data. Status code: ${response.status}`);
      }

      const data = await response.json();
     
      return data;
  } catch (error) {
      console.error(error);
      return null;
  }
}








var res;
async function main() {
  data = await fetchData();
 
  if (data) {
      var items = JSON.parse(data.contents);

      if (items) {
          res = items;
          // console.log(res);

          if (res) {
              for (let i = 0; i < res.length; i++) {
                  if (isBirthdayToday(res[i].DOB)) {
                    addNewItem('events',`${res[i].Name}`,`${res[i].Branch}`,"",'🎂 112',`${res[i].Photo}`,)
                    // console.log(res[i].Name);
                  }
              }
          } else {
              alert("No Data Found");
          }
      } else {
          alert("No Data Found for the current month");
      }
  }
}


function createCard(item) {
  // Assuming your item has properties like title, image, etc.
  const cardContainer = document.createElement('div');
  cardContainer.className = 'card';

  const titleElement = document.createElement('h2');
  titleElement.textContent = `${item.Name}`;
  titleElement.className='NameOfBirthdayGuy';

  const branch = document.createElement('h3');
  branch.textContent = `${item.Branch}`;
  branch.className='BranchOfBirthdayGuy'

  const year = document.createElement('h3');
  year.textContent = `${item.Year}`;
  year.className='YearOfBirthdayGuy'

  const imageElement = document.createElement('img');
  imageElement.src = `${item.Photo}`;
  imageElement.alt = item.title;
  imageElement.className='ImageOfBirthdayGuy'

  // You can add more elements for other properties like description, etc.

  cardContainer.appendChild(titleElement);
  cardContainer.appendChild(imageElement);
  cardContainer.appendChild(branch);
  cardContainer.appendChild(year);

  // Append the card to the body or any other container
  document.body.appendChild(cardContainer);
}


  main();


// addNewItem('events',`${res[i].Name}`,`${res[i].AllotedBranch}`,'','🎂 112',`${res[i].Photo}`,)