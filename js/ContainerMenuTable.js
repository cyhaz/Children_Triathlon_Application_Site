class ContainerMenuTable extends SiteObject {
    constructor(container, width, height, x, y, text, color) {
        super(container, width, height, x, y);

        this.text=text;
        this.color=color;

        this.div.innerText=this.text;
        this.div.style.textDecoration="underline";
        this.div.style.color="white";
        this.div.style.background=this.color;
        this.div.style.cursor="default";
        this.div.style.textAlign="center";
        this.div.style.lineHeight=this.height/5+"px";
        this.div.style.fontSize=20+"pt";
        this.div.style.fontWeight="bold";
    }
}