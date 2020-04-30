class MenuTable extends SiteObject {
    constructor(container, width, height, x, y, text, color, value) {
        super(container, width, height, x, y);

        this.text=text;
        this.color=color;
        this.value=value;
        this.a=0.1;
        this.targetY=this.height;

        this.div.innerText=this.text;
        this.div.value=this.value;
        this.div.targetY=this.targetY;
        this.div.style.color=this.color;
        this.div.style.background="white";
        this.div.style.cursor="default";
        this.div.style.lineHeight=this.height+"px";
        this.div.style.textAlign="center";
        this.div.style.fontSize=12+"pt";
        this.div.style.fontWeight="bold";
    }
    event() {
        this.div.addEventListener("mouseover", function() {
            this.style.background=this.style.color;
            this.style.color="white";
            this.targetY=50+50*categoryArray[this.value+1].length;
        });
        this.div.addEventListener("mouseout", function() {
            this.style.color=this.style.background;
            this.style.background="white";
            this.targetY=50;
        });
    }
    move() {
        this.height=this.height+this.a*(this.div.targetY-this.height);
        this.div.style.height=this.height+"px";
    }
}