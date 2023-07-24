function g() {
    document.querySelector('input').style.fontSize = '30px';
    document.querySelector('h1').style.display = 'none';
    let a = document.querySelector('input').value;
    if (a == "-dokdox-find ") {
        document.querySelector('h2').style.display = 'block'
    }
}
function on() {
    document.querySelector('h1').style.display = 'block';
    document.querySelector('input').style.fontSize = '20px'
    let a = document.querySelector('input').value;
    if (a == "-dokdox-find ") {
        document.querySelector('h2').style.display = 'block'
    }
}
