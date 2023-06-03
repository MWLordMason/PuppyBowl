window.onload = () => {
    let puppyName = localStorage.getItem("puppyName")
    let puppyBreed = localStorage.getItem("puppyBreed")
    let puppyStatus = localStorage.getItem("puppyStatus")
    let puppyPic = localStorage.getItem("puppyPic");
  
    let puppyDetailsContainer = document.getElementById(
      "puppy-details-container"
    );
  
    let puppyNameDetail = document.createElement("h2")
    puppyNameDetail.innerText = puppyName;
  
    let puppyBreedDetail = document.createElement("p")
    puppyBreedDetail.innerText = `Breed: ${puppyBreed}`
    let puppyStatusDetail = document.createElement("p")
    puppyStatusDetail.innerText = `Status: ${puppyStatus}`
    let puppyPicDetail = document.createElement("img")
    puppyPicDetail.src = puppyPic
    let closeButton = document.createElement("button")
    closeButton.id = "close-button"
    closeButton.innerText = "Close"
    closeButton.addEventListener("click", () => {
        window.location.href = "index.html";
    })
  
    puppyDetailsContainer.appendChild(puppyNameDetail)
    puppyDetailsContainer.appendChild(puppyBreedDetail)
    puppyDetailsContainer.appendChild(puppyStatusDetail)
    puppyDetailsContainer.appendChild(puppyPicDetail)
    puppyDetailsContainer.appendChild(closeButton)
  };