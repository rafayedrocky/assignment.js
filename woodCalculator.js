function woodCalculator(numberOfChair, numberOfTable, numberOfBed){
    var woodFeet = chair * 1cubicFeet + table * 3cubicFeet + bed * 5cubicFeet;
    return woodFeet; 
}
var checkWood = woodCalculator( 1, 1, 1);
console.log(checkWood);