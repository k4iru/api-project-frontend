var xhr;
const url = 'https://api.kylecheung.ca/';
function makeRequest() {
    xhr = new XMLHttpRequest();
    xhr.open('GET',  url + 'login');
    xhr.setRequestHeader('X-PINGOTHER', 'pingpong');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
}