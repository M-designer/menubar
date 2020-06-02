var icons = document.getElementsByTagName("i");
var texts = document.getElementsByTagName("a");
var iconName = ['home','like','search','profile'];

var icon = document.getElementById('icon-home');

console.log(texts);

  for ( var i = 0 ; i<icons.length ; i++){

    icons[i].addEventListener("mouseover", function(e, i){
        texts.innerHTML = `${iconName[i]}`;
        console.log( texts.innerHTML = `${iconName[i]}`);
    });

    icons[i].addEventListener("mouseout", function(e){
        icon.style.backgroundColor="";
    });

  }