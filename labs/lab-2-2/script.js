/**
 * Created by bad4iz on 07.02.2017.
 */
var xhr = new XMLHttpRequest();

var body = 'name=' + encodeURIComponent(name) +
    '&surname=' + encodeURIComponent(surname);

xhr.open("POST", '/submit', true)
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

xhr.onreadystatechange = ...;

xhr.send(body);