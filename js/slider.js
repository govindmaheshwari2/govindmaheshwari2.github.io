var slider1 = document.getElementById("slide1");
var slider2 = document.getElementById("slide2");
var slider3 = document.getElementById("slide3");
var slider4 = document.getElementById("slide4");
var sliderHead1 = document.getElementById("sliderHead1");
var sliderHead2 = document.getElementById("sliderHead2");

var current = 1;

function sliderChange(select){
if(select==1){
    slider1.classList.add("active");
    slider2.classList.remove("active");
    slider3.classList.remove("active");
    slider4.classList.remove("active");

    // image.src="images/how-it-worksks-2.png";
   // sliderHead.innerHTML = "* Construction Package Finalised by Customer";
    sliderHead1.innerHTML = "1.1 Construction Package Finalised by Customer";
    sliderHead2.innerHTML = "1.2 Initial Booking & Advance Payment";
}else if(select==2){
    slider1.classList.add("active");
    slider2.classList.add("active");
    slider3.classList.remove("active");
    slider4.classList.remove("active");

    // image.src="images/how-it-works-4.png";
    sliderHead1.innerHTML = "2.1 Drawing, Design discussions & Finalizing";
    sliderHead2.innerHTML = "2.2 Main Agreement signed";
}else if(select==3){
    slider1.classList.add("active");
    slider2.classList.add("active");
    slider3.classList.add("active");
    slider4.classList.remove("active");
 
    // image.src="images/how-it-works-5.png";
    sliderHead1.innerHTML = "3.1 Project Schedule Creation & Excution";
    sliderHead2.innerHTML = "3.2 Monthly Cash-flow created";
}else if(select==4){
    slider1.classList.add("active");
    slider2.classList.add("active");
    slider3.classList.add("active");
    slider4.classList.add("active");

    // image.src="images/how-it-works-3.png";
    sliderHead1.innerHTML = "4.1 Progress tracking and audit";
    sliderHead2.innerHTML = "4.2 Project completion & Handover";
}
}

function next(){
  if(current<4)
  sliderChange(++current);
}
function previous(){
  if(current>1)
  sliderChange(--current);
}


$(document).ready(function() {
    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('#accordion, #bs-collapse')
      .on('show.bs.collapse', function(a) {
        $(a.target).prev('.panel-heading').addClass('active');
      })
      .on('hide.bs.collapse', function(a) {
        $(a.target).prev('.panel-heading').removeClass('active');
      });
  });


    