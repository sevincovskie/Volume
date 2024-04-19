var minus = document.querySelector("#minus");
var plus = document.querySelector("#plus");

var secondaryDiv = document.querySelector("#secondaryDiv");
var primaryDiv = document.querySelector("#primaryDiv");

var olcu = 50;
secondaryDiv.style.width = `${olcu}` + "%";
document.getElementsByTagName("span")[0].innerText = olcu +"%";

minus.addEventListener("click", function () {
  if (olcu >= 5) {
    olcu = olcu - 5;
    secondaryDiv.style.width = `${olcu}` + "%";
  } else {
    olcu = 0;
    secondaryDiv.style.width = `${olcu}` + "%";
  }
});
plus.addEventListener("click", function () {
  if (olcu <= 95) {
    olcu = olcu + 5;
    secondaryDiv.style.width = `${olcu}` + "%";
    document.getElementsByTagName("span")[0].innerText = olcu +'%';
  } else {
    olcu = 100;
    secondaryDiv.style.width = `${olcu}` + "%";
    document.getElementsByTagName("span")[0].innerText = olcu+'%';
  }
  console.log(olcu);
});

primaryDiv.addEventListener("click", function (e) {
  console.log(e.target.getBoundingClientRect());
  olcu = (e.clientX - e.target.getBoundingClientRect().left) / 5;
  secondaryDiv.style.width = `${olcu}` + "%";
  document.getElementsByTagName("span")[0].innerText = olcu +"%";
});
