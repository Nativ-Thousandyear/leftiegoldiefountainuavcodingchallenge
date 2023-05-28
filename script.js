// Add any JavaScript functionality you need for your portfolio website
// Example JavaScript code for your 3D software engineer portfolio

// Smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    easing: 'easeInOutCubic'
  });
});

// Interactive animations using Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Timer
let timerInterval;
let time = 0;
let running = false;
const maxTime = 24 * 60 * 60; // 24 hours in seconds

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = (seconds % 60).toString().padStart(2, '0');
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
  if (!running) {
    running = true;
    timerInterval = setInterval(() => {
      time++;
      document.getElementById('timer').textContent = formatTime(time);
      if (time >= maxTime) {
        stopTimer();
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  running = false;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);

// Remaining code for the 3D animation
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterials = [
  new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green
  new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blue
  new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Yellow
  new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Magenta
  new THREE.MeshBasicMaterial({ color: 0x00ffff })  // Cyan
];
const cube = new THREE.Mesh(cubeGeometry, cubeMaterials);
scene.add(cube);

// Create a solar system with colorful planets
const sunGeometry = new THREE.SphereGeometry(1, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 }); // Yellow
const sun = new THREE.Mesh(sunGeometry, sunMaterial);

const earthGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Blue
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(3, 0, 0);

const marsGeometry = new THREE.SphereGeometry(0.4, 32, 32);
const marsMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
mars.position.set(5, 0, 0);

scene.add(sun, earth, mars);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();

// Contact form submission
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Perform form validation here

  // Send form data to the server using an AJAX request or other method
  // Example AJAX request using Fetch API
  fetch('url/to/submit/form', {
    method: 'POST',
    body: new FormData(form)
  })
    .then(response => {
      // Handle response from the server
    })
    .catch(error => {
      // Handle error
    });
});

// Additional functionality can be added based on your specific requirements
// such as project showcases, skill visualizations, etc.
