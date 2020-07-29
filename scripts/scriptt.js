var skewed = document.querySelector('.skewed');
window.addEventListener('scroll', function(){
    var value = -10 + window.scrollY/60;
    skewed.style.transform = "skewY("+value+"deg)";
})
   

var developer = {            
    
    name: "Mariana Cuervo",
    age: 19,
    country: "Venezuela",
    state: "Zulia",
    major: "Computer Engineering",
    interests: ["reading", "music", "painting", "foreign cultures"],
    currently_learning: ["Angular", "Node.js", "React"]};


    console.log(developer);


    //  TyPING

    const texts = ['Web Developer', 'Web Designer'];
    let c = 0;
    let index = 0;
    let current = "";
    let letter="";

    (function type(){

        // c  equal to array.l
        if (c === texts.length){
            c = 0;
        } 

        current = texts[c];
        letter = current.slice(0, ++index);
    
    

        document.querySelector('.typing').textContent = letter;
        if (letter.length === current.length){
            c = c+1;
            index = 0;}

            setTimeout(type, 400);
    })();


    var button = document.getElementById("toTop");
    button.style.display = "none";
    
    document.querySelector("body").onscroll = function(){
      if(window.scrollY >150){
        button.style.display = "block";
      } else {
        button.style.display ="none";
      }
    };