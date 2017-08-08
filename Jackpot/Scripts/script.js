function getRandom(number) {
    var randomNum = Math.round(Math.random() * number);    //Math.random is between 0 and .99999..., multiply by upper bound to get whole range and then round
    randomNum = randomNum.toString();   //can get length if converted to string

    if (randomNum.length < 2) {
        randomNum = "0" + randomNum;    //concatenate strings so always displays a 2 digit number, 1 digit won't display properly in circle
    }

    return randomNum;
}

function getPBNums() {
    document.getElementById("PB1").innerHTML = getRandom(65)    //65 set as upper bound

    document.getElementById("PB2").innerHTML = getRandom(65)
    while ("PB2" == "PB1") {
        document.getElementById("PB2").innerHTML = getRandom(65)    
    }

    document.getElementById("PB3").innerHTML = getRandom(65)
    while ("PB3" == "PB2" || "PB3" == "PB1") {
        document.getElementById("PB3").innerHTML = getRandom(65)   
    }

    document.getElementById("PB4").innerHTML = getRandom(65)
    while ("PB4" == "PB3" || "PB4" == "PB2" || "PB4" == "PB1") {
        document.getElementById("PB4").innerHTML = getRandom(65)   
    }

    document.getElementById("PB5").innerHTML = getRandom(65)
    while ("PB5" == "PB4" || "PB5" == "PB3" || "PB5" == "PB2" || "PB5" == "PB1") {
        document.getElementById("PB5").innerHTML = getRandom(65)   
    }

    document.getElementById("PB6").innerHTML = getRandom(65)
    while ("PB6" == "PB5" || "PB6" == "PB4" || "PB6" == "PB3" || "PB6" == "PB2" || "PB6" == "PB1") {
        document.getElementById("PB6").innerHTML = getRandom(65)   
    }
}

//function getPBNums() {
//    var PBNums = [];
//    var tempNum = 0;
//    for (i = 0; i < 6; i++) {
//        tempNum = getRando(65);
//        while (PBNums.includes(tempNum)) {
//            tempNum = getRando(65);
//        }
//        PBNums[i] = tempNum;
//    }
//    document.getElementById("PB1").innerHTML = PBNums[0];
//    document.getElementById("PB2").innerHTML = PBNums[1];
//    document.getElementById("PB3").innerHTML = PBNums[2];
//    document.getElementById("PB4").innerHTML = PBNums[3];
//    document.getElementById("PB5").innerHTML = PBNums[4];
//    document.getElementById("PB6").innerHTML = PBNums[5];
//}