class ApplyBtn extends SiteObject {
    constructor(container, width, height, x, y, text, src) {
        super(container, width, height, x, y);
        this.text=text;
        this.src=src;

        this.div.src=this.src;
        this.div.innerText=text;
        this.div.style.textAlign="center";
        this.div.style.lineHeight=this.height+"px";
        this.div.style.color="white";
        this.div.style.fontSize=13+"pt";
        this.div.style.fontWeight="bold";
        this.div.style.background="tomato";
        this.div.style.borderRadius=2+"px";
    }
    event() {
        this.div.addEventListener("mouseover", function() {
            this.style.boxShadow="1.5px 1.5px 1.5px lightgray";
        });
        this.div.addEventListener("mouseout", function() {
            this.style.boxShadow="0px 0px 0px";
        });
        this.div.addEventListener("click", function() {
            for(var i=0;i<inputArray.length;i++) {
                // 모두 입력했는지 확인
                if(inputArray[i].input.value=="") {
                    alert("입력하지 않은 항목이 있습니다.");
                    return;
                } 
            }
            alert("신청이 완료되었습니다.\n신청하신 대회 일정을 확인해주세요.");
            window.location.href=this.src;
        });
    }
} 