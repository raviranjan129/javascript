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


function doAfterReceiving(value){
    const f=gnerator.next(value); 
    //{state:pending,value:undefined, onFulFilled:[],onRejected:[]}
    if(f.done == true) return;
    f.value.then(doAfterReceiving)

    //{state:fulfill,value:"dummy.txt",onFulFilled:[doAfterReceiving],onRejected:[]}
}

function* steps(){
    const downloadedData = yield downloader("www.google.com")
    console.log("data downloaded is ",downloadedData);
    const fileName=yield writeFile(downloadedData);
    console.log("file writeen ", fileName);
    const upload = yield uploadFile(fileName,"www.drive.google.com")
    console.log("upload response ",upload);

}

const gnerator = steps(); // this will not start the function ,it will create obj

const future = gnerator.next(); // it will start;  future-> {value:pending promise,done:false}

future.value.then(doAfterReceiving)