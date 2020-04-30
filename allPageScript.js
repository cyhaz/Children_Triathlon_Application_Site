// global variable
var objectManager, topContainer, menuContainer, imgContainer, container, bottomContainer;
var menuColor=['#FF530D','#FFC801','#93C700','#0E99DA'];
var categoryArray=[
    ['대회안내','신청하기','GAME','마이페이지'],
    ['종목소개','홍보영상','대회일정'],
    ['회원가입','신청서 작성'],
    ['수영','싸이클','달리기'],
    ['로그인','신청내역확인']
];
var mainImgArray=[];
var mainImgSrcArray=[
    "img/mainImg/1.png",
    "img/mainImg/2.png",
    "img/mainImg/3.png",
    "img/mainImg/4.png",
    "img/mainImg/5.png",
    "img/mainImg/6.png",
    "img/mainImg/7.png",
    "img/mainImg/8.png",
];


// all container reset
function init() {
    objectManager=new ObjectManager();
    topContainer=document.getElementById("topContainer");
    menuContainer=document.getElementById("menuContainer");
    imgContainer=document.getElementById("imgContainer");
    container=document.getElementById("container");
    bottomContainer=document.getElementById("bottomContainer");

    // 키보드로 스크롤 제어 막는 함수 (마우스로만 스크롤 제어 가능)
    window.addEventListener("keydown", function(e) {
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
}

// btn [logo, login, signup] 
function createTopContainer() {
    var logo=new Logo(topContainer, 200, 50, 20, 10,  "img/logo.png");
    objectManager.addObject(logo);
    var loginBtn=new Btn(topContainer, 70, 50, 850, 20, "Log In", /*로그인페이지*/"");
    objectManager.addObject(loginBtn);
    var signupBtn=new Btn(topContainer, 70, 50, 930, 20, "Sign Up", /*회원가입페이지*/"");
    objectManager.addObject(signupBtn);
}

// slide menuBar
function createMenuContainer() {
    for(var i=0;i<categoryArray[0].length;i++) {
        var menuTable=new MenuTable(menuContainer, 250, 50, i*250, 0, categoryArray[0][i], menuColor[i], i);
        objectManager.addObject(menuTable);
        for(var j=0;j<categoryArray[i+1].length;j++) {
            var menuTr=new MenuTr(menuTable.div, 250, 50, 0, 50+j*50, categoryArray[i+1][j], menuColor[i],  /*hrefArray[href++]*/"");
            objectManager.addObject(menuTr);
        }
    }
}

// create slide main images container
function createImgContainer() {
    for(var i=0;i<mainImgSrcArray.length;i++) {
        var mainImg=new MainImg(imgContainer, 1000, 450, i*1000, 0, mainImgSrcArray[i]);
        mainImgArray.push(mainImg);
    }
}

// slide images method
function slideImg() {
    for(var i=0;i<mainImgArray.length;i++) {
        $(mainImgArray[i].div).animate({
            left:parseInt($(mainImgArray[i].div).css("left"))-1000+"px"
        }, 500).promise().then(function(e) {
            if(parseInt($(e[0]).css("left"))<=-1000) {
                $(e[0]).css("left", (mainImgSrcArray.length-1)*1000+"px");
            }
        });
    }
    setTimeout("slideImg()", 2000);
}

// info container
function createBottomContainer() {
    var infoBox=new InfoBox(bottomContainer, 800, 100, 20, 30);
}

// objectManager method loop
function mainLoop() {
    objectManager.event();
    setInterval("objectManager.move()", 20);
    slideImg();
}

