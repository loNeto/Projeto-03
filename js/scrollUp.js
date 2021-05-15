function scrollSmooth(element){
  document.querySelector(element).scrollIntoView({behavior: 'smooth'});
}

document.querySelector('#gotoUp').addEventListener('click', function(event){
  event.preventDefault();
  scrollSmooth('#aqui');
});
