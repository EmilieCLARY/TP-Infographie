var renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 2);
camera.lookAt(0, 0, 0);

var scene = new THREE.Scene();


/* --------------------------------- Couleurs -------------------------------- */

const material_red = new THREE.LineBasicMaterial({
    color: 0xff0000
});

// couleur de fond noir
scene.background = new THREE.Color(0, 0, 0);


/* --------------------------------- Figure -------------------------------- */

const points_cercle = [];

// t correspond à notre précision
let t = 0.01;

// La boucle s'incrémentre
// Pour chaque valeur de t, on trace un point 
for(let i = 0; i <= 2*3.14; i+=t){

    points_cercle.push(new THREE.Vector3((1/2)*Math.cos(i), (1/2)*Math.sin(i), 0));
}


const geometry = new THREE.BufferGeometry().setFromPoints(points_cercle);

// Traçage des lignes entre les différents points
const line = new THREE.Line(geometry, material_red);

// Ajout du carré à la scène
scene.add(line);

renderer.render(scene, camera);


