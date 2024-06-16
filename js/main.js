function showMainPage() {
    const body = document.querySelector('.a')
    const layer1 = document.querySelector('.intro');
    const audioElement = document.getElementById("audio");
    const playButton = document.getElementById("play-button");
    const stopButton = document.getElementById("stop-button");

  playButton.addEventListener("click", () => {
    audioElement.play();
  });
  stopButton.addEventListener("click", () => {
    audioElement.pause();
  });



    body.style.overflow = "auto";

    layer1.style.opacity = '0';
    layer1.style.transition = 'opacity 1s ease-out';

    layer1.addEventListener('transitionend', function() {
        layer1.style.display = 'none';
    }, { once: true });

    setInterval(spawnClickText, 500);


}

window.onload = function() {
    setTimeout(showMainPage, 2000);
    let pac = false;
    setInterval(() => {
        const pacImage = document.querySelector("#pacimg");
        if(pac) {
            pacImage.src = "img/paci.png"
        } else {
            pacImage.src = "img/paci.png"
        }
        pac = !pac;
    }, 500)

}



function spawnClickText() {
    let text = document.createElement('div');
    text.textContent = '*PACI*';
    document.body.appendChild(text);

    text.style.position = 'fixed';
    text.style.color = 'white';
    text.style.userSelect = 'none';
    text.style.fontSize = '2em';
    text.style.left = Math.random() * window.innerWidth + 'px';
    text.style.top = Math.random() * window.innerHeight + 'px';

    text.style.animation = 'floatAndFade 1s linear';
    text.style.animationFillMode = 'forwards';

    text.addEventListener('animationend', () => {
        text.remove();
    });
}

// interval to spawn it every 2 seconds


