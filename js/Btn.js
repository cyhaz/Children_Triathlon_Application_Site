class Btn extends SiteObject {
    constructor(container, width, height, x, y, text, src) {
        super(container, width, height, x, y);
        this.text=text;
        this.src=src;

        this.div.src=this.src;
        this.div.innerText=this.text;
        this.div.style.color="navy";
    }
    event() {
        this.div.addEventListener("mouseover", function() {
            this.style.fontWeight="bold";
            this.style.textDecoration="underline";
        });
        this.div.addEventListener("mouseout", function() {
            this.style.fontWeight="initial";
            this.style.textDecoration="none";
        });
        this.div.addEventListener("click", function() {
            window.location.href=this.src;
        });
    }
}