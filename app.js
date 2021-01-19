// set Const to catch the elements
const $Nav = document.getElementById("nav");
const $NavMenu = document.querySelector(".navbar__menu")
const $NavToggle = document.querySelector(".navbar__toggler");
let toggle= false;

// Onclik menu

$NavToggle.addEventListener("click", ()=> {
  if (toggle === false) {    
    $NavToggle.classList.add("navbar__toggler-active");
    $NavMenu.style.setProperty("right","0");
    toggle = true;
    
  } else  {
    $NavToggle.classList.remove("navbar__toggler-active");
    $NavMenu.style.setProperty("right","-100%");
    toggle = false;

  };  
});


// OnClick scroll

let scrollMove = this;
scrollMove.addEventListener("scroll",()=>{
  if (this.scrollY > 20) {
    $Nav.classList.add("sticky");
    $Arrow.style.setProperty("display","inline-block");
    
  } else {
    $Nav.classList.remove("sticky");
    $Arrow.style.setProperty("display","none");    
  }
  
});


// onClick arrow scroll top
const $Arrow = document.querySelector(".goTop");
$Arrow.addEventListener("click",()=>{
  scrollMove.scroll(0,0);
})

