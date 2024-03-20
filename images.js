const taverns = [
    './img/taverns/001.png',
    './img/taverns/002.png',
]

let newImage
taverns.forEach((tavern) => {
    newImage = document.createElement("img")
    newImage.src = tavern
    newImage.onclick = () =>   navigator.clipboard.writeText(tavern);
    return document.querySelector("#taverns").appendChild(newImage)
})