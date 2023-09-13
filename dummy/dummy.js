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
