// loading vars
const paginaEen = document.querySelector('.home')
//menu vars
const menuButton = document.querySelector('button');
const menuOverlay = document.getElementById('menu-overlay');


// eventlistener die geactiveerd wordt als ik op de menu knop klik. als display op none staat veranderd de js dit naar flex en als het op flex staat zet de js het op none.
menuButton.addEventListener('click', () => {
    if (getComputedStyle(menuOverlay).display === 'none') {
        menuOverlay.style.display = 'flex';

    } else {
        menuOverlay.style.display = 'none';
        
    }
});


// Intersection Observer https://blog.webdevsimplified.com/2022-01/intersection-observer/

const oranjeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      const intersecting = entry.isIntersecting;
      if (intersecting) {
          document.documentElement.classList.add("oranje");
      } else {
          document.documentElement.classList.remove("oranje");
      }
  });
});

// Target de class oranje en observeer dit
const oranjeSection = document.querySelector(".oranje");
oranjeObserver.observe(oranjeSection);

// Als de class zwart in de viewport komt triggered dit 
const zwartObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      const intersecting = entry.isIntersecting;
      if (intersecting) {
          document.documentElement.classList.add("zwart");
      } else {
          document.documentElement.classList.remove("zwart");
      }
  });
});

// Target de class zwart en observeer dit
const zwartFooter = document.querySelector("footer.zwart");
zwartObserver.observe(zwartFooter);


// de css no-scroll voegt overflow hidden toe op de body en dit gaat na 2 seconden weg door de class te vewijderen van de body. 

paginaEen.classList.add('no-scroll');
setTimeout(function() {
  paginaEen.classList.remove('no-scroll');
}, 2000); 









// oude code voor intersection observer

// var button = document.querySelector('button')
// var body = document.querySelector('orange')
// var myElement = document.getElementById('my-element');
// var bounding = myElement.getBoundingClientRect();

// function elementInViewport() {

//     var bounding = myElement.getBoundingClientRect();

//     if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        
//         body.classList.toggle('active');
//         button
//         console.log('Element is in the viewport!');
//     } else {

//         console.log('Element is NOT in the viewport!');
//     }
// }