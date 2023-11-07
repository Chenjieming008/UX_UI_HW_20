// Hovering over a selected <div class="work"> will zoom in, 
// while the others become transparent during the hover.

/* --------------------------------------------------------------------------------------- */


const workItems = document.querySelectorAll('.work');

workItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    workItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.style.opacity = '0.5';
      }
    });
  });

  item.addEventListener('mouseleave', () => {
    workItems.forEach(otherItem => {
      otherItem.style.opacity = '1';
    });
  });
});
