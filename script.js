document.getElementsByTagName("button")[0].addEventListener("click",
function() {
  this.first = document.getElementsByTagName('div')[1];
  this.secound = document.getElementsByTagName('div')[2];
  this.thirt = document.getElementsByTagName('div')[3];

  if (!this.first.classList.contains('red') && !this.secound.classList.contains('orange') && !this.thirt.classList.contains('green')) {
    this.first.classList.add('red');
  }else if(this.first.classList.contains('red')) {
    this.first.classList.remove('red');
    this.secound.classList.add('orange');
  }else if(this.secound.classList.contains('orange')){
    this.first.classList.remove('red');
    this.secound.classList.remove('orange');
    this.thirt.classList.add('green');
  }else if(this.thirt.classList.contains('green')) {
    this.thirt.classList.remove('green');
    this.first.classList.add('red');
  }
});
