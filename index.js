const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')

const TabContent = document.querySelector('.tap-content');
TabContent.innerHTML = "TAB 1"

let activeTab = one;
activeTab.classList.add('active');

// events
one.addEventListener('click', () => {
    TabContent.innerHTML = "TAB 1";
    activeTab.classList.remove('active');
    one.classList.add('active');
    activeTab = one;
})

two.addEventListener('click', () => {
    TabContent.innerHTML = "TAB 2";
    activeTab.classList.remove('active')
    two.classList.add('active');
    activeTab = two;
})

three.addEventListener('click', () => {
    TabContent.innerHTML = "TAB 3";
    activeTab.classList.remove('active')
    three.classList.add('active');
    activeTab = three;
})

four.addEventListener('click', () => {
    TabContent.innerHTML = "TAB 4";
    activeTab.classList.remove('active')
    four.classList.add('active');
    activeTab = four;
})

