import "./style.css";

startTheGame();

function startTheGame() {
  const videoContainer = document.getElementById("videoContainer");
  const videoContainer2 = document.getElementById("videoContainer2");
  const appDiv = document.getElementById("app");
  const messageOverlay = document.getElementById("messageOverlay");
  const messageOverlay2 = document.getElementById("messageOverlay2");
  const hiddenButton = document.getElementById("hiddenButton");

  const button = document.getElementById("myButton");
  button.onclick = () => {
    const message = document.createElement("p");
    message.textContent = "Tu veux bien être ma Valentine ?";
    message.classList.add("message1");
    appDiv.appendChild(message);

    const choices = document.createElement("div");
    choices.classList.add("choices");

    const choice1 = document.createElement("button");
    choice1.textContent = "Oui";
    choice1.classList.add("yes");
    choices.appendChild(choice1);

    const choice2 = document.createElement("button");
    choice2.textContent = "Non";
    choice2.classList.add("no");
    choices.appendChild(choice2);
    choice2.addEventListener("mouseover", function (e) {
      const maxX = window.innerWidth - e.target.offsetWidth;
      const maxY = window.innerHeight - e.target.offsetHeight;
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
      e.target.style.left = randomX + "px";
      e.target.style.top = randomY + "px";
    });

    choice2.addEventListener("click", function () {
      videoContainer2.classList.remove("hidden");
      messageOverlay2.classList.remove("hidden");
      message.classList.add("hidden");
      choices.classList.add("hidden");
      hiddenButton.classList.remove("hidden");
      messageOverlay2.textContent = "C'est pas gentil...";
    });

    appDiv.appendChild(choices);

    button.remove();

    choice1.addEventListener("click", () => {
      videoContainer.classList.remove("hidden");
      message.classList.add("hidden");
      choices.classList.add("hidden");
      videoContainer2.classList.add("hidden");
      messageOverlay.classList.remove("hidden");
      messageOverlay2.classList.add("hidden");
      hiddenButton.classList.remove("hidden");
      messageOverlay.textContent = "Merci !! On se voit le 14 ma beauté 😏";
    });

    hiddenButton.addEventListener("click", () => {
      videoContainer.classList.add("hidden");
      messageOverlay.classList.add("hidden");
      messageOverlay2.classList.add("hidden");
      videoContainer2.classList.add("hidden");
      hiddenButton.classList.add("hidden");
      message.classList.remove("hidden");
      choices.classList.remove("hidden");
    });
  };
}
