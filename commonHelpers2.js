import"./assets/styles-a4c6757c.js";import{i as r}from"./assets/vendor-77e16229.js";import{i as a}from"./assets/alert-icon-4e12bf5a.js";const l="/goit-js-hw-10/assets/resolve-icon-fb8a7a60.svg",c=document.querySelector(".form");c.addEventListener("submit",n);function n(o){o.preventDefault();const s=o.target.delay.value,t=o.target.state.value;new Promise((e,i)=>{setTimeout(()=>{t==="fulfilled"?e(s):i(s)},s)}).then(e=>{r.success({message:`Fulfilled promise in ${e}ms`,messageSize:"16",messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#326101",iconColor:"#fff",iconUrl:l})}).catch(e=>{r.error({message:`Rejected promise in ${e}ms`,messageSize:"16",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#ffbebe",iconUrl:a,iconColor:"#fff"})})}
//# sourceMappingURL=commonHelpers2.js.map