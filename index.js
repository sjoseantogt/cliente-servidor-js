 
const formal = document.getElementById("formal");
const listaMensajes = document.getElementById("listaMensajes");
 
function Info() {
    fetch('http://34.210.35.174:7000')
    .then(response => response.json())
    .then(msg => Parser(msg));
}

// Enter Key
document.getElementById('messageInput').onkeydown = function(e){
    if(e.keyCode == 13){
        formal.onsubmit = function(event) {
            event.preventDefault();
            const formData = new FormData(formal);
            console.log(formData);
        
            fetch('http://34.210.35.174:7000', {
                method: 'POST',
                body: formData,
            })
            .then(response => Info());
        }
    }
 };


function Parser(messages) {

    for (let i in messages) {
        let li = document.createElement('li');
        let span = document.createElement('p');
        let nick = document.createTextNode(messages[i].nick + ":   ");
        let p = document.createElement('p');
        let text = document.createTextNode(messages[i].text);

        span.appendChild(nick);
        span.setAttribute('class', 'nick');

        p.appendChild(text);
        p.setAttribute('class', 'text');

        li.appendChild(span);
        li.appendChild(p);
        li.setAttribute('class', 'message');

        document.getElementById('listaMensajes').appendChild(li);
    }
}

formal.onsubmit = function(event) {
    event.preventDefault();
    const formData = new FormData(formal);
    console.log(formData);

    fetch('http://34.210.35.174:7000', {
        method: 'POST',
        body: formData,
    })
    .then(response => Info());
}

window.onload = function() {
    Info();
} 