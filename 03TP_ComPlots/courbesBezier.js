// ThreeJS settings
var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('main-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.z = 10 // On recule légèrement la caméra

scene.background = new THREE.Color(0, 0, 0); // Fond noir


let points = [] // Tableau de points

renderer.render(scene, camera);

// Add point
document.getElementById("valid").addEventListener('click', () => { // À chaque pression du bouton "Add"
    // On récupère la valeur contenue dans les cases
    let px = Number(document.getElementById("nx").value);
    let py = Number(document.getElementById("ny").value);

    // On créé notre vecteur
    points.push(new THREE.Vector3(px, py, 0));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

    // On trace des petites sphères comme point
    const geometrySphere = new THREE.SphereGeometry(0.1, 32, 16);
    const sphere = new THREE.Mesh(geometrySphere, material);
    sphere.position.x = px
    sphere.position.y = py

    // On créé le polygône de contrôle
    const displayPoly = new THREE.Line(geometry, materialPoly);

    scene.add(sphere);      // Ajout de la sphère à la scène
    scene.add(displayPoly); // Ajout du polygône  à la sphère
    renderer.render(scene, camera);

    // On retire les courbes déjà présentes (afin d'éviter un paté de courbe)
    scene.remove(scene.getObjectByName("curve"));
    points.forEach(() => {
        scene.remove(scene.getObjectByName("Bernstein"));
    });
    if (points.length > 1) { // S'il y a au moins deux points, on peut tracer les polygônes
        Bernstein(points)
        displayCurve(Casteljau(points))
    }

})

/**
 * Genererate Curve with an array of points
 * @param {Array} tab 
 */
function displayCurve(tab) {

    const geometry = new THREE.BufferGeometry().setFromPoints(tab);
    const graph = new THREE.Line(geometry, materialCasteljau);
    graph.name = "curve";
    scene.add(graph);
    renderer.render(scene, camera);
}
