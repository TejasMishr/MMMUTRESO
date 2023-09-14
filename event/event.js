document.addEventListener('DOMContentLoaded', function () {
  const tabItems = document.querySelectorAll('.tab-item');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabItems.forEach(item => {
      item.addEventListener('click', () => {
          // Remove 'active' class from all tab items and panels
          tabItems.forEach(tabItem => tabItem.classList.remove('active'));
          tabPanels.forEach(tabPanel => tabPanel.classList.remove('active'));

          // Add 'active' class to the clicked tab item and corresponding panel
          item.classList.add('active');
          const targetPanelId = item.getAttribute('data-tab');
          const targetPanel = document.getElementById(targetPanelId);
          targetPanel.classList.add('active');
      });
  });
});

// let d = document.querySelector('.p-10');
// let a;
// function scrol(){
//   // alert("ok");
//   a = a + 50;
//   d.style.transform=`translateY(${a}px)`;
//   // d.style.transform = "translateY(`${}`px)";
// }




// setInterval(() => {
//   scrol();
// }, 500);


const elements = document.querySelectorAll('.p-10, hr');

function scrollAnimation() {
  let scrollTop = window.scrollY;

  elements.forEach((element) => {
    element.style.transform = `translateY(${scrollTop}px)`;
  });

  requestAnimationFrame(scrollAnimation);
}

scrollAnimation();

// let p10 = document.querySelector('.p-10');
// let hre = document.querySelector('hr'); // hr

// let tabBlock = document.querySelector('.tab-block');

// tabBlock.addEventListener('mouseover',function(){
//   // alert('ok');
//   p10.style.removeProperty="animation";
//   hre.style.removeProperty="animation";
 
// })
// tabBlock.addEventListener('mouseout', function () {
//   // Add the animation property to p10 and hre
//   p10.style.animation = 'scroll 30s infinite linear'; // Replace with your animation details
//   hre.style.animation = 'scroll 30s infinite linear'; // Replace with your animation details
//   alert('xxxs');
// });
