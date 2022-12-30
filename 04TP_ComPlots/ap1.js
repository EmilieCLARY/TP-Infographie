var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('main-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.z = 10;

scene.background = new THREE.Color(0, 0, 0);



let aext = [{
    x: 2.8,
    y: 0.25,
    z: 0
}, {
    x: 2.8,
    y: 1.75,
    z: 0
}, {
    x: 3.1,
    y: 2.15,
    z: 0
}, {
    x: 3.3,
    y: 2.15,
    z: 0
}, {
    x: 3.5,
    y: 2.15,
    z: 0
}, {
    x: 3.8,
    y: 1.75,
    z: 0
}, {
    x: 3.8,
    y: 0.25,
    z: 0
}]

let aint = [
    {
        x: 3,
        y: 0.25,
        z: 0
    },
    {
        x: 3,
        y: 1.75,
        z: 0
    }, {
        x: 3.3,
        y: 2.15,
        z: 0
    }, {
        x: 3.6,
        y: 1.75,
        z: 0
    }, {
        x: 3.6,
        y: 0.25,
        z: 0
    }]


let abarre1 = [
    {
        x: 3.6,
        y: 1,
        z: 0
    }, {
        x: 3,
        y: 0.75,
        z: 0
    }
]

let abarre2 = [
    {
        x: 3.6,
        y: 1.25,
        z: 0
    }, {
        x: 3,
        y: 1,
        z: 0
    }
]

let lettrea = [aext, aint, abarre1, abarre2];

let jint = [{
    x: -0.4,
    y: 2,
    z: 0
}, {
    x: -0.3,
    y: -0,
    z: 0
}, {
    x: -0.6,
    y: 0.6,
    z: 0
},
]

let jpoint = [
    {
        x: -0.4,
        y: 2.6,
        z: 0
    }
    , {
        x: -0.4,
        y: 2.2,
        z: 0
    }, {
        x: -0.3,
        y: 2.2,
        z: 0
    }, {
        x: -0.2,
        y: 2.2,
        z: 0
    }
    , {
        x: -0.2,
        y: 2.6,
        z: 0
    }, {
        x: -0.3,
        y: 2.6,
        z: 0
    }, {
        x: -0.4,
        y: 2.6,
        z: 0
    }
]

let jext = [{
    x: -0.2,
    y: 2,
    z: 0
}, {
    x: -0.1,
    y: -0.,
    z: 0
}, {
    x: -0.6,
    y: 0.2,
    z: 0
},
]

let lettrej = [jext, jint, jpoint]

let uext = [{
    x: 0,
    y: 2,
    z: 0
}
    , {
    x: 0,
    y: 0.75,
    z: 0
}
    , {
    x: 0,
    y: 0,
    z: 0
}
    , {
    x: 1,
    y: 0,
    z: 0
}
    , {
    x: 1,
    y: 0.75,
    z: 0
}
    , {
    x: 1,
    y: 2,
    z: 0
}
    ,]

let uint = [{
    x: 0.15,
    y: 2,
    z: 0
}
    , {
    x: 0.15,
    y: 0.25,
    z: 0
}, {
    x: 0.5,
    y: 0.25,
    z: 0
}
    , {
    x: 0.85,
    y: 0.25,
    z: 0
}
    , {
    x: 0.85,
    y: 2,
    z: 0
}
    ,]

let lettreu = [uext, uint];

let next = [{
    x: 1,
    y: 2,
    z: 0
}, {
    x: 2,
    y: -0.75,
    z: 0
}
    , {
    x: 1.8,
    y: 2,
    z: 0
}]

let nint = [{
    x: 1,
    y: 1.6,
    z: 0
}
    , {
    x: 1.70,
    y: -0.250,
    z: 0
}, {
    x: 2,
    y: -0.250,
    z: 0
}
    , {
    x: 2,
    y: 2,
    z: 0
}]

let lettren = [next, nint];

let iint = [
    {
        x: 2.2,
        y: 2,
        z: 0
    },

    {
        x: 2.2,
        y: 1.5,
        z: 0
    },

    {
        x: 2.2,
        y: 0.5,
        z: 0
    }
    , {
        x: 2.2,
        y: 0,
        z: 0
    },
    {
        x: 2.4,
        y: 0,
        z: 0
    },
    {
        x: 2.6,
        y: 0,
        z: 0
    },
    {
        x: 2.6,
        y: 0.5,
        z: 0
    },

    {
        x: 2.6,
        y: 1.5,
        z: 0
    }
    , {
        x: 2.6,
        y: 2,
        z: 0
    },

    {
        x: 2.4,
        y: 2,
        z: 0
    },
    {
        x: 2.2,
        y: 2,
        z: 0
    }
]

let iext = [
    {
        x: 2.2,
        y: 2.6,
        z: 0
    }
    , {
        x: 2.2,
        y: 2.2,
        z: 0
    }, {
        x: 2.4,
        y: 2.2,
        z: 0
    }, {
        x: 2.6,
        y: 2.2,
        z: 0
    }
    , {
        x: 2.6,
        y: 2.6,
        z: 0
    }, {
        x: 2.4,
        y: 2.6,
        z: 0
    }, {
        x: 2.2,
        y: 2.6,
        z: 0
    }
]

let lettrei = [iext, iint]

// points.forEach(point => {
//     const geometry = new THREE.BufferGeometry().setFromPoints(points);
//     const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

//     const geometrySphere = new THREE.SphereGeometry(0.05, 32, 16);
//     const sphere = new THREE.Mesh(geometrySphere, material);
//     sphere.position.x = point.x
//     sphere.position.y = point.y

//     let displayPoly = new THREE.Line(geometry, materialPoly);

//     scene.add(sphere);
//     scene.add(displayPoly);
// });
// points2.forEach(point => {
//     const geometry = new THREE.BufferGeometry().setFromPoints(points);
//     const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

//     const geometrySphere = new THREE.SphereGeometry(0.05, 32, 16);
//     const sphere = new THREE.Mesh(geometrySphere, material);
//     sphere.position.x = point.x
//     sphere.position.y = point.y

//     let displayPoly = new THREE.Line(geometry, materialPoly);

//     scene.add(sphere);
//     scene.add(displayPoly);
// });


lettrea.forEach(element => {
    element.forEach(point => {
        const geometry = new THREE.BufferGeometry().setFromPoints(element);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

        const geometrySphere = new THREE.SphereGeometry(0.05, 32, 16);
        const sphere = new THREE.Mesh(geometrySphere, material);
        sphere.position.x = point.x
        sphere.position.y = point.y

        let displayPoly = new THREE.Line(geometry, materialPoly);

        scene.add(sphere);
        scene.add(displayPoly);
    });
    //Bernstein(element);
    displayCurve(Casteljau(element))
});

lettrej.forEach(element => {
    element.forEach(point => {
        const geometry = new THREE.BufferGeometry().setFromPoints(element);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

        const geometrySphere = new THREE.SphereGeometry(0.05, 32, 16);
        const sphere = new THREE.Mesh(geometrySphere, material);
        sphere.position.x = point.x
        sphere.position.y = point.y

        let displayPoly = new THREE.Line(geometry, materialPoly);

        scene.add(sphere);
        scene.add(displayPoly);
    });
    // Bernstein(element);
    displayCurve(Casteljau(element))
});

lettreu.forEach(element => {
    element.forEach(point => {
        const geometry = new THREE.BufferGeometry().setFromPoints(element);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

        const geometrySphere = new THREE.SphereGeometry(0.05, 32, 16);
        const sphere = new THREE.Mesh(geometrySphere, material);
        sphere.position.x = point.x
        sphere.position.y = point.y

        let displayPoly = new THREE.Line(geometry, materialPoly);

        scene.add(sphere);
        scene.add(displayPoly);
    });
    // Bernstein(element);
    displayCurve(Casteljau(element))
});

lettren.forEach(element => {
    element.forEach(point => {
        const geometry = new THREE.BufferGeometry().setFromPoints(element);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

        const geometrySphere = new THREE.SphereGeometry(0.05, 32, 16);
        const sphere = new THREE.Mesh(geometrySphere, material);
        sphere.position.x = point.x
        sphere.position.y = point.y

        let displayPoly = new THREE.Line(geometry, materialPoly);

        scene.add(sphere);
        scene.add(displayPoly);
    });
    // Bernstein(element);
    displayCurve(Casteljau(element))
});

lettrei.forEach(element => {
    element.forEach(point => {
        const geometry = new THREE.BufferGeometry().setFromPoints(element);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

        const geometrySphere = new THREE.SphereGeometry(0.05, 32, 16);
        const sphere = new THREE.Mesh(geometrySphere, material);
        sphere.position.x = point.x
        sphere.position.y = point.y

        let displayPoly = new THREE.Line(geometry, materialPoly);

        scene.add(sphere);
        scene.add(displayPoly);
    });
    // Bernstein(element);
    displayCurve(Casteljau(element))
});

// Bernstein(points)
// displayCurve(Casteljau(points))
// Bernstein(points2)
// displayCurve(Casteljau(points2))

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
