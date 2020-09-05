function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}

var checkMile = feetToMile(5280);
console.log(checkMile);