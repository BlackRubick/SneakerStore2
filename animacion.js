window.addEventListener("scroll",function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("Abajo",this.window.scrollY>0)
})
