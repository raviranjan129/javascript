
// Write a function to download data from a url
  //Write a function to save that downloaded data in a file and return the filename
  //Write a function to upload the file written in previous step to a newurl 

 function downloader(url,cb){
    console.log("starting downloading data form" ,url);

    setTimeout(() => {
        console.log("Downloaded completed");
        let downloadedData = "DummyText";
        cb(downloadedData);
    }, 3000);
 }

 function writeFile(data,cb){
    console.log("started writing data",data);

    setTimeout(() => {
        console.log("writing completed");
        let writtenFile = "dummy.txt";
        cb(writtenFile);
    }, 4000);
 }

 function uploadFile(writtenFile ,newUrl,cb){
console.log("starting uploading ",writtenFile ," on",newUrl);
setTimeout(() => {
    console.log("upload completed");
    let uploadResponse="success";
    cb(uploadResponse);
}, 5000);
 }

 downloader("www.google.com",(downloadedData)=>{
writeFile(downloadedData,(writtenFile)=>{
    uploadFile(writtenFile ,"www.google.Drive.com",(uploadResponse)=>{
        console.log("status of upload is",uploadResponse);
    });
    console.log()
})
 })