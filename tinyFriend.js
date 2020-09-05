var friends = [" man", "manner", "moni", "koddus", "mustafiz"];

var min = friends[0];

for( var i = 0; i < friends.length; i++){
    var element = friends[i];
    if( element < min){
        min = element;
    }
}

console.log(" tiny friend is : ", min);