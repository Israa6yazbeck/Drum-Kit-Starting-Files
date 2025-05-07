var o=document.querySelectorAll("drum").length;
for(var i=0;i<o;i++){
    document.querySelectorAll("drum")[i].addEventListener("click",function(){
        var inner=this.innerHTML;
       
    makesound(inner);
 
 
    });
}
document.addEventListener("keypress",function(event){
makesound(event.key);
});
     function makesound(key) {
        switch (key){
            case "w":
                var a=new Audio("sounds/tom-1.mp3");
                a.play();
                break;
            case "a":
                var au=new Audio("sounds/tom-2.mp3");
                au.play();
                break;
            case "s":
                var aud=new Audio("sounds/tom-3.mp3");
                aud.play();
                break;
            case "d":
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audi=new Audio("sounds/snare.mp3");
                audi.play();
                break;
            case "k":
                var audion=new Audio("sounds/crash.mp3");
                audion.play();
                break;
            case "l":
                var audioa=new Audio("sounds/kick-bass.mp3");
                audioa.play();
                break;
            default: console.log(key);
           }
     }
