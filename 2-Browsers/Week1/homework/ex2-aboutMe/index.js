'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
const personalInfo = document.querySelectorAll('span');

personalInfo[0].innerText = 'Sezar';
personalInfo[1].innerText = 'Icli Kofte';
personalInfo[2].innerText = 'Istanbul';
const listElements = document.querySelectorAll('ul');
listElements.forEach((listElm) => (listElm.className = 'list-item'));
