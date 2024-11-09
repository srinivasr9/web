document.addEventListener("DOMContentLoaded", () => {
  const launchDate = new Date('November 10, 2024 00:17:00').getTime();
  
  const countdownElement = document.getElementById("timer");
  const countdownContainer = document.getElementById("countdown");

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance <= 0) {
      clearInterval(countdown);
      countdownContainer.style.display = "none";
      document.getElementById("page1").classList.add("active");
      document.getElementById("bg-music1").play();
    }
  }, 1000);
});

function goToPage(pageNumber) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(`page${pageNumber}`).classList.add('active');

  if (pageNumber === 2) {
    document.getElementById("bg-music1").pause(); 
    document.getElementById("bg-music2").play();  
  }
}

function checkAnswer() {
  const answer = document.getElementById("answer").value.toLowerCase();
  
  if (answer === "sanghi") { 
    document.getElementById("video-content").style.display = "block";
    document.getElementById("bg-music2").pause(); 
    document.getElementById("video").play();      
  } else {
    alert("That's not quite right. Try again!");
  }
}

