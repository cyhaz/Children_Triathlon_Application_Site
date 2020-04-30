class ContainerMenuTr extends SiteObject {
    constructor(container, width, height, x, y, text, color, src) {
        super(container, width, height, x, y);

        this.text=text;
        this.color=color;
        this.src=src;

        this.div.src=src;
        this.div.innerText=this.text;
        this.div.style.color="white";
        this.div.style.background=this.color;
        this.div.style.textAlign="center";
        this.div.style.lineHeight=this.height+"px";
        this.div.style.fontSize=12+"pt";
    }
    event() {
        this.div.addEventListener("mouseover", function() {
            this.style.fontSize=13+"pt";
            this.style.fontWeight="bold";
        });
        this.div.addEventListener("mouseout", function() {
            this.style.fontSize=12+"pt";
            this.style.fontWeight="none";
        });
        this.div.addEventListener("click", function() {
            window.location.href=this.src;
        });
    }
}