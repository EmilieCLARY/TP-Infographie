var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('main-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.z = 10;

scene.background = new THREE.Color(0, 0, 0);


// Création des points de contrôle

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

let lettrea = [aext, aint, abarre1, abarre2];       // Assemblage des différentes parties pour former le A

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

let lettrej = [jext, jint, jpoint]      // Assemblage des différentes parties pour former le J

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

let lettreu = [uext, uint];         // Assemblage des différentes parties pour former le U

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

let lettren = [next, nint];         // Assemblage des différentes parties pour former le N

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

let lettrei = [iext, iint]      // Assemblage des différentes parties pour former le I

let abisext = [{
    x: 2.8,
    y: 0.25,
    z: 2
}, {
    x: 2.8,
    y: 1.75,
    z: 2
}, {
    x: 3.1,
    y: 2.15,
    z: 2
}, {
    x: 3.3,
    y: 2.15,
    z: 2
}, {
    x: 3.5,
    y: 2.15,
    z: 2
}, {
    x: 3.8,
    y: 1.75,
    z: 2
}, {
    x: 3.8,
    y: 0.25,
    z: 2
}]

let abisint = [
    {
        x: 3,
        y: 0.25,
        z: 2
    },
    {
        x: 3,
        y: 1.75,
        z: 2
    }, {
        x: 3.3,
        y: 2.15,
        z: 2
    }, {
        x: 3.6,
        y: 1.75,
        z: 2
    }, {
        x: 3.6,
        y: 0.25,
        z: 2
    }]


let abisbarre1 = [
    {
        x: 3.6,
        y: 1,
        z: 2
    }, {
        x: 3,
        y: 0.75,
        z: 2
    }
]

let abisbarre2 = [
    {
        x: 3.6,
        y: 1.25,
        z: 2
    }, {
        x: 3,
        y: 1,
        z: 2
    }
]

let lettreabis = [abisext, abisint, abisbarre1, abisbarre2];

let jbisint = [{
    x: -0.4,
    y: 2,
    z: 2
}, {
    x: -0.3,
    y: -0,
    z: 2
}, {
    x: -0.6,
    y: 0.6,
    z: 2
},
]

let jbispoint = [
    {
        x: -0.4,
        y: 2.6,
        z: 2
    }
    , {
        x: -0.4,
        y: 2.2,
        z: 2
    }, {
        x: -0.3,
        y: 2.2,
        z: 2
    }, {
        x: -0.2,
        y: 2.2,
        z: 2
    }
    , {
        x: -0.2,
        y: 2.6,
        z: 2
    }, {
        x: -0.3,
        y: 2.6,
        z: 2
    }, {
        x: -0.4,
        y: 2.6,
        z: 2
    }
]

let jbisext = [{
    x: -0.2,
    y: 2,
    z: 2
}, {
    x: -0.1,
    y: -0.,
    z: 2
}, {
    x: -0.6,
    y: 0.2,
    z: 2
},
]

let lettrejbis = [jbisext, jbisint, jbispoint]

let ubisext = [{
    x: 0,
    y: 2,
    z: 2
}
    , {
    x: 0,
    y: 0.75,
    z: 2
}
    , {
    x: 0,
    y: 0,
    z: 2
}
    , {
    x: 1,
    y: 0,
    z: 2
}
    , {
    x: 1,
    y: 0.75,
    z: 2
}
    , {
    x: 1,
    y: 2,
    z: 2
}
    ,]

let ubisint = [{
    x: 0.15,
    y: 2,
    z: 2
}
    , {
    x: 0.15,
    y: 0.25,
    z: 2
}, {
    x: 0.5,
    y: 0.25,
    z: 2
}
    , {
    x: 0.85,
    y: 0.25,
    z: 2
}
    , {
    x: 0.85,
    y: 2,
    z: 2
}
    ,]

let lettreubis = [ubisext, ubisint];

let nbisext = [{
    x: 1,
    y: 2,
    z: 2
}, {
    x: 2,
    y: -0.75,
    z: 2
}
    , {
    x: 1.8,
    y: 2,
    z: 2
}]

let nbisint = [{
    x: 1,
    y: 1.6,
    z: 2
}
    , {
    x: 1.70,
    y: -0.250,
    z: 2
}, {
    x: 2,
    y: -0.250,
    z: 2
}
    , {
    x: 2,
    y: 2,
    z: 2
}]

let lettrenbis = [nbisext, nbisint];

let ibisint = [
    {
        x: 2.2,
        y: 2,
        z: 2
    },

    {
        x: 2.2,
        y: 1.5,
        z: 2
    },

    {
        x: 2.2,
        y: 0.5,
        z: 2
    }
    , {
        x: 2.2,
        y: 0,
        z: 2
    },
    {
        x: 2.4,
        y: 0,
        z: 2
    },
    {
        x: 2.6,
        y: 0,
        z: 2
    },
    {
        x: 2.6,
        y: 0.5,
        z: 2
    },

    {
        x: 2.6,
        y: 1.5,
        z: 2
    }
    , {
        x: 2.6,
        y: 2,
        z: 2
    },

    {
        x: 2.4,
        y: 2,
        z: 2
    },
    {
        x: 2.2,
        y: 2,
        z: 2
    }
]

let ibisext = [
    {
        x: 2.2,
        y: 2.6,
        z: 2
    }
    , {
        x: 2.2,
        y: 2.2,
        z: 2
    }, {
        x: 2.4,
        y: 2.2,
        z: 2
    }, {
        x: 2.6,
        y: 2.2,
        z: 2
    }
    , {
        x: 2.6,
        y: 2.6,
        z: 2
    }, {
        x: 2.4,
        y: 2.6,
        z: 2
    }, {
        x: 2.2,
        y: 2.6,
        z: 2
    }
]

let lettreibis = [ibisext, ibisint]

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


// Traçage de la lettre A

lettrea.forEach(element => {
    /*const options = {
        depth : 1.5,
        bevelEnabled : false
    }
    const shape = new THREE.Shape();*/
    element.forEach(point => {
        const geometry = new THREE.BufferGeometry().setFromPoints(element);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff});
        
        // Sphères représentants les points de contrôle
        const geometrySphere = new THREE.SphereGeometry(0.05, 32, 16);          
        const sphere = new THREE.Mesh(geometrySphere, material);
        sphere.position.x = point.x
        sphere.position.y = point.y

        let displayPoly = new THREE.Line(geometry, materialPoly);

        // On ajoute ces sphères à la scène
        scene.add(sphere);
        scene.add(displayPoly);
    });
    //Bernstein(element);
    displayCurve(Casteljau(element))
/*
    let allPoints = Casteljau(element);
    
    shape.moveTo(allPoints[0])
    allPoints.forEach(point => {
        shape.lineTo(point.x,point.y);

    })

    const geometry = new THREE.ExtrudeGeometry(shape, options);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    //console.log(allPoints);
   */ 
});



lettreabis.forEach(element => {
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


// Traçage de la lettre J

lettrej.forEach(element => {
    element.forEach(point => {
        const geometry = new THREE.BufferGeometry().setFromPoints(element);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

        // Sphères représentants les points de contrôle
        const geometrySphere = new THREE.SphereGeometry(0.05, 32, 16);
        const sphere = new THREE.Mesh(geometrySphere, material);
        sphere.position.x = point.x
        sphere.position.y = point.y

        let displayPoly = new THREE.Line(geometry, materialPoly);

        // On ajoute ces sphères à la scène
        scene.add(sphere);
        scene.add(displayPoly);
    });
    // Bernstein(element);
    displayCurve(Casteljau(element))
});

lettrejbis.forEach(element => {
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


// Traçage de la lettre U

lettreu.forEach(element => {
    element.forEach(point => {
        const geometry = new THREE.BufferGeometry().setFromPoints(element);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

        // Sphères représentants les points de contrôle
        const geometrySphere = new THREE.SphereGeometry(0.05, 32, 16);
        const sphere = new THREE.Mesh(geometrySphere, material);
        sphere.position.x = point.x
        sphere.position.y = point.y

        let displayPoly = new THREE.Line(geometry, materialPoly);

        // On ajoute ces sphères à la scène
        scene.add(sphere);
        scene.add(displayPoly);
    });
    // Bernstein(element);
    displayCurve(Casteljau(element))
});

lettreubis.forEach(element => {
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

// Traçage de la lettre N

lettren.forEach(element => {
    element.forEach(point => {
        const geometry = new THREE.BufferGeometry().setFromPoints(element);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

        // Sphères représentants les points de contrôle
        const geometrySphere = new THREE.SphereGeometry(0.05, 32, 16);
        const sphere = new THREE.Mesh(geometrySphere, material);
        sphere.position.x = point.x
        sphere.position.y = point.y

        let displayPoly = new THREE.Line(geometry, materialPoly);

        // On ajoute ces sphères à la scène
        scene.add(sphere);
        scene.add(displayPoly);
    });
    // Bernstein(element);
    displayCurve(Casteljau(element))
});


lettrenbis.forEach(element => {
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

    //const extrudeGeometry = new THREE.ExtrudeGeometry((Casteljau(element)), {
    //    amount : 1,
    //    bevelEnabled : false,
    //    depth: 1.5,
    //})
});

// Traçage de la lettre I

lettrei.forEach(element => {
    element.forEach(point => {
        const geometry = new THREE.BufferGeometry().setFromPoints(element);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

        // Sphères représentants les points de contrôle
        const geometrySphere = new THREE.SphereGeometry(0.05, 32, 16);
        const sphere = new THREE.Mesh(geometrySphere, material);
        sphere.position.x = point.x
        sphere.position.y = point.y

        let displayPoly = new THREE.Line(geometry, materialPoly);

        // On ajoute ces sphères à la scène
        scene.add(sphere);
        scene.add(displayPoly);
    });
    // Bernstein(element);
    displayCurve(Casteljau(element))
});

lettreibis.forEach(element => {
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


// Ajout d'un point

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

//const shape = new THREE.Shape();



/*let extrudeGeometry = new THREE.extrudeGeometry(shape, {
    amount : 1,
    bevelEnabled : false,
})*/


var target = new THREE.Vector3( 2.4, 1, 1 );

// Animation du logo (rotation)
function animate() {
    requestAnimationFrame(animate);
  
    camera.position.x = Math.sin( Date.now() * 0.001 ) * 5;
    camera.position.z = Math.cos( Date.now() * 0.001 ) * 5;
    camera.lookAt(target);
  
    renderer.render(scene, camera);
  }
  
  animate();




/**
 * Genererate Curve with an array of points
 * @param {Array} tab 
 */
function displayCurve(tab) {

    const geometry = new THREE.BufferGeometry().setFromPoints(tab);
    const graph = new THREE.Line(geometry, materialCasteljau);
    graph.name = "curve";
    scene.add(graph);
    renderer.render(scene,  camera);

}
