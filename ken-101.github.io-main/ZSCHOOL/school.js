const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')


toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})
const ok = document.querySelector('.ok')
const down = document.querySelector('.down')

ok.addEventListener('click', () => {
  down.classList.toggle('colour')
})

var op = document.querySelector(".op");
op.addEventListener("mouseover", function() {
var down = this.querySelector(".down");
down.style.display = "block";
});

op.addEventListener("mouseout", function() {
var down = this.querySelector(".down");
down.style.display = "none";
});