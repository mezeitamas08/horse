window.scroll({
  top: 500, 
  left: 0, 
  behavior: 'smooth'
});


ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay:200
})

ScrollReveal().reveal('.horses__bg', {origin:'right'})
ScrollReveal().reveal('.heading', {origin:'top'})
