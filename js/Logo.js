class Logo extends SiteObject {
    constructor(container, width, height, x, y, src) {
        super(container, width, height, x, y);
        this.src=src;        

        this.img=document.createElement("img");
        this.img.src=this.src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.div.appendChild(this.img);
    }
    event() {
        this.div.addEventListener("click", function() {
            window.location.href="mainPage.html";
        });
    }
}