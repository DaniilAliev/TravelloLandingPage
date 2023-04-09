const changeTabs = () => {
  const tabs = document.querySelector('.tabs');
  tabs.addEventListener('click', (e) => {
    e.preventDefault();
    // Код для вкладок
    const currentTab = e.target.closest('li');
    const id = e.target.getAttribute('href');
    const li = tabs.querySelectorAll('li');
    [...li].forEach((tab) => tab.classList.remove('active'));
    currentTab.classList.add('active');

    // Код для контейнеров
    const tabPane = document.querySelectorAll('.tab-pane');
    tabPane.forEach((tab) => tab.classList.remove('active'));
    const activeTab = document.getElementById(id.slice(1, id.length));
    activeTab.classList.add('active');
  });
};

export default changeTabs;
