// global variable
var objectManager, topContainer, menuContainer, imgContainer, container, bottomContainer;
var menuColor=['#FF530D','#FFC801','#93C700','#0E99DA'];
var menuArray=[[],[],[],[]];
var categoryArray=[
    ['대회안내','신청하기','GAME','마이페이지'],
    ['종목소개','홍보영상','대회일정'],
    ['회원가입','신청서 작성'],
    ['수영','싸이클','달리기'],
    ['로그인','신청내역확인']
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

}

// create slide main images container
function createImgContainer() {

}

// slide images method
function slideImg() {

    setTimeout("slideImg()", 3000);
}

// info container
function createBottomContainer() {

}

// objectManager method loop
function mainLoop() {
    objectManager.event();
    slideImg();
}

