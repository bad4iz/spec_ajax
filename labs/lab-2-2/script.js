/**
 * Created by bad4iz on 07.02.2017.
 */


function getData(url) {
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open(("POST", 'postbooksbycat.php', true);
        });
    
}
var xhr = new XMLHttpRequest();

var body = 'name=' + encodeURIComponent(name) +
    '&surname=' + encodeURIComponent(surname);

xhr.open("POST", 'postbooksbycat.php', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.onreadystatechange = ...;

xhr.send(body);





