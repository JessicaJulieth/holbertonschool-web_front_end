function createElement(data) {
    let p = document.createElement("p");
    p.innerText = data;
    document.body.appendChild(p);
}

function queryWikipedia(callback) {
    let req = new XMLHttpRequest();
    req.onload = function() {
        if (req.status >= 200 && r.status < 300) {
            let data = JSON.parse(r.responseText);
            callback(data.query.pages['21721040'].extract);
        } else console.log(xhr.responseText);
    }; 
    req.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=* ');
    req.send();
}

queryWikipedia(createElement);