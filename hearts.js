// Checking page title
function getTime (d) {
  var hours = d.getHours();
  if(hours > 12) {
    hours = hours-12;
  }
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  alert("Current Time: " + hours + ":" + minutes + ":" + seconds);

}

function getDate (d) {
  var day = d.getDate();
  var month = d.getMonth()+1;
  var year = d.getFullYear();
  alert("Date: " + month + "/" + day + "/"  + year);

}

chrome.browserAction.onClicked.addListener(
  function() {

    var d = new Date();
    getTime(d);
    getDate(d);
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true},
      function (tabs) {
        var url = tabs[0].url;
        alert(url);

      })

    //var images = document.getElementsByTagName('img');
    //alert("Found Images1");
    //alert(images.length);
    //var url  = images[0].getAttribute("src");
    //alert("Image URL: " + url);
  }
);




/*
var divElements = document.getElementsByTagName('div');
var button;

for(var i = 0; i < divElements.length; i++) {
  if(divElements[i].getAttribute("Class") === "_4f _h _z6 _4q") {
    button = document.createElement("button");
    button.innerHTML  = "Do Something";
    divElements[i].appendChild(button);
  }

}

button.addEventListener("click",
function() {
  alert("did something");
});

/*
for(var i = 0; i < imgElements.length; i++) {
  imgElements[i].src = "https://png.icons8.com/metro/1600/hearts.png";
}

var imgLinks = document.getElementsByTagName('a');


for(var i = 0; i < imgLinks.length; i++) {

  if(imgLinks[i].getAttribute("class") === "imageLink") {
    imgLinks[i].href = "https://png.icons8.com/metro/1600/hearts.png";
  }
}

*/
