for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(() => console.log(j), 2000 * j);
    })(i);
}

//This is IIFE function ;
//output -> 0 with delay 0, 1 with delay 2s, and 3 with delay of 3s.