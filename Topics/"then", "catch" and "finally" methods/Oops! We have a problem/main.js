function hasDownloaded (value) {
    const promise = new Promise(function(resolve, reject){
        if (value === "true"){
            resolve("Now you can watch the video!");
        } else {
            reject("Oops! An error occurs");
        }
    });
    promise
        .then(function allow(response) {
            console.log(response);
            return response;
        })
        .catch(function reject(error) {
            console.log(error);
            return error;
        });
    return promise;
}
