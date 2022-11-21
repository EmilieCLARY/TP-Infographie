/**
 * Calcul S(x)
 * @param {Number} k Index de l'intervalle des noeuds contenant x
 * @param {Number} x Position
 * @param {Array} t Tableau de noeud
 * @param {Array} c Tableau de points de contrôle
 * @param {Number} p Degré
 */
function deBoor(k, x, t, c, p) {
    let d = []
    let alpha = 0;
    for (let j = 0; j < p + 1; ++j) d.push(c[j + k - p]);

    for (let r = 1; r < p + 1; ++r) {

        for (let j = p; j != r - 1; --j) {
            alpha = (x - t[j + k - p]) / (t[j + 1 + k - r] - t[j + k - p]);
            d[j] = (1.0 - alpha) * d[j - 1] + alpha * d[j]
        }
    }
    return d[p]
}
