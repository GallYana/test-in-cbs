/* Бургер меню*/

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header__menu').toggleClass('menu_color');
    });
});


/* Tabs в Десктоп версии*/

const tabsBtnColumn = document.querySelectorAll(".tabs__nav__column-btn");
const tabsColumnItems = document.querySelectorAll(".tabs__c-item");

tabsBtnColumn.forEach(onTabColumnClick);

function onTabColumnClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabCId = currentBtn.getAttribute("data-tab-c");
        let currentTab = document.querySelector(tabCId);

        if( ! currentBtn.classList.contains('active-tab') ) {
            tabsBtnColumn.forEach(function(item) {
                item.classList.remove('active-tab');
            });
    
            tabsColumnItems.forEach(function(item) {
                item.classList.remove('active-tab');
            });
    
            currentBtn.classList.add('active-tab');
            currentTab.classList.add('active-tab');
        }
    });
}

document.querySelector('.tabs__nav__column-btn').click();


const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();

/* Selector в Мобильной версии*/

let currentOpenId = 0;

var data = {
  0: 'tab0',
  1: 'tab1',
  2: 'tab2',
  3: 'tab3',
  4: 'tab4',
};

function changeText(id) {
  var elementId = data[id];
  var element = document.getElementById(elementId);

  $(element).show();
  
  var previousElementId = data[currentOpenId];
  var previousElement = document.getElementById(previousElementId);

  $(previousElement).hide();

  currentOpenId = id;
}


let currentOpenId2 = 0;

var dataInf = {
  0: 'inf-tab0',
  1: 'inf-tab1',
  2: 'inf-tab2',
  3: 'inf-tab3',
};


function changeTextInf(id) {
  var elementId = dataInf[id];
  var element = document.getElementById(elementId);

  $(element).show();
  
  var previousElementId = dataInf[currentOpenId2];
  var previousElement = document.getElementById(previousElementId);

  $(previousElement).hide();

  currentOpenId2 = id;
}
