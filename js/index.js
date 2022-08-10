$(document).ready(function() {

    $('.owl__carousel').owlCarousel({
        items: 6,
        loop: true,
        margin: 20,
        nav: true,

        mouseDrag: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            767: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });


});


// tab links

let tabLink = document.querySelectorAll(".tab__link");
let tabContent = document.querySelectorAll(".tab__content");
// convert nodeList to array
let tabLinks = [...tabLink];
let tabContents = [...tabContent];


tabLinks.forEach(tab => {
  tab.addEventListener('click', function () {
    tabActive(tab);
  });
});

function tabActive(tab) {
  removeActive();
  tab.className === 'tab__link' ? tab.className = "tab__link active" : tab.className = 'tab__link';
  showContent(tab);
}

function removeActive() {
  tabLinks.forEach(tab => {
    if (tab.className === 'tab__link active') {tab.className = "tab__link";}
  });
  tabContents.forEach(elm => {
    if (elm.className === 'tab__content show') {elm.className = "tab__content";}
  });
}

// get index of link and show tabContent
function showContent(tab) {
  let index = tabLinks.indexOf(tab);
  console.log(index);
  tabContents[index].className === 'tab__content' ? tabContents[index].className = "tab__content show" : tabContents[index].className = 'tab__content';
}


// tab links 2

let playlistLink = document.querySelectorAll(".playlist__tab");
let playlistContent = document.querySelectorAll(".playlist__content");
let playlistLinks = [...playlistLink];
let playlistContents = [...playlistContent];


playlistLinks.forEach(tab => {
  tab.addEventListener('click', function () {
    tabActivePlaylist(tab);
  });
});

function tabActivePlaylist(tab) {
  removeActivePlaylist();
  tab.className === 'playlist__tab' ? tab.className = "playlist__tab active" : tab.className = 'playlist__tab';
  showContentPlaylist(tab);
}

function removeActivePlaylist() {
    playlistLinks.forEach(tab => {
    if (tab.className === 'playlist__tab active') {tab.className = "playlist__tab";}
  });
  playlistContents.forEach(elm => {
    if (elm.className === 'playlist__content show') {elm.className = "playlist__content";}
  });
}

function showContentPlaylist(tab) {
  let index = playlistLinks.indexOf(tab);
  playlistContents[index].className === 'playlist__content' ? playlistContents[index].className = "playlist__content show" : playlistContents[index].className = 'playlist__content';
}
