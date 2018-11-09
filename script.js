document.addEventListener("DOMContentLoaded", () => {
  window.alert("page has loaded bye")

  let button = document.querySelector(".windUp");

  button.addEventListener("click", () => {

    let count = document.querySelector(".countdown")
    let boxImg = document.querySelector(".jack-hiding")

    let secs = 4;
    let interval = setInterval(function() {
        count.innerText = secs;
        if (secs===0) {
          clearInterval(interval);
          boxImg.style["background-image"] = `url("https://sep.yimg.com/ay/genius-babies/jester-jack-in-the-box-toy-25.gif")`
        }
        secs--;
      }, 1000)
  })

})
