
function fetchData(url){
    return new Promise((res,rej)=>{
     

        setTimeout(() => {
           

            let arrayofNumber=[1,2,3,4,5];
            res(arrayofNumber);
        }, 2000);
    })
}

function analyzeData(arrayofNumber){
    return new Promise((res,rej)=>{
        
        const isPositive = arrayofNumber.every(num=> num >=0);
        if (!isPositive){
rej("Error");


        }else{
            const sum = arrayofNumber.reduce(function(acc,curr){
                return acc+curr;
            },0);

            const avg = sum / arrayofNumber.length;

            const result = {sum,avg};

            res(result);
        }
       
    })
}


async function processData(){
    try {
        const fetchedData = await fetchData("www.google.com");
        console.log(fetchedData)
        const analyzedData =await analyzeData(fetchedData);
        console.log(analyzedData)
    } catch (error) {
        console.log("Error handled with logging ",error);
    }
}

processData();