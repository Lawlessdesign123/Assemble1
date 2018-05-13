// Shift Color Functions //

var box;
var boxArray;
var backgroundColor;
var text;
boxArray = [];

box = document.getElementsByClassName("sidebar");
for ( var i = 0; i < box.length; i++ ) (function(i){
box[i].onmousemove = function(e) {
if(e.buttons == 1)
box[i].style.backgroundColor = backgroundColor, box[i].innerHTML = text, box[i].style.fontSize = "8px", box[i].style.padding = "0";
}
})(i);

function changeColor(color){
switch(color) {
case 'o' :
backgroundColor = "#FE9545";
text = "08:00-16:30";
break;
case 'r' :
backgroundColor = "#FE5757";
text ="08:30-17:00";
break;
case 'g' :
backgroundColor = "#36D064";
text ="09:00-17:30";
break;
case 'p' :
backgroundColor = "#B163F6";
text ="09:00-17:30";
}
}

box = document.getElementsByClassName("sidebar");
for ( var i = 0; i < box.length; i++ ) (function(i){
box[i].onmousedown = function(e) {
if(e.buttons == 1)
box[i].style.backgroundColor = backgroundColor, box[i].innerHTML = text, box[i].style.fontSize = "8px", box[i].style.padding = "0px";
}
})(i);

function changeColor(color){
switch(color) {
case 'o' :
backgroundColor = "#FE9545";
text = "08:00-16:30";
break;
case 'r' :
backgroundColor = "#FE5757";
text ="08:30-17:00";
break;
case 'g' :
backgroundColor = "#36D064";
text ="09:00-17:30";
break;
case 'p' :
backgroundColor = "#B163F6";
text ="09:00-17:30";
}
}

// if shift button is not selected //

if (box === undefined) {
      backgroundColor = "#A9A9A9";
      text ="*";
      fontWeight = "bold";
} else {
      backgroundColor = "#A9A9A9";
      text ="*";
      fontWeight = "bold";
}

// SPA View Button //

const app = {
    pages: [],
    show: new Event('show'),
    init: function(){
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg)=>{
            pg.addEventListener('show', app.pageShown);
        })

        document.querySelectorAll('.nav-link').forEach((link)=>{
            link.addEventListener('click', app.nav);
        })
        history.replaceState({}, 'Home', '#1week');
        window.addEventListener('popstate', app.poppin);
    },
    nav: function(ev){
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        console.log(currentPage)
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(currentPage).dispatchEvent(app.show);
    },
    pageShown: function(ev){
        console.log('Page', ev.target.id, 'just shown');
        let h1 = ev.target.querySelector('h1');
        h1.classList.add('big')
        setTimeout((h)=>{
            h.classList.remove('big');
        }, 1200, h1);
    },
    poppin: function(ev){
        console.log(location.hash, 'popstate event');
        let hash = location.hash.replace('#' ,'');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        console.log(hash)
        //history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(hash).dispatchEvent(app.show);
    }
}

document.addEventListener('DOMContentLoaded', app.init);

//function closeInput(elm) {
//    var td = elm.parentNode;
//    var value = elm.value;
//    td.removeChild(elm);
//    td.innerHTML = value;
//}

//function addInput(elm) {
//    if (elm.getElementsByTagName('input').length > 0) return;

//    var value = elm.innerHTML;
//    elm.innerHTML = '';

//    var input = document.createElement('input');
//    input.setAttribute('type', 'text');
//    input.setAttribute('value', value);
//    input.setAttribute('onBlur', 'closeInput(this)');
//    elm.appendChild(input);
//    input.focus();
//}
