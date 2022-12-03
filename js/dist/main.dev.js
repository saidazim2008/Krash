"use strict";

function $(el) {
  return document.querySelector(el);
}

var homeBtn = $(".menu");
var homeCloseBtn = $(".close");
var mainLeft = $(".mainLeftPart");
var mainRight = $(".mainRightPart");
var homePart = $(".homeWrapper");
var ifr = document.querySelectorAll("iframe");
var videoWrapper = document.querySelectorAll(".videoWrapper");

homeBtn.onclick = function () {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = videoWrapper[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      v = _step.value;
      v.style.width = "315px";
      v.style.height = "200px";
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = ifr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      i = _step2.value;
      i.style.width = "100%";
      i.style.height = "100%";
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  mainLeft.style.display = "none";
  homePart.style.display = "flex";
  mainRight.style.width = "95%";
};

homeCloseBtn.onclick = function () {
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = videoWrapper[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      v = _step3.value;
      v.style.width = "350px";
      v.style.height = "230px";
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = ifr[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      i = _step4.value;
      i.style.width = "100%";
      i.style.height = "100%";
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  mainLeft.style.display = "flex";
  homePart.style.display = "none";
  mainRight.style.width = "auto";
  mainRight.style.width = "100%";
};

var videosList = $(".videosList");
var voiceRec = $(".voiceRec");
var searchInput = $(".searchInput");
var newArray = [];

searchInput.onkeyup = function () {
  if (searchInput.value != "") {
    newArray = [];
    var str = searchInput.value.toLowerCase();
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = videos[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var el = _step5.value;

        if (el.title.toLowerCase().includes(str)) {
          newArray.push(el);
        }
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
          _iterator5["return"]();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }
  } else {
    videosRenderer(videos);
  }
};

function searchFun() {
  if (searchInput.value != "") {
    newArray = [];
    var str = searchInput.value.toLowerCase();
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = videos[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var el = _step6.value;

        if (el.title.toLowerCase().includes(str)) {
          newArray.push(el);
        }
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
          _iterator6["return"]();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }

    videosRenderer(newArray);
  }
}

searchButton.onclick = function () {
  if (searchInput.value == "") {
    videosRenderer(videos);
  } else {
    videosRenderer(newArray);
  }

  function reload() {
    if (searchInput.value == "") {
      window.reload();
    }
  }

  reload();
};

voiceRec.onclick = function () {
  var speechRecognition = window.webkitSpeechRecognition;
  var voice = new speechRecognition();
  voice.lang = 'en-EN';
  voice.continuous = false;
  voice.start();

  voice.onresult = function (event) {
    var result = event.results[0][0].transcript;
    searchInput.value = result;
    searchFun();
  };

  voice.onspeechend = function () {
    voice.stop();
  };
};

function videosRenderer(array) {
  videosList.innerHTML = null;
  var _iteratorNormalCompletion7 = true;
  var _didIteratorError7 = false;
  var _iteratorError7 = undefined;

  try {
    var _loop = function _loop() {
      var element = _step7.value;
      var videoItem = document.createElement('li');
      var videoWrap = document.createElement('div');
      var ifrWrap = document.createElement('span');
      var coverImg = document.createElement('img');
      var iconsWrap = document.createElement('span');
      var icon1 = document.createElement('img');
      var icon2 = document.createElement('img');
      var icon3 = document.createElement('img');
      var chanalNameWrap = document.createElement("span");
      var chanelImg = document.createElement("img");
      var videoName = document.createElement("p");
      var chanelName = document.createElement("p");
      var viwes = document.createElement("p");
      videoItem.classList.add("video");
      videoWrap.classList.add("videoWrapper");
      ifrWrap.classList.add("ifrWrap");
      coverImg.classList.add("coverImg");
      iconsWrap.classList.add("iconsWrap");
      icon1.classList.add("delete");
      icon2.classList.add("watchLaterIcon");
      icon3.classList.add("historyImgIcon");
      chanalNameWrap.classList.add("chanalNameWrap");
      chanelImg.classList.add("chanelImg");
      videoName.classList.add("videoName");
      chanelName.classList.add("chanelName");
      viwes.classList.add("viwes");
      ifrWrap.innerHTML = element.iframe;
      coverImg.src = element.img;
      chanelImg.src = "./img/kanal2.jpg";
      videoName.textContent = element.title;
      chanelName.textContent = "Programming lessons";
      viwes.textContent = "372K vives | 4month ago";
      icon1.src = './img/close.svg';
      icon2.src = "./img/watch.svg";
      icon3.src = "./img/history-clock-button.svg";
      chanalNameWrap.appendChild(chanelImg);
      chanalNameWrap.appendChild(videoName);
      iconsWrap.appendChild(icon1);
      iconsWrap.appendChild(icon2);
      iconsWrap.appendChild(icon3);
      videoWrap.appendChild(ifrWrap);
      videoWrap.appendChild(coverImg);
      videoWrap.appendChild(iconsWrap);
      videoItem.appendChild(videoWrap);
      videoItem.appendChild(chanalNameWrap);
      videoItem.appendChild(chanelName);
      videoItem.appendChild(viwes);
      videosList.appendChild(videoItem);
      var button = videoItem.childNodes[0].childNodes[2].childNodes[0];
      button.addEventListener('click', function () {
        videos.splice(element, 2);
        videosRenderer(videos);
      });
    };

    for (var _iterator7 = array[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError7 = true;
    _iteratorError7 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
        _iterator7["return"]();
      }
    } finally {
      if (_didIteratorError7) {
        throw _iteratorError7;
      }
    }
  }
}

videosRenderer(videos);
var body = $("body");

function modalRenderer() {
  var clicers = document.querySelectorAll('.coverImg');
  var _iteratorNormalCompletion8 = true;
  var _didIteratorError8 = false;
  var _iteratorError8 = undefined;

  try {
    var _loop2 = function _loop2() {
      var c = _step8.value;

      c.onclick = function () {
        var modalScreen = document.createElement("div");
        var modalVideo = document.createElement("div");
        var modalVideoIfr = document.createElement("iframe");
        var modalCloseBtn = document.createElement("button");
        var modalCloseImg = document.createElement("img");
        var videoLink = c.parentNode.childNodes[0].childNodes[0].src;
        modalVideoIfr.src = videoLink + "?autoplay=1&mute=0";
        modalScreen.classList.add("modalScreen");
        modalVideo.classList.add("modalVideo");
        modalVideoIfr.classList.add("modalVideoIfr");
        modalCloseBtn.classList.add("modalCloseBtn");
        modalCloseImg.classList.add("modalCloseImg");
        modalCloseImg.src = "./img/close.svg";
        modalCloseImg.width = "25px";
        modalCloseImg.height = "25px";
        modalCloseBtn.appendChild(modalCloseImg);
        modalVideo.appendChild(modalVideoIfr);
        modalVideo.appendChild(modalCloseBtn);
        modalScreen.appendChild(modalVideo);
        body.appendChild(modalScreen);
        modalClose();
      };
    };

    for (var _iterator8 = clicers[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
      _loop2();
    }
  } catch (err) {
    _didIteratorError8 = true;
    _iteratorError8 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
        _iterator8["return"]();
      }
    } finally {
      if (_didIteratorError8) {
        throw _iteratorError8;
      }
    }
  }
}

function modalClose() {
  var btn = $(".modalCloseBtn");

  btn.onclick = function () {
    var modalScr = document.querySelector('.modalScreen');
    modalScr.remove();
    localStorage.clear();
  };
}

modalRenderer();

youTube.onclick = function () {
  location.reload();
};