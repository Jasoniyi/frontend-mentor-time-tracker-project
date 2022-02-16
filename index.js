'use strict';


const day = document.querySelector('#day');
const week = document.querySelector('#week');
const month = document.querySelector('#month');
const workHr = document.getElementById('workHr');
const workWk = document.getElementById('workWk');
const playHr = document.querySelector('.playHr');
const playWk = document.getElementsByClassName('playWk');
const studyHr = document.querySelector('.studyHr');
const studyWk = document.querySelector('.studyWk');
const exeHr = document.querySelector('.exeHr');
const exeWk = document.querySelector('.exeWk');
const socialHr = document.querySelector('.socialHr');
const socialWk = document.querySelector('.socialWk');
const selfHr = document.querySelector('.selfHr');
const selfWk = document.getElementsByClassName('selfWk');







day.addEventListener('click', () => {
    day.classList.add('add-active');
    week.classList.remove('add-active');                                                                                                                                                                                                                                                                                                                                   
    month.classList.remove('add-active');

    workHr.textContent = '5Hrs';
    workWk.textContent = 'Last week - 7hrs';
    playHr.textContent = '1Hrs';
    playWk.textContent = 'Last week - 2hrs';
    studyHr.textContent = '0Hrs';
    studyWk.textContent = 'Last week - 1hrs';
    exeHr.textContent = '1Hrs';
    exeWk.textContent = 'Last week - 1hrs';
    socialHr.textContent = '1Hrs';
    socialWk.textContent = 'Last week - 3hrs';
    selfHr.textContent = '0Hrs';
    selfWk.textContent = 'Last week - 1hrs';
});

week.addEventListener('click', () => {
    week.classList.add('add-active');
    day.classList.remove('add-active');
    month.classList.remove('add-active');
    workHr.textContent = '32Hrs';
    workWk.textContent = 'Last week - 36hrs';
    playHr.textContent = '10Hrs';
    playWk.textContent = 'Last week - 8hrs';
    studyHr.textContent = '14Hrs';
    studyWk.textContent = 'Last week - 17hrs';   
    console.log("studyWK", studyWk);exeHr.textContent = '4Hrs'
   exeWk.textContent = 'Last week - 5hrs';
   socialHr.textContent = '5Hrs' 
   socialWk.textContent = 'Last week - 10hrs';
   selfHr.textContent = '2Hrs'
   selfWk.textContent ='Last week - 2hrs';
});


month.addEventListener('click', () => {
    month.classList.add('add-active');
    week.classList.remove('add-active');
    day.classList.remove('add-active');
   workHr.textContent = '103Hrs';
   workWk.textContent = 'Last week - 128hrs';
   playHr.textContent = '13Hrs'
   playWk.textContent = 'Last week - 29hrs';
   studyHr.textContent = '13Hrs'
   studyWk.textContent = 'Last week - 19hrs';
   exeHr.textContent = '11Hrs'
   exeWk.textContent = 'Last week - 18hrs';
   socialHr.textContent = '21Hrs' 
   socialWk.textContent = 'Last week - 23hrs';
   selfHr.textContent = '7Hrs'
   selfWk.textContent ='Last week - 11hrs';
})