//write first method
function sleepIn(x,y) {
    var x = "loht";
}

//write second method
function nextOne(param1, param2) {
    return param1;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}

// Sleep in

function sleep_in(weekday, vacation){
    if(weekday == false || vacation == true){
        return true;
    }else{
        return false;
    }
}

// Monkey Trouble

function monkey_trouble(a_smile,b_smile){
    if(a_smile == b_smile){
        return true;
    }else{
        return false;
    }
}

// String Times


function  string_times(Hi, n){
    var answer = "";
    for (var i=0; i< n; i++){
        answer += Hi
    }
    return answer;
}

// Front Times

function front_times(string, n){
    if(string.length > 3){
        string = string.substring(0,3);
    }
    var answer = "";
    for (var i=0; i< n; i++){
        answer += string;
    }
    return answer;
}

// String Bits

function string_bits(string, n){
    var hello = "";
    for(var i = 0; i < string.length; i+=2){
        hello = hello += string[i];
    }
    return hello;
}

// Caught Speeding

function caughtSpeeding(speed, isBirthday){
    var noTicket = 0;
    var smallTicket = 1;
    var bigTicket = 2;
    if(isBirthday == true){
        speed = speed -5;
    }
    if(speed <= 60){
        return 0;
    }
    if(speed >= 61, speed <= 80){
        return 1;
    }
    if(speed >= 81){
        return 2;
    }
}

// FizzBuzz

function fizz_buzz(num){
    if(num % 3 == 0 && num % 5 ==0){
        return "FizzBuzz";
    }if(num % 3 == 0){
        return "Fizz";
    } if(num % 5 == 0){
        return "Buzz";
    }
    return num + "!";
}

// Tea Party

function teaParty(tea, candy){
    if(tea < 5 || candy < 5){
        return 0;
    }else if(tea >= candy * 2 || candy >= tea * 2){
        return 2;
    }else{
        return 1;
    }
}

// Blackjack

function blackjack(x, y){
    var checkX = x <= 21;
    var checkY = y <= 21;

    if(!checkX && !checkY){
        return 0;
    }else{
        if(!checkX){
            return y;
        }else if(!checkY){
            return x;
        }else if(x > y){
            return x;
        }else if(y > x){
            return y;
        }
    }
}

// Lone Sum

function loneSum(a, b, c){
    var sum = 0;
    var sum = a + b + c
    if(a == b && b == c){
        return 0;
    }
    if(a == b){
        return c;
    }
    if(a == c){
        return b;
    }
    if(b == c){
        return a;
    }
    return sum;
}