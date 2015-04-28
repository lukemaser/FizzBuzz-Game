$(document).ready(function() {
    $('#print').click(function() {
        for (var i = 1; i < 101; i++) {
            if ((i % 3) === 0) {
                //console.log("fizz");
                $('ul').append('<li>' + 'fizz' + '</li>' + '<br>');
            } else if ((i % 5) === 0) {
                //console.log("buzz");
                $('ul').append('<li>' + 'buzz' + '</li>' + '<br>');
            } else if ((i % 3, i % 5) === 0) {
                //console.log("fizzbuzz");
                $('ul').append('<li>' + 'fizzbuzz' + '</li>' + '<br>');
            } else {
                //console.log(i);
                $('ul').append('<li>' + i + '</li>' + '<br>');
            }
        }
    });
});