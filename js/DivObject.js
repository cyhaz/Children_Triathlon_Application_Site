class DivObject extends SiteObject{
    constructor(container, width, height, x, y, value, fontSize) {
        super(container, width, height, x, y);
        this.value=value;
        this.fontSize=fontSize;

        this.div.innerText=this.value;
        this.div.style.fontSize=this.fontSize+"pt";
        this.div.style.color=cArea.style.background;
        this.div.style.fontWeight="bold";
        this.div.style.textAlign="center";
        this.div.style.cursor="default";
    }
}