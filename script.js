document.addEventListener("DOMContentLoaded", () => {
  window.alert("Page has loaded!")

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

  let catCount = 0;
  let dogCount = 0;
  let quiz = document.querySelector('.quiz');
  quiz.addEventListener("change", (event) => {
    if (event.target.id==="cat") {
      catCount++;
    } else if (event.target.id==="dog") {
      dogCount++;
    }
    debugger
  console.log(catCount);
  console.log(dogCount);

  })

})
