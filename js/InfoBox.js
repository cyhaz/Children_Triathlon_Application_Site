class InfoBox extends SiteObject {
    constructor(container, width, height, x, y) {
        super(container, width, height, x, y);

        this.div.style.color="white";
        this.div.style.cursor="default";
        this.div.innerText=
        "어린이철인3종경기 대회신청안내사이트 \n\n 사이트 제작 : 최유현 \n H.P : 010-2261-2183 / e-mail : cyhaz0957@gmail.com / KakaoTalk ID : cyhaz";
    }
}