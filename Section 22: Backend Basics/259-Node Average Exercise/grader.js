var scores1 = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

function average(arr) {
    var avr = 0;
    for (var i = 0; i < arr.length; i++) {
        avr = arr[i] + avr;
    };
    avr = Math.round(avr / arr.length);
    console.log(avr);
};

average(scores1); // should return 94
average(scores2); // should return 68