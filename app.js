
var firstName= ["ali","murtaza", "ali", "alishba", "faizan", "bisma","saima","ali","rehan","kainat"];
var lastName=  ["alisha","reham","saim","saima","ali","rehan","kainat","ali", "murtaza", "ali"];

function getName(){
  var  randomName= firstName[Math.floor(Math.random() * firstName.length)] + ' ' + lastName[Math.floor(Math.random() * lastName.length)];
  return randomName;
}


function nameQty(){
    var userQty = document.querySelector('.qty').value;
    document.querySelector('.nameList').innerHTML = ""; 
    if (userQty > 10){
        document.querySelector('.nameList').innerHTML = "only 10 name can place";
    }
    else{ 
        for ( var i = 0; i < userQty; i++)  {
            document.querySelector('.nameList').innerHTML += getName() + '<hr>';
        }
    }
}