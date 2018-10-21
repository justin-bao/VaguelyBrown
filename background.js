
/* A function creator for callbacks */
function updateDatabase(imgURL) {
  //$.post('localhost:3000/postLikedImage', {
  //  userID: 'ID HERE',
  //  imageURL: imgURL,
  //  timestamp: Date.now()
  //})
}

/* When the browser-action button is clicked... */
chrome.browserAction.onClicked.addListener(function(tab) {
    /*...check the URL of the active tab against our pattern and... */
        /* ...if it matches, send a message specifying a callback too */
        chrome.tabs.sendMessage(tab.id, { text: "report_back" },
                                updateDatabase);

});
