let firstClick = true;
const target = 25;
let current = 0;
const counter = document.getElementById("counter"); 
const interval = setInterval(() => {
    current++;
    counter.textContent = current;

    if (current >= target) {
    clearInterval(interval);
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
    });document.getElementById("glowBg").style.opacity = "1";
    }   
}, 80); 
  document.getElementById('tapButton').addEventListener('click', () => {
    if (firstClick) {
      firstClick = false;
      Swal.fire({
        title: 'Did you make a wish?', 
        imageUrl: 'sqiudward.jpg',  
        imageWidth: '80%',     
        imageHeight: 'auto',
        customClass: {
          popup: 'responsive-swal'  
        },
        confirmButtonText: 'Yesss',
         confirmButtonColor: '#a00a0a',
         background: 'rgba(255, 192, 203, 0.8)' 
      });
    } else {
      document.querySelectorAll('.flame').forEach(flame => {
        flame.classList.add('fade-out');
        setTimeout(() => {
          flame.classList.remove('fade-out');
        }, 4000);  
      });
    }
  }); 
