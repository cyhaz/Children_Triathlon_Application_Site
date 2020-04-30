class TextObject extends SiteObject {
    constructor(container, width, height, x, y, text) {
        super(container, width, height, x, y);
        this.text=text;

        this.div.innerText=this.text;
        this.div.style.fontSize=12+"pt";
        this.div.style.fontWeight="bold";
        this.div.style.cursor="default";
    }
}