function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = `${size}px`;
        document.body.style.weight = weight;
        document.body.style.transform = transform;
        document.body.style.background = background;
        document.body.style.color = color;
    }
}
function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkmode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    
  const x = document.createElement('p');
  const y = document.createElement('button');
  const z = document.createElement('button');
  const i = document.createElement('button');

  x.innerHTML = 'Welcome Holberton!';
  y.innerHTML = 'Spooky';
  z.innerHTML = 'Dark Mode';
  i.innerHTML = 'Scream Mode';

  document.body.appendChild(x);
  document.body.appendChild(y);
  document.body.appendChild(z);
  document.body.appendChild(i);

  y.onclick = spooky;
  z.onclick = darkMode;
  i.onclick = screamMode;

}
main();