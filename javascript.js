// JavaScript to toggle the menu overlay
const menuButton = document.querySelector('button'); // Replace with the actual button selector
const menuOverlay = document.getElementById('menu-overlay');

menuButton.addEventListener('click', () => {
    if (getComputedStyle(menuOverlay).display === 'none') {
        menuOverlay.style.display = 'flex';

    } else {
        menuOverlay.style.display = 'none';
        
    }
});


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



// Create an Intersection Observer for the oranje section
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

// Select the oranje section and start observing it
const oranjeSection = document.querySelector(".oranje");
oranjeObserver.observe(oranjeSection);

// Create an Intersection Observer for the zwart footer
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

// Select the zwart footer and start observing it
const zwartFooter = document.querySelector("footer.zwart");
zwartObserver.observe(zwartFooter);
