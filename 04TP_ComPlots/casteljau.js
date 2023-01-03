/**
 * Casteljau determination
 * @param {Array} tab 
 * @returns 
 */
function Casteljau(tab) {
    let x = 0;
    let y = 0;
    let z = 0;
    let controlPoints = [] // Points de contrôle

    for (let t = 0; t < 1; t += 0.01) {
        x = 0;
        y = 0;
        z = 0;
        for (let i = 0; i < tab.length; i++) {

            x += tab[i].x * binomial(tab.length - 1, i) * Math.pow(t, i) * Math.pow(1 - t, (tab.length - 1 - i));
            y += tab[i].y * binomial(tab.length - 1, i) * Math.pow(t, i) * Math.pow(1 - t, (tab.length - 1 - i));
            z += tab[i].z * binomial(tab.length - 1, i) * Math.pow(t, i) * Math.pow(1 - t, (tab.length - 1 - i));

        }
        controlPoints.push(new THREE.Vector3(x, y, z));

    }
    return controlPoints;
}
