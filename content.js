chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    /* If the received message has the expected format... */
    if (msg.text === "report_back") {
        /* Call the specified callback, passing
           the web-pages DOM content as argument */
           
    sendResponse(document.getElementsByTagName('img')[0].getAttribute("src"));
    }
});
/*function getTime () {
     var d = new Date();
     var hours = d.getHours();
     if(hours > 12) {
       hours = hours-12;
     }
     var minutes = d.getMinutes();
     var seconds = d.getSeconds();
     alert("Current Time: " + hours + ":" + minutes + ":" + seconds);
}

function getDate () {
     var d = new Date();
     var day = d.getDate();
     var month = d.getMonth()+1;
     var year = d.getFullYear();
     alert("Date: " + month + "/" + day + "/"  + year);
}

function getURL () {

  var url = document.url;
  alert("Page URL: " + url);
}

function get () {
  getTime();
  getDate();
  getURL();
}

get();
*/
