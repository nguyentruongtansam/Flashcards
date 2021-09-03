function loader(value) {
    const promise = new Promise(function(resolve, reject){
        if (value === "true"){
            resolve();
        } else {
            reject();
        }
    });
    promise
        .then(function successStatus(response) {
            console.log("The info has loaded.");
            return response;
        })
        .catch(function failStatus(error) {
            console.log("Please, try again later.");
            return error;
        })
        .finally(function stopLoader() {
            console.log("Hello, Mr. Smith!");
        });
    return promise;
}