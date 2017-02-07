/**
 * Created by bad4iz on 07.02.2017.
 */


function getData() {
    
}
var xhr = new XMLHttpRequest();

var body = 'name=' + encodeURIComponent(name) +
    '&surname=' + encodeURIComponent(surname);

xhr.open("POST", 'postbooksbycat.php', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.onreadystatechange = ...;

xhr.send(body);





