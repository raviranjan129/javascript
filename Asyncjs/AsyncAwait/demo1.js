
function downloader(url){
   
    return new Promise((res,rej)=>{
        console.log("downloaded starts from url",url)
        setTimeout(() => {
            console.log("downloaded completed")
            let downloadeddata="dummyData";
            res(downloadeddata)
        }, 4000);
    })
}

function writeFile (FileName){
   
   return new Promise((res,rej)=>{
    console.log("writting started on ",FileName)
    setTimeout(() => {
        console.log("writting completed");
        let writtenFile="dummy.txt"
        res(writtenFile)
    }, 3000);
   })
}

function uploadFile(File,newUrl){
   
    return new Promise((res,rej)=>{
        console.log( File,"started uploading  on ",newUrl)
        setTimeout(() => {
            console.log("upload successfull");
            let uploadResponse ="success"
            res(uploadResponse)
        }, 5000);
    })
}

async function execute() {
    console.log("we are inside the  execute function");

    const downloadedData=await downloader("www.google.com")
    console.log("downloaded data is",downloadedData);
    const filename=await writeFile(downloadedData);
    console.log("File written is ",filename)
    const response = await uploadFile(filename,"drive.google.com");
    console.log("upload response is ",response)

}

console.log("start");
execute();
console.log("end")