var btnUp={el:document.querySelector(".btn-up"),show:function(){this.el.classList.remove("btn-up_hide")},hide:function(){this.el.classList.add("btn-up_hide")},addEventListener:function(){var e=this;window.addEventListener("scroll",(function(){(window.scrollY||document.documentElement.scrollTop)>400?e.show():e.hide()})),document.querySelector(".btn-up").onclick=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}};btnUp.addEventListener();
//# sourceMappingURL=index.bcc9624f.js.map
