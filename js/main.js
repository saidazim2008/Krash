function $(el) {
    return document.querySelector(el)
}
let homeBtn = $(".menu")
let homeCloseBtn = $(".close")
let mainLeft = $(".mainLeftPart")
let mainRight = $(".mainRightPart")
let homePart = $(".homeWrapper")
let ifr = document.querySelectorAll("iframe")
let videoWrapper = document.querySelectorAll(".videoWrapper")
homeBtn.onclick = () => {
    for (v of videoWrapper) {
        v.style.width = "315px"
        v.style.height = "200px"
    }
    for (i of ifr) {
        i.style.width = "100%"
        i.style.height = "100%"

    }
    mainLeft.style.display = "none"
    homePart.style.display = "flex"
    mainRight.style.width = "95%"
}
homeCloseBtn.onclick = () => {
    for (v of videoWrapper) {
        v.style.width = "350px"
        v.style.height = "230px"
    }
    for (i of ifr) {
        i.style.width = "100%"
        i.style.height = "100%"

    }
    mainLeft.style.display = "flex"
    homePart.style.display = "none"
    mainRight.style.width = "auto"
    mainRight.style.width = "83%"
}
let videosList = $(".videosList")
let voiceRec = $(".voiceRec")
let searchInput = $(".searchInput")

let newArray = [];
searchInput.onkeyup = () => {
    if (searchInput.value != "") {
        newArray = [];
        let str = searchInput.value.toLowerCase();
        for (let el of videos) {
            if (el.title.toLowerCase().includes(str)) {
                newArray.push(el);
            }
        }

    } else {
        videosRenderer(videos);
    }

}

function searchFun() {
    if (searchInput.value != "") {
        newArray = [];
        let str = searchInput.value.toLowerCase();
        for (let el of videos) {
            if (el.title.toLowerCase().includes(str)) {
                newArray.push(el);
            }
        }
        videosRenderer(newArray);
    }
}


searchButton.onclick = () => {
    if (searchInput.value == "") {
        videosRenderer(videos);
    } else {
        videosRenderer(newArray);
    }

    function reload() {
        if (searchInput.value == "") {
            window.reload()
        }
    }
    reload()
}


voiceRec.onclick = () => {
    const speechRecognition = window.webkitSpeechRecognition;
    const voice = new speechRecognition();
    voice.lang = 'en-EN';
    voice.continuous = false;
    voice.start();

    voice.onresult = (event) => {
        let result = event.results[0][0].transcript;
        searchInput.value = result;
        searchFun();
    }
    voice.onspeechend = () => {
        voice.stop();
    }


}

function videosRenderer(array) {
    videosList.innerHTML = null
    for (let element of array) {
        let videoItem = document.createElement('li')
        let videoWrap = document.createElement('div')
        let ifrWrap = document.createElement('span')
        let coverImg = document.createElement('img')
        let iconsWrap = document.createElement('span')
        let icon1 = document.createElement('img')
        let icon2 = document.createElement('img')
        let icon3 = document.createElement('img')
        let chanalNameWrap = document.createElement("span")
        let chanelImg = document.createElement("img")
        let videoName = document.createElement("p")
        let chanelName = document.createElement("p")
        let viwes = document.createElement("p")

        videoItem.classList.add("video")
        videoWrap.classList.add("videoWrapper")
        ifrWrap.classList.add("ifrWrap")
        coverImg.classList.add("coverImg")
        iconsWrap.classList.add("iconsWrap")
        icon1.classList.add("delete")
        icon2.classList.add("watchLaterIcon")
        icon3.classList.add("historyImgIcon")
        chanalNameWrap.classList.add("chanalNameWrap")
        chanelImg.classList.add("chanelImg")
        videoName.classList.add("videoName")
        chanelName.classList.add("chanelName")
        viwes.classList.add("viwes")

        ifrWrap.innerHTML = element.iframe
        coverImg.src = element.img
        chanelImg.src = "./img/kanal2.jpg"
        videoName.textContent = element.title
        chanelName.textContent = "Programming lessons"
        viwes.textContent = "372K vives | 4month ago"
        icon1.src = './img/close.svg'
        icon2.src = "./img/watch.svg"
        icon3.src = "./img/history-clock-button.svg"

        chanalNameWrap.appendChild(chanelImg)
        chanalNameWrap.appendChild(videoName)

        iconsWrap.appendChild(icon1)
        iconsWrap.appendChild(icon2)
        iconsWrap.appendChild(icon3)

        videoWrap.appendChild(ifrWrap)
        videoWrap.appendChild(coverImg)
        videoWrap.appendChild(iconsWrap)

        videoItem.appendChild(videoWrap)
        videoItem.appendChild(chanalNameWrap)
        videoItem.appendChild(chanelName)
        videoItem.appendChild(viwes)

        videosList.appendChild(videoItem)
        let button = videoItem.childNodes[0].childNodes[2].childNodes[0]
        button.addEventListener('click', () => {
           videoItem.remove()
        })
    }
}
videosRenderer(videos)

let body = $("body")

function modalRenderer() {
    let clicers = document.querySelectorAll('.coverImg');
    for (let c of clicers) {
        c.onclick = () => {
            let modalScreen = document.createElement("div")
            let modalVideo = document.createElement("div")
            let modalVideoIfr = document.createElement("iframe")
            let modalCloseBtn = document.createElement("button")
            let modalCloseImg = document.createElement("img")
            let videoLink = c.parentNode.childNodes[0].childNodes[0].src
            modalVideoIfr.src = videoLink + "?autoplay=1&mute=0";
            modalScreen.classList.add("modalScreen")
            modalVideo.classList.add("modalVideo")
            modalVideoIfr.classList.add("modalVideoIfr")
            modalCloseBtn.classList.add("modalCloseBtn")
            modalCloseImg.classList.add("modalCloseImg")
            modalCloseImg.src = "./img/close.svg"
            modalCloseImg.width = "25px"
            modalCloseImg.height = "25px"

            modalCloseBtn.appendChild(modalCloseImg)
            modalVideo.appendChild(modalVideoIfr)
            modalVideo.appendChild(modalCloseBtn)

            modalScreen.appendChild(modalVideo)
            body.appendChild(modalScreen)
            modalClose()
        }
    }
}

function modalClose() {
    let btn = $(".modalCloseBtn")
    btn.onclick = () => {
        let modalScr = document.querySelector('.modalScreen');
        modalScr.remove()
    }
}
modalRenderer()

youTube.onclick = () => {
    location.reload();
}