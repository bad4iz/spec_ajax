/**
 * Created by bad4iz on 07.02.2017.
 */


function getData(idBook) {
    let searchString = "cat=" + idBook;
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open("POST", 'postbooksbycat.php', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onload = function () {
            if (xhr.status === 200){
                let json = String(xhr.responseText);
                resolve(json);
            }else {
                reject(xhr.status);
            }
        };
        xhr.onerror = function (error) {
            reject(error);
        };
        xhr.send(searchString);
        });
    
}

//
// getData(0)
//     .then(value=>console.log(value));

let timer = new Promise(resolve, reject){

}

