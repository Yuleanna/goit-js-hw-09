import"./assets/styles-b168477b.js";const e={email:"",message:""},a=document.querySelector(".feedback-form"),m=a.querySelector('input[name = "email"]');a.querySelector('textarea[name = "message"]');const r=()=>{localStorage.setItem("feedback-form-state",JSON.stringify(e))},l=()=>{const t=localStorage.getItem("feedback-form-state");if(t){const{email:o,message:s}=JSON.parse(t);m.value=o,e.email=o,e.message=s}};document.addEventListener("DOMContentLoaded",l);a.addEventListener("input",t=>{const{name:o,value:s}=t.target;e[o]=s,r()});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Form data:",e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",a.reset()});
//# sourceMappingURL=commonHelpers2.js.map
