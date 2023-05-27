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

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

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
