var renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 50);
camera.lookAt(0, 0, 0);

// Création de la scène
var scene = new THREE.Scene();

const material_red = new THREE.LineBasicMaterial({
    color: 0xff0000
});

// couleur de fond noir
scene.background = new THREE.Color(0, 0, 0);

const points_cercle = [];

let t = 0.02;
let a = 3;
for(let i = 0; i <= 100; i+=t){

    points_cercle.push(new THREE.Vector3(a*Math.cos(i)**3, a*Math.sin(i)**3, 0));
}


const geometry = new THREE.BufferGeometry().setFromPoints(points_cercle);

// Traçage des lignes entre les différents points
const line = new THREE.Line(geometry, material_red);

// Ajout du carré à la scène
scene.add(line);

const geometry_sphere = new THREE.SphereGeometry( 1, 1, 1 );
const material_sphere = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const sphere = new THREE.Mesh( geometry_sphere, material_sphere );
scene.add( sphere );

function animate() {
    sphere.position = (1,1,0)
}

renderer.render(scene, camera);




