var carousel=document.querySelector("img");
var images=["images/adult-lion-gr.jpg","images/6889257-black-panther.jpg","images/cheetah_girl_by_dellamort-d67hium.jpg","images/types_of_tigers_around_the_world_tiger_subspecies_1311_orig.jpg"]
var num=4;


function right(){
    num++;
   console.log("step1");
   console.log( "num=",num);
    if(num>=images.length){
        num=0;
       console.log("step2");
       console.log("num",num);
       carousel.src=images[num]
        console.log("num",num);  
    }
    else{
       console.log("step3");
       carousel.src=images[num]
        console.log("num",num);

    }
                    
};
function left(){
    num--;
    if(num<0){
        num=images.length-1;
        carousel.src=images[num]
            }
            else{
              carousel.src=images[num]
            }
};         
