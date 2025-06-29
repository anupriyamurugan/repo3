document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".progress-circle");

  circles.forEach(circle => {
    const percentage = parseInt(circle.getAttribute("data-percentage"));
    const degrees = (percentage % 100) * 3.6;
    const fullRotations = Math.floor(percentage / 100);
    const totalDegrees = degrees + (360 * fullRotations);

    circle.style.background = `conic-gradient(
      #e91e63 0deg,
      #9c27b0 ${totalDegrees}deg,
      #e0e0e0 ${totalDegrees}deg 360deg
    )`;
  });
});
