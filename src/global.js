window.repo = "BuffelSaft/pokeemerald/master"
window.checkUpdate = "16 IE"


fetch('https://raw.githubusercontent.com/ydarissep/dex-core/main/index.html').then(async response => {
	return response.text()
}).then(async rawHTMLText => {
	const parser = new DOMParser()
	const doc = parser.parseFromString(rawHTMLText, 'text/html')
    document.querySelector('html').innerHTML = doc.querySelector('html').innerHTML




    document.title = "IE Dex"
    document.getElementById("footerName").innerText = "Inclement Emerald\nYdarissep Pokedex"


    const tutorLearnsetsBadgeHeader = document.createElement("th"); tutorLearnsetsBadgeHeader.innerText = "Badge"
    document.querySelector("#speciesPanelTutorTableTHead > tr").insertBefore(tutorLearnsetsBadgeHeader, document.querySelector("#speciesPanelTutorTableTHead > tr").firstChild)


    await fetch("https://raw.githubusercontent.com/ydarissep/dex-core/main/src/global.js").then(async response => {
        return response.text()
    }).then(async text => {
        await eval.call(window,text)
    }).catch(error => {
        console.warn(error)
    })    

}).catch(error => {
	console.warn(error)
})


