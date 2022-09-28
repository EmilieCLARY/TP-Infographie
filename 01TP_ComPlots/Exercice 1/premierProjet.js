var renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 1000);

var scene = new THREE.Scene();

// Couleur de fond rouge
scene.background = new THREE.Color(1, 0, 0);

renderer.render(scene, camera);