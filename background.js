
/* A function creator for callbacks */
function updateDatabase(imgURL) {
alert("Token: " + authToken + " ImgURL: " + imgURL + " Timestamp: " + Date.now());

  //$.post('localhost:3000/postLikedImage', {
  //  userID: 'authToken',
  //  imageURL: imgURL,
  //  timestamp: Date.now()
  //})
}

var authToken;
chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
        // Use the token.
        authToken = token;
            });
/* When the browser-action button is clicked... */
chrome.browserAction.onClicked.addListener(function(tab) {
    /*...check the URL of the active tab against our pattern and... */
        /* ...if it matches, send a message specifying a callback too */
        chrome.tabs.sendMessage(tab.id, { text: "report_back" },
                                updateDatabase);

});
