let plasticCount = 0;

function increasePlastic(){
  plasticCount++;
  document.getElementById("counter").innerText = plasticCount;
}

function saveOcean(){
  document.getElementById("saved").innerText = "🌊 You made a difference!";
}
