import"./assets/styles-a4c6757c.js";import{f as g,i as b}from"./assets/vendor-77e16229.js";const i=document.querySelector("#datetime-picker"),e=document.querySelector("button[data-start]"),p=document.querySelector("[data-days]"),h=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),v=document.querySelector("[data-seconds]");e.setAttribute("disabled","");let n,s,y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){n=t[0],n<new Date?(e.setAttribute("disabled",""),e.classList.remove("right-date"),b.error({message:"Please choose a date in the future",backgroundColor:"#ef4040",messageColor:"#fff",messageSize:"16",imageWidth:302,close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#b51b1b",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",iconUrl:"./img/alert-icon.svg",iconColor:"#FAFAFB"})):(e.removeAttribute("disabled",""),e.classList.add("right-date")),console.log(n)}};g(i,y);e.addEventListener("click",()=>{s&&clearInterval(s),e.setAttribute("disabled",""),e.classList.remove("right-date"),i.setAttribute("disabled",""),l(),s=setInterval(l,1e3)});function l(t){if(t=n.getTime()-Date.now(),t<0){clearInterval(s),i.removeAttribute("disabled","");return}const c=1e3,a=c*60,o=a*60,r=o*24,d=Math.floor(t/r),u=Math.floor(t%r/o),m=Math.floor(t%r%o/a),f=Math.floor(t%r%o%a/c);p.textContent=String(d).padStart(2,"0"),h.textContent=String(u).padStart(2,"0"),S.textContent=String(m).padStart(2,"0"),v.textContent=String(f).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
