document.getElementsByTagName("button")[0].addEventListener("click",
function() {
  first = document.getElementsByClassName('first-circ')[0];
  secound = document.getElementsByClassName('secound-circ')[0];
  thirt = document.getElementsByClassName('thirt-circ')[0];

  if (!first.classList.contains('red') && !secound.classList.contains('orange') && !thirt.classList.contains('green')) {
    first.classList.add('red');
  }else if(first.classList.contains('red')) {
    first.classList.remove('red');
    secound.classList.add('orange');
  }else if(secound.classList.contains('orange')){
    first.classList.remove('red');
    secound.classList.remove('orange');
    thirt.classList.add('green');
  }else if(thirt.classList.contains('green')) {
    thirt.classList.remove('green');
    first.classList.add('red');
  }
});
