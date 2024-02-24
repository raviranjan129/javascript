// Write three dummy functions without using promises and only using normal callbacks, All three functions are dummy, you dont need actual implementation. These dummy functions are to just represent a delay.

 // Write a function to download data from a url
  //Write a function to save that downloaded data in a file and return the filename
  //Write a function to upload the file written in previous step to a newurl 


    function downloader(url,cb){

        console.log("started downloading from",url)
        setTimeout(() => {
             console.log("downloaded completed");

            let downloadedData = " Dummy content";
            cb(downloadedData);  // cb-> any callback;
        }, 4000);
    }

    function writeFile(data,cb){
        console.log("Started writing data",data);

        setTimeout(() => {
             console.log("writing completed");
             let fileName = "dummy.txt";
             cb(fileName);
        }, 2000);

    }

    function uploadFile(fileName,newUrl,cb){
        console.log("started uploading ",fileName,"on the url",newUrl);

        setTimeout(() => {
             console.log("upload completed");

             let uploadResponse = "success";
             cb(uploadResponse);
        },3000);
    }

    downloader("www.google.com",(downloadedData) =>{
        writeFile(downloadedData,(fileName)=>{
            uploadFile(fileName,"www.drive.google.com",(uploadResponse)=>{
                console.log("status of upload ",uploadResponse);
            })
            
        })
    })