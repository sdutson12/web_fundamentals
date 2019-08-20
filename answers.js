var myNumber = 42;
var myName = "Sam";
myNumber = "Sam";
myName = 42;

for (var i = -52; i < 1067; i++)
{
    console.log(i)
}

function beCheerful()
{
    console.log("good morning!");
}

for (var a = 1; a < 99; a++)
{
    beCheerful();
}

for (var b = -300; b < 1; b++)
{
    if (b == -3 || b == -6) {
        continue;
    }
    else if (b % 3 == 0) {
        console.log(b);
    }  
}

var int = 2000;

while (int < 5281)
{
    console.log(int);
}

if (num == 76 || num == 67) {
    console.log("How did you know?");
}
else {
    console.log("Just another day....");
}

if (year % 400 == 0) {
    console.log("Leap year");
}
else if (year % 100 == 0) {
    console.log("Not leap year");
}
else if (year % 4 == 0) {
    console.log("Leap year")
}