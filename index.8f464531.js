!function(){var e,o,t,n=document.getElementById("menu-toggle"),d=(n.querySelectorAll(".line"),"open"),l="close",a=d;n.addEventListener("click",(function(){n.classList.contains(d)?(n.classList.remove(a),a=l):n.classList.contains(l)&&(n.classList.remove(a),a=d),n.offsetWidth,n.classList.add(a)})),e=document.querySelector("[data-menu-button]"),o=document.querySelector("[data-menu]"),t=document.querySelector("body"),e.addEventListener("click",(function(){var n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),o.classList.toggle("is-open"),t.classList.toggle("body-scroll")})),$(window).scroll((function(){$(window).scrollTop()>100?$("#back2Top").fadeIn():$("#back2Top").fadeOut()})),$(document).ready((function(){$("#back2Top").click((function(e){return e.preventDefault(),$("html, body").animate({scrollTop:0},"slow"),!1}))})),{el:document.querySelector(".btn-up"),show:function(){this.el.classList.remove("btn-up_hide")},hide:function(){this.el.classList.add("btn-up_hide")},addEventListener:function(){var e=this;window.addEventListener("scroll",(function(){(window.scrollY||document.documentElement.scrollTop)>400?e.show():e.hide()})),document.querySelector(".btn-up").onclick=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}}.addEventListener(),function(){var e={openModalBtn1:document.querySelector("[data-modal-by-now-open1]"),openModalBtn2:document.querySelector("[data-modal-by-now-open2]"),openModalBtn3:document.querySelector("[data-modal-by-now-open3]"),closeModalBtn:document.querySelector("[data-modal-by-now-close]"),modal:document.querySelector("[data-modal-by-now]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn1.addEventListener("click",o),e.openModalBtn2.addEventListener("click",o),e.openModalBtn3.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn1:document.querySelector("[data-modal-ingredients-ice-open]"),closeModalBtn:document.querySelector("[data-modal-ingredients-ice-close]"),modal:document.querySelector("[data-modal-ingredients-ice]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn1.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal-ingredients]")};console.log(e.openModalBtn);for(var o=0;o<e.openModalBtn.length;o++)e.openModalBtn[o].addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden")}}(),function(){var e={openModalBtn:document.querySelector("[data-contacts__modal-open-fr]"),closeModalBtn:document.querySelector("[data-contacts__modal-close-fr]"),modal:document.querySelector("[data-contacts__modal-fr]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-location-open]"),closeModalBtn:document.querySelector("[data-modal-location-close]"),modal:document.querySelector("[data-modal-location]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o),window.onclick=function(e){e.target==modal&&(modal.style.display="none")}}(),function(){var e={openModalBtn:document.querySelector("[read-more-modal-open]"),closeModalBtn:document.querySelector("[read-more-modal-close]"),modal:document.querySelector("[read-more-modal]")};function o(){e.modal.classList.toggle("is-open")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}()}();
//# sourceMappingURL=index.8f464531.js.map
