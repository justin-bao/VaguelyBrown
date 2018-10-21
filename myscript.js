var images = document.getElementsByTagName('img');

alert(images.length);


for (var i = 0; i < images.length; i++) {
  alert(images[i].src)
}
