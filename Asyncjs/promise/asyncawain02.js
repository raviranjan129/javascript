
function downloader(url){
    return new Promise((res,rej)=>{
        console.log("downloaded started from",url);
        setTimeout(() => {
            console.log("downloaded completed");
            let downloadeddata="dummy content";
            res(downloadeddata);
        }, 4000);
    })
}

function writeFile(data){
    return new Promise((res,rej)=>{
        console.log("writing file started",data);
        setTimeout(() => {
            console.log("writing completed");
            let writtnfile="dummy.txt";
            res(writtnfile);
        }, 3000);
    })
}

function uploadfile(writtnfile,newUrl){
    return new Promise((res,rej)=>{
        console.log("upload file started ",newUrl,writtnfile);
        let UploadResponse = "succes";
        res(UploadResponse);
    })
};


async function steps(){
try {
    const downloadedData = await downloader("www.google.com")
    console.log("downloaded data is ",downloadedData);
    const writtenfile = await writeFile( downloadedData)
    console.log("file written is ",writtenfile)
     const upload= await uploadfile("www.drive.google.com",writtenfile)
     console.log("upload response is",upload);
} catch (error) {
     console.log("Handled the error by logging it",error)
}
}
steps()