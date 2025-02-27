var service_slide_index=1;
function front_page_our_services_nav(){
    var img = document.getElementById("front-page-our-services-service-img");
    var heading = document.getElementById("front-page-our-services-service-heading");
    var description = document.getElementById("front-page-our-services-service-description");
    var container = document.getElementById("front-page-our-services");
    service_slide_index++;
    if(service_slide_index>3){
        service_slide_index=1;
    }
    if(service_slide_index==1){
        img.src="images/squared/img_squared(11).jpeg";
        heading.innerHTML="Wedding";
        container.style.backgroundColor="rgb(163, 159, 116)";
    }
    if(service_slide_index==2){
        img.src="images/squared/img_squared(12).jpeg";
        heading.innerHTML="Birthday";
        container.style.backgroundColor="rgb(163 116 153)";
    }
    if(service_slide_index==3){
        img.src="images/squared/img_squared(6).jpeg";
        heading.innerHTML="Baby Shower";
        container.style.backgroundColor="rgb(116 163 126)";
    }
}

var testimonial_index=1;
function front_page_testimonial_nav(){
    var testimonial = document.getElementById("front-page-testimonial-item");
    var testimonial_author = document.getElementById("front-page-testimonial-item-author");
    testimonial_index++;
    if(testimonial_index>3){
        testimonial_index=1;
    }
    if(testimonial_index==1){
        testimonial.innerHTML="Partnering with Events By Pranami has always been a seamless and rewarding experience. Their dedication to customer satisfaction is unmatched, and they always go the extra mile to ensure everything runs smoothly. The attention to detail in their events is remarkable—every setup is beautifully curated and flawlessly executed. It’s a pleasure working with such a passionate team.";
        testimonial_author.innerHTML="Jayanta Kalita";
    }
    if(testimonial_index==2){
        testimonial.innerHTML="Every event we’ve collaborated on has been a masterpiece! Events By Pranami brings elegance, precision, and creativity to every occasion. Their team is incredibly supportive and truly values their clients and volunteers. I always look forward to working with them because I know it will be an amazing experience.";
        testimonial_author.innerHTML="Alisha Begum";
    }
    if(testimonial_index==3){
        testimonial.innerHTML="Events By Pranami consistently delivers outstanding experiences. Their professionalism, creativity, and commitment to excellence make every event unforgettable. It’s inspiring to see a team so dedicated to making each occasion special. I highly recommend them to anyone looking for top-tier event planning.";
        testimonial_author.innerHTML="Catherine Sangma";
    }
}
