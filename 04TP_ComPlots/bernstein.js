/**
 * Bernstein determination
 * @param {Array} tab 
 * @returns 
 */
function Bernstein(tab) {
    let controlPoints = []; // Points de contrôle

    for (let i = 0; i < tab.length; i++) { // Détermination des bases de Bernstein

        controlPoints = []; // Nettoyage du tableau à chaque itération majeure

        for (let t = 0; t < 1; t += 0.01) {

            controlPoints.push(new THREE.Vector2(t, binomial(tab.length - 1, i) * Math.pow(t, i) * Math.pow(1 - t, (tab.length - 1 - i))));
        }

        { // Traçage des bases de Bernstein
            const geometry = new THREE.BufferGeometry().setFromPoints(controlPoints); //on remplit le tableau des points calculés de la courbe
            const graph = new THREE.Line(geometry, materialBernstein);
            graph.name = "Bernstein";
            scene.add(graph);
            renderer.render(scene, camera);
        }
    }
    return controlPoints;
}
