class MenuTr extends SiteObject {
    constructor(container, width, height, x, y, text, color, src) {
        super(container, width, height, x, y);

        this.text=text;
        this.color=color;
        this.src=src;

        this.div.innerText=this.text;
        this.div.src=this.src;
        this.div.style.color="white";
        this.div.style.background=this.color;
        this.div.style.lineHeight=this.height+"px";
        this.div.style.textAlign="center";
        this.div.style.fontSize=10+"pt";
    }
    event() {
        this.div.addEventListener("mouseover", function() {
            this.style.fontSize=12+"pt";
            this.style.fontWeight="bold";
        });
        this.div.addEventListener("mouseout", function() {
            this.style.fontSize=10+"pt";
            this.style.fontWeight="none";
        });
        this.div.addEventListener("click", function() {
            window.location.href=this.src;
        });
    }
}