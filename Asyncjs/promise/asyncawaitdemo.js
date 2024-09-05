function downloader(url){
    return new Promise((res,rej)=>{
        console.log("started downloading from ",url);
        setTimeout(() => {
            console.log("downloaded completed");
            let downloadeddata="dummy content";

            res(downloadeddata);
        }, 4000);
    })
}

function writeFile(data){
    return new Promise((res,rej)=>{
        console.log("started writing data", data);
        setTimeout(() => {
            console.log("writing completed");
            let FileName= "dummy.txt";
            res(FileName);
        }, 2000);
    })
}

function uploadFile(FileName,newUrl){
    return new Promise((res,rej)=>{
        console.log("uploading started",FileName , "on the",newUrl)
        setTimeout(() => {
            console.log("upload completed");
            let UploadResponse = "success";
            res(UploadResponse);
        }, 3000);
    })

}

// downloader("www.google.com")
// .then((downloadeddata)=>writeFile(downloadeddata))
// .then((FileName)=> uploadFile(FileName," www.google.drive.com"))
// .then((value)=> console.log(value))



async function steps(){
    const downloadedData = await downloader("www.google.com");
    console.log("Data downloaded is",downloadedData);
    const FileName = await writeFile(downloadedData);
    console.log("file written",FileName);
    const upload = await uploadFile(FileName,"www.drive.google.com");
    console.log("upload response ",upload);
}
steps();