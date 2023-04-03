const changeTabs = () => {
    const tabs = document.querySelector('.tabs');
    console.dir(tabs)
    tabs.addEventListener('click', (e) => {
        e.preventDefault()
        // Код для вкладок
        const currentTab = e.target.closest('li');
        const id = e.target.getAttribute('href');
        console.log(id.slice(1, id.length))
        const li = tabs.querySelectorAll('li');
        [...li].forEach((tab) => tab.classList.remove('active'))
        currentTab.classList.add('active');

        // Код для контейнеров
        const tabPane = document.querySelectorAll('.tab-pane')
        // console.log(tabPane)
        tabPane.forEach((tab) => tab.classList.remove('active'));
        const activeTab = document.getElementById(id.slice(1, id.length));
        activeTab.classList.add('active')
        console.log(activeTab);
    })
    
}

export default changeTabs;