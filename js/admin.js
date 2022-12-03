let form = document.querySelector(".form")
let iframeInput = document.querySelector(".videoInput")
let imgInput = document.querySelector(".imgInput")
let titleInput = document.querySelector(".titleInput")

form.onsubmit = function(event) {
    event.preventDefault()
    let obj = {
        id:videos.length+1,
        iframe: iframeInput.value,
        img: imgInput.value,
        title: titleInput.value
    }
    videos.push(obj)
    window.localStorage.setItem('data', JSON.stringify(videos))
    iframeInput.value = null
    imgInput.value = null
    titleInput.value = null
}