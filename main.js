var animatedHeading = document.getElementsByClassName('animated')[0];
var letters = animatedHeading.textContent.split('');

var content = letters.map((val, i) => {
  let delay = Math.floor((Math.random() * 1000) + 1);
  return ('<span style="animation-delay: '+ delay + 'ms">'
          + val +
          '</span>');
});

animatedHeading.innerHTML = "";

for (var i = 0; i < content.length; i++) {
  animatedHeading.innerHTML += content[i];
}
