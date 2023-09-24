
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





// FORMAT -> addNewItem('Events', 'Event Title', 'Event Description', 'https://example.com', 'Button text');




// Add an event item
addNewItem('events', 'Notice Regarding Orientation Cum Induction Progarammen', 'Notice', 'http://www.mmmut.ac.in/News_content/51201news_09212023.pdf','VIEW..');
addNewItem('events', 'Live webcasting of MMMUT 8th Convocation-2023 on 19-09-2023 at 10:00 AM', '19th September 2023', 'https://www.youtube.com/watch?v=TobiCVMpb0k','Watch..');
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf','VIEW..');
addNewItem('events', 'RESULT OF ALL SEMESTERS', 'Username: student & Password: student', 'http://172.16.1.250:8081/jasperserver/login.html','LOGIN');
addNewItem('events', 'Game Of Codes: Codechef MMMUT Chapter', 'on 14th September 2023', 'News_content/24134news_09012023.pdf','REGISTER');
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf','More..');
addNewItem('events', 'RESULT OF ALL SEMESTERS', 'Username: student & Password: student', 'http://172.16.1.250:8081/jasperserver/login.html','More..');
addNewItem('events', 'Game Of Codes : Codechef MMMUT Chapter', 'on 14th September 2023', 'News_content/24134news_09012023.pdf','REGISTER');
addNewItem('events', 'Eighth Convocation Celebration', 'on 19th September 2023', 'News_content/24134news_09012023.pdf','More..');
addNewItem('events', 'RESULT OF ALL SEMESTERS', 'Username: student & Password: student', 'http://172.16.1.250:8081/jasperserver/login.html','Login');
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




