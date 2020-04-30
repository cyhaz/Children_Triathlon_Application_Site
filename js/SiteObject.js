class SiteObject {
    constructor(container, width, height, x, y) {
        this.container=container;
        this.div=document.createElement("div");
        this.width=width;
        this.height=height; 
        this.x=x;
        this.y=y;

        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        this.div.style.position="absolute";
        this.div.style.overflow="hidden"; 
        this.div.style.cursor="pointer";
        
        container.appendChild(this.div);
    }
    event() {}
    move() {}
}