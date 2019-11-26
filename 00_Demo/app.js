const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", shakeColors);

function shakeColors() {
  const colors = ["#b8a78a", "#ffeccc", "#e0cba8", "#f0e7d7"];
  const arr = [0, 1, 2, 3];

  shuffle(arr);

  const bodyEl = document.querySelector("body");

  const h1El = document.querySelector("h1");

  const h2El = document.querySelector("h2");

  bodyEl.style.backgroundColor = colors[arr[0]];
  h1El.style.backgroundColor = colors[arr[1]];
  h2El.style.backgroundColor = colors[arr[2]];
  this.style.backgroundColor = colors[arr[3]];
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
