var renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(20, 10, 100);
camera.lookAt(20, 10, 0);

var scene = new THREE.Scene();

// // Axes pour aider au placement des objets
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

/* --------------------------------- Couleur -------------------------------- */

const material_red = new THREE.LineBasicMaterial({
    color: 0xff0000
});

const material_blue = new THREE.LineBasicMaterial({
    color: 0x0000ff
});

/* --------------------------------- Figures -------------------------------- */

/* ----------------------- Triangle ---------------------- */

// Tableau de points pour notre triangle
const points_triangle = [];

points_triangle.push(new THREE.Vector3(-20, 10, 0));
points_triangle.push(new THREE.Vector3(0, -10, 0));
points_triangle.push(new THREE.Vector3(20, 10, 0));
points_triangle.push(new THREE.Vector3(-20, 10, 0));

// Création d'une figure géométrique à partir des points
const geometry_triangle = new THREE.BufferGeometry().setFromPoints(points_triangle);

// Traçage des lignes entre les différents points
const line_triangle = new THREE.Line(geometry_triangle, material_red);

// Ajout de notre triangle à la scène
scene.add(line_triangle);


/* ----------------------- Carré ---------------------- */

// Tableau de points pour notre carré
const points_carre = [];

// Push Point à point des figures
points_carre.push(new THREE.Vector3(20, -10, 0));
points_carre.push(new THREE.Vector3(60, -10, 0));
points_carre.push(new THREE.Vector3(60, 30, 0));
points_carre.push(new THREE.Vector3(20, 30, 0));
points_carre.push(new THREE.Vector3(20, -10, 0));

// Création d'une figure géométrique à partir des points
const geometry_carre = new THREE.BufferGeometry().setFromPoints(points_carre);

// Traçage des lignes entre les différents points
const line_carre = new THREE.Line(geometry_carre, material_blue);

// Ajout du carré à la scène
scene.add(line_carre);

// couleur de fond noir
scene.background = new THREE.Color(0, 0, 0);

renderer.render(scene, camera);