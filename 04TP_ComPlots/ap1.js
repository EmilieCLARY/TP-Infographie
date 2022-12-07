var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('main-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.z = 10;

scene.background = new THREE.Color(0, 0, 0);



let points = [{
    x: 0,
    y: -3,
    z: 0
}, {
    x: 0,
    y: 0,
    z: 0,
}, {
    x: 1,
    y: 0,
    z: 0
},
{
    x: 1,
    y: 0,
    z: 0
},
{
    x: 2,
    y: 0,
    z: 0
}, {
    x: 2,
    y: -3,
    z: 0
}]

let points2 = [{
    x: 1.6,
    y: -3,
    z: 0
}, {
    x: 1.6,
    y: -0.4,
    z: 0,
}, {
    x: 1,
    y: -0.4,
    z: 0
},
{
    x: 1,
    y: -0.4,
    z: 0
}, {
    x: 0.4,
    y: -0.4,
    z: 0
}, {
    x: 0.4,
    y: -3,
    z: 0
}]

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
points2.forEach(point => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const geometrySphere = new THREE.SphereGeometry(0.05, 32, 16);
    const sphere = new THREE.Mesh(geometrySphere, material);
    sphere.position.x = point.x
    sphere.position.y = point.y

    let displayPoly = new THREE.Line(geometry, materialPoly);

    scene.add(sphere);
    scene.add(displayPoly);
});

Bernstein(points)
displayCurve(Casteljau(points))
Bernstein(points2)
displayCurve(Casteljau(points2))

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
