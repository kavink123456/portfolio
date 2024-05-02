//const heading = document.querySelector(".text")

//heading.innerHTML = "The quick brown fox jumps over the lazy dog";
//let indx = 0;
//function sliceStr() {
// heading.innerHTML = mainText.slice(0,indx); 
// indx++;

// if (indx > mainText.lenght) { indx = 0; }

//}

//setInterval(sliceStr,100)

function rain() {
    let heart = document.createElement("div");
  
    heart.classList.add("heart");
    heart.innerText = "z";
  
    heart.style.right = Math.random() * 100 + "vw";
  
    heart.style.animationDuration = Math.floor(Math.random() * 4500) + "ms";
  
    document.body.appendChild(heart);
  }
  
  setInterval(rain, 90000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
  
  setTimeout(() => {
    heart.classList.remove();
  }, 1000);
  
