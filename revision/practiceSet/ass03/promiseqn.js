/**
 * Write three dummy functions using only promises and only using normal callbacks, All three functions are dummy, you dont need actual implementation. These dummy functions are to just represent a delay.

Write a function to download data from a url

Write a function to save that downloaded data in a file and return the filename

Write a function to upload the file written in previous step to a newurl

THe download should take say 4sec delay, filewrite should take 2sec delay, upload should take 3sec delay

Write the above callbacks and use them in a manner that first download happens then writefile happens and then upload happens

 */

function downloader(url){
    
    return new Promise((res,rej)=>{
        console.log("downloading started from url",url)
        setTimeout(() => {
            console.log("downloaded completed");
            let downloadeddata="dummyText";

        res(downloadeddata);
        }, 4000);
    })
}

function writeFile(data){
    
    return new Promise((res,rej)=>{
        console.log("started writing data",data)
        setTimeout(() => {
            console.log("writing completed");
            let writeenFile="dummy.Text";
                
        res(writeenFile);
        }, 2000);
    }) 
}

function uploadFile(writeenFile,newUrl){
    return new Promise((res,rej)=>{
        console.log("starting uploading file ",writeenFile," on ",newUrl);
        setTimeout(() => {
            console.log("upload completed");
            let response="success";
            res(response);
        }, 3000);
    })
}

downloader("www.google.com")
.then((downloadeddata)=>writeFile(downloadeddata))
.then((writeFile)=>uploadFile(writeFile,"google.drive.com"))
.then((value)=>console.log(value))