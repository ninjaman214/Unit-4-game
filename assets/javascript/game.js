$(document).ready;
// animation timer //
function animateScript(){
    document.getElementById("sprite").style.backgroundPosition ='-45px 0px'
//}
//$("#sprite").animateScript({
    //fps: 12,
    //animations:{
        //walkRight: [0, 1, 2, 3, 4, 5, 6,7],
        //walkLeft:[15, 14 ,13, 12 ,11, 10 ,9 , 8]
   // }, 
   // loop: true,
    //complete: function(){
        //use only when animations with "loop" false//
       // alert("animation End");
   // }
//});
//$("sprite").animateSprite("play", "walkRight");//
    //loop//
   var tID;
    function animateScript(){
        var   position = 27;
        const interval = 100;

        tID = setInterval ( () => {

        document.getElementById("sprite").style.backgroundPosition = '-$ {positon}px 0px';
        if (position < 333)
        { position = position + 45;}
        else 
        {position = 45;}
        }
        ,interval );
         console.log(tID);
    }
}
//Health Values
