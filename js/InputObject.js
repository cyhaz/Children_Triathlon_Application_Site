class InputObject extends SiteObject {
    constructor(container, width, height, x, y, text, type) {
        super(container, width, height, x, y);
        this.text=text;
        this.type=type;

        this.input=document.createElement("input");
        this.input.placeholder=this.text+" 입력하세요";
        this.input.type=this.type;
        this.input.style.paddingLeft=3+"px";
        this.div.appendChild(this.input);
    }
}