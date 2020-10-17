var slider1 = document.getElementById("slide1");
var slider2 = document.getElementById("slide2");
var slider3 = document.getElementById("slide3");
var slider4 = document.getElementById("slide4");
var slider5 = document.getElementById("slide5");
var slider6 = document.getElementById("slide6");
var image = document.getElementById("slideImg");
var sliderHead = document.getElementById("sliderHead");
var sliderDetail = document.getElementById("sliderDetail");


function sliderChange(select){
if(select==1){
    slider1.classList.add("active");
    slider2.classList.remove("active");
    slider3.classList.remove("active");
    slider4.classList.remove("active");
    slider5.classList.remove("active");
    slider6.classList.remove("active");
    image.src="images/how-it-works-1.png";
    sliderHead.innerHTML = "01. Raise a request";
    sliderDetail.innerHTML = "Raise a service request or call us at 9876543210. Our technical expert will get in touch with you.";
}else if(select==2){
    slider1.classList.add("active");
    slider2.classList.add("active");
    slider3.classList.remove("active");
    slider4.classList.remove("active");
    slider5.classList.remove("active");
    slider6.classList.remove("active");
    image.src="images/how-it-works-2.png";
    sliderHead.innerHTML = "02. Meet our Expert";
    sliderDetail.innerHTML = "Our experts visit you to take all the requirements and submit exhaustive specifications.";
}else if(select==3){
    slider1.classList.add("active");
    slider2.classList.add("active");
    slider3.classList.add("active");
    slider4.classList.remove("active");
    slider5.classList.remove("active");
    slider6.classList.remove("active");
    image.src="images/how-it-works-3.png";
    sliderHead.innerHTML = "03. Book with Us";
    sliderDetail.innerHTML = "Good to go. You pay 5% of the estimated project cost as Booking Amount.";
}else if(select==4){
    slider1.classList.add("active");
    slider2.classList.add("active");
    slider3.classList.add("active");
    slider4.classList.add("active");
    slider5.classList.remove("active");
    slider6.classList.remove("active");
    image.src="images/how-it-works-4.png";
    sliderHead.innerHTML = "04. Receive designs";
    sliderDetail.innerHTML = "Our Professional will provide exhaustive drawings and designs till the customer is fully satisfied. Designs include floor plans, 3D elevations, electrical, plumbing and structural designs.";
}else if(select==5){
    slider1.classList.add("active");
    slider2.classList.add("active");
    slider3.classList.add("active");
    slider4.classList.add("active");
    slider5.classList.add("active");
    slider6.classList.remove("active");
    image.src="images/how-it-works-5.png";
    sliderHead.innerHTML = "05. Track & Transact";
    sliderDetail.innerHTML = "To ensure absolute trust, Brick&Bolt provides an escrow model where you transfer the amount for stage of the project. You can track the project through our customer application.";
}
else if(select==6){
    slider1.classList.add("active");
    slider2.classList.add("active");
    slider3.classList.add("active");
    slider4.classList.add("active");
    slider5.classList.add("active");
    slider6.classList.add("active");
    image.src="images/how-it-works-6.png";
    sliderHead.innerHTML = "06. Settle In";
    sliderDetail.innerHTML = "We make sure you are well settled in your new home. Our journey together doesn't end here. We provide 15 years of warranty.";
}
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