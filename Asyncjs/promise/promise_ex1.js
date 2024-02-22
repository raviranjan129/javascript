  function createPromise(){
    return new Promise((res,rej)=>{
        res("Ravi");
    })
  }

  function blockingCode(){
    for(let i= 0;i<10000000000;i++){
        // some task
    }
  }

  let a = 10;
  blockingCode();

  setTimeout(() => {
    console.log("timer 1 done");
    console.log("value of a", a);
  }, 3000);


  setTimeout(() => {
    console.log("timer 2 done");
    console.log("value of a is" , a);
  }, 0);

  a++;

  let pr = createPromise();

  pr.then(function success(value){
    a++;
    console.log("pr promise fulfilled with a value",value);
  },function failure(value){
    console.log("pr promise rejected with a value",value);
  });

  a++;

  blockingCode();