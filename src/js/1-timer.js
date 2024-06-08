'use strict';

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import imageUrl from '../img/alert-icon.svg'

const timeInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const dayBlock = document.querySelector('[data-days]');
const hoursBlock = document.querySelector('[data-hours]');
const minutesBlock = document.querySelector('[data-minutes]');
const secondsBlock = document.querySelector('[data-seconds]');

     startBtn.setAttribute('disabled', '');

let userSelectedDate;
let timeInterval

let options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
               if (userSelectedDate < new Date()) {
            startBtn.setAttribute('disabled', '');
            startBtn.classList.remove('right-date');
                   iziToast.error({
                       message: 'Please choose a date in the future',
                       backgroundColor: '#ef4040',
                       messageColor: '#fff',
                       messageSize: '16',
                       imageWidth: 302,
                       close: true,
                       closeOnEscape: true,
                       closeOnClick: true,
                       progressBar: true,
                       progressBarColor: '#b51b1b',
                       transitionIn: 'flipInX',
                       transitionOut: 'flipOutX',
                       position: 'topRight',
                       iconUrl: imageUrl,
                       iconColor: '#FAFAFB',
                   });
        } else {
            startBtn.removeAttribute('disabled', '')
            startBtn.classList.add('right-date')
        }
                 console.log(userSelectedDate);
       
    }
  
};

flatpickr(timeInput, options);

startBtn.addEventListener('click', () => {
    if (timeInterval) clearInterval(timeInterval);
    startBtn.setAttribute('disabled', '');
    startBtn.classList.remove('right-date');
    timeInput.setAttribute('disabled', '');
    convertMs();
    timeInterval = setInterval(convertMs, 1000);
     })

let ms;

function convertMs(ms) {

    ms = userSelectedDate.getTime() - Date.now();

    if (ms < 0) {
        clearInterval(timeInterval);
        timeInput.removeAttribute('disabled', '');
        return;
    };
           
            // Number of milliseconds per unit of time
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            // Remaining days
            const days = Math.floor(ms / day);
            // Remaining hours
            const hours = Math.floor((ms % day) / hour);
            // Remaining minutes
            const minutes = Math.floor(((ms % day) % hour) / minute);
            // Remaining seconds
            const seconds = Math.floor((((ms % day) % hour) % minute) / second);

            
            dayBlock.textContent = String(days).padStart(2, '0');
            hoursBlock.textContent = String(hours).padStart(2, '0');
            minutesBlock.textContent = String(minutes).padStart(2, '0');
            secondsBlock.textContent = String(seconds).padStart(2, '0');
};



