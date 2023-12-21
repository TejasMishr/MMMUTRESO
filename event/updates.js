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
  // console.log(bir)
  return bir === ans; 

}
async function fetchData() {
  const apiUrl = "https://www.jsonkeeper.com/b/8ZB9";
  const proxyUrl = "https://api.allorigins.win/get?url=";

  try {
      const response = await fetch(proxyUrl + encodeURIComponent(apiUrl), {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });

      if (!response.ok) {
          throw new Error(`Error fetching data. Status code: ${response.status}`);
      }

      const data = await response.json();
      return data;
  } catch (error) {
      console.error(error.message);
      return null;
  }
}

// Example usage
var din = new Date();
var mnth = din.getMonth();
console.log(mnth);
let data;

var currmnth ;
switch (mnth) {
  case 0: currmnth = 'Jan'
      break;
      case 1: currmnth = 'Feb'
      break;
      case 2: currmnth = 'Mar'
      break;
      case 3: currmnth = 'Apr'
      break;
      case 4: currmnth = 'May'
      break;
      case 5: currmnth = 'June'
      break;    
      case 6: currmnth = 'July'
      break;
      case 7: currmnth = 'Aug'
      break;
      case 8: currmnth = 'Sept'
      break;
      case 9: currmnth = 'Oct'
      break;
      case 10: currmnth = 'Nov'
      break;
      case 11: currmnth = 'Dec'
      break;
  default:
      break;
}


var res;
async function main() {
  data = await fetchData();

  if (data) {

      var items = JSON.parse(data.contents);

      // var x = items[0].DOB.substring(0,6);

      //  var finaldata = items[0].currmnth;
      
      if(mnth){
res = items[0][currmnth];
          // console.log(res);
      }
         



      for (let i = 0; i < res.length; i++) {
         
          if (isBirthdayToday(res[i].DOB)) {

              addNewItem('events',
                `${res[i].Name}`,
                `${res[i].AllotedBranch}`,
                '',
                '🎂 112',
                `${res[i].Photo}`,)
          
          }
          // else{
          //     console.log('aayein');
          // }

        
      }
  }
}
main();