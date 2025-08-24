	const hamburger = document.querySelector(".hamburger");
	const sideBar= document.querySelector(".sidebar");
	const navBar = document.querySelector(".nav-bar");

hamburger.addEventListener('click', function(){

sideBar.style.display = "flex";
hamburger.style.display ="none"

})

const closeSideBar = document.querySelector(".closeSideBar");
closeSideBar.addEventListener('click', function(){
sideBar.style.display= "none";
hamburger.style.display ="block";


})