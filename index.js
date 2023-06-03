const cohortName = "2304-FTB-ET-WEB-FT"
const Puppy_API = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`



async function fetchPuppyPlayers() {
    try {
        let response = await fetch(Puppy_API)
        let translatedData = await response.json()
        // console.log(translatedData)
        let playerList = translatedData.data.players
        console.log(playerList)
        return playerList
    } catch (error) {
        console.log(error)
    }
}
    async function renderPuppyPlayers() {
    try {
        let playerCards = await fetchPuppyPlayers()
        let puppyRoster = document.getElementById("all-players-container")
        playerCards.forEach((puppy) => {
        let puppyCardContainer = document.createElement("div")
        puppyCardContainer.classList.add("puppy-container")
        puppyCardContainer.style.backgroundImage = `url(${puppy.imageUrl})`
        
        let puppyName = document.createElement("h2")
        puppyName.classList.add("player-text")
        puppyName.innerText = puppy.name
        let seeDetails = document.createElement("button")
        seeDetails.id = "details-button"
        seeDetails.innerText = "Details"
        seeDetails.addEventListener("click", () => {
            localStorage.setItem("puppyName", puppy.name)
            localStorage.setItem("puppyBreed", puppy.breed)
            localStorage.setItem("puppyStatus", puppy.status)
            localStorage.setItem("puppyPic", puppy.imageUrl);

            window.location.href = "details.html";
        })
             puppyCardContainer.appendChild(puppyName);
            puppyCardContainer.appendChild(seeDetails);
            puppyRoster.appendChild(puppyCardContainer);   
        });

        
    } catch (error) {
        console.log(`the players are not rendering!`)
    }
    }

    renderPuppyPlayers()