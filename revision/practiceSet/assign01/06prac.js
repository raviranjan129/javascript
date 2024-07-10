setTimeout(() => console.log("A"), 2500);
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("B" + i);
        setTimeout(() => {
            console.log("C" + i);
        }, i * 500 + 500);
    }, i * 1000);
}

// doubt 