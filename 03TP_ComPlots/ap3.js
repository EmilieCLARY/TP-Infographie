// @ts-nocheck
var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('main-canvas') });
//document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.z = 5

scene.background = new THREE.Color(0, 0, 0);



let points = [{
    x: 0,
    y: 0,
    z: 0
}, {
    x: 1,
    y: 1,
    z: 0
}, {
    x: 0,
    y: 1,
    z: 0
}, {
    x: 1,
    y: 0,
    z: 0
}] // Tableau de points
// const axesHelper = new THREE.AxesHelper(1);
// scene.add(axesHelper);

points.forEach(point => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

    const geometrySphere = new THREE.SphereGeometry(0.05, 32, 16);
    const sphere = new THREE.Mesh(geometrySphere, material);
    sphere.position.x = point.x
    sphere.position.y = point.y

    let displayPoly = new THREE.Line(geometry, materialPoly);

    scene.add(sphere);
    scene.add(displayPoly);
});

Bernstein(points)
displayCurve(deBoor(points))

renderer.render(scene, camera);

// Add point
document.getElementById("valid").addEventListener('click', () => {
    let px = Number(document.getElementById("nx").value);
    let py = Number(document.getElementById("ny").value);

    points.push(new THREE.Vector3(px, py, 0));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

    const geometrySphere = new THREE.SphereGeometry(0.1, 32, 16);
    const sphere = new THREE.Mesh(geometrySphere, material);
    sphere.position.x = px
    sphere.position.y = py

    const displayPoly = new THREE.Line(geometry, materialPoly);

    scene.add(sphere);
    scene.add(displayPoly);
    renderer.render(scene, camera);

    scene.remove(scene.getObjectByName("curve"));
    points.forEach(() => {
        scene.remove(scene.getObjectByName("Bernstein"));
    });
    if (points.length > 1) {
        Bernstein(points)
        displayCurve(deBoor(points))
    }

})

/**
 * Genererate Curve with an array of points
 * @param {Array} tab 
 */
function displayCurve(tab) {

    const geometry = new THREE.BufferGeometry().setFromPoints(tab); //on remplit le tableau des points calculés de la courbe
    const graph = new THREE.Line(geometry, materialCasteljau);
    graph.name = "curve";
    scene.add(graph); // on ajoute à la scène tous les points
    // camera.position.z = 5;
    renderer.render(scene, camera);

}
