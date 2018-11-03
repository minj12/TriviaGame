//Data for timer

$(document).ready(function)() {
    var index = 0;
    var countdownTimer; = {
        time : 30,
        reset: function() {
            this.time = 30;
            $('.timer').html('<h2>' + this.time + ' seconds remaining </h2>');//sets timer font
        },
        start: function() {
            counter = setInterval(countdownTimer.count, 1000);
        },
        stop: function() {          //
            clearInterval(counter);
        },
        count: function() {
            countdownTimer.time--;
            console.log(countdownTimer.time);

        }
    }
}