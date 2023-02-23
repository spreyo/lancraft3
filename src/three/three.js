import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth /
    window.innerHeight, 0.1, 1000);

camera.position.setZ(50);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),

});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setClearColor(0x000604, 1);

const light = new THREE.AmbientLight(0xffffff);
light.intensity = 1;
light.position.set(0, 5, 0);
scene.add(light)





const objLoader = new OBJLoader();

const gltfLoader = new GLTFLoader();

function addStar() {

    const starGeo = new THREE.SphereGeometry(2, 10, 16);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xb00510 });
    const star = new THREE.Mesh(starGeo, starMaterial);
    const [x, z] = Array(2).fill().map(() => THREE.MathUtils.randFloatSpread(200));
    const y = THREE.MathUtils.randFloat(0, 200);
    // const x = THREE.MathUtils.randFloat(50, 100);
    // const y = THREE.MathUtils.randFloat(0, 100)
    // const z = THREE.MathUtils.randFloat(0, 100)
    star.position.set(x, y, z);

    scene.add(star);

}

Array(200).fill().forEach(addStar);

function lerp(x, y, a) {
    return (1 - a) * x + a * y
}

function scalePercent(start, end) {
    return (scrollPercent - start) / (end - start)
}

const animationScripts = [];



animationScripts.push({
    start: 0, end: 100,
    func: () => {
        camera.position.y = -lerp(0, 100, scalePercent(50, 100))
    }
})


function playScrollAnimations() {
    animationScripts.forEach(function (a) {
        if (scrollPercent >= a.start && scrollPercent < a.end) {
            a.func();
        }
    });
}
let scrollPercent = 0;

document.body.onscroll = function () {
    //calculate the current scroll progress as a percentage
    scrollPercent =
        ((document.documentElement.scrollTop || document.body.scrollTop) /
            ((document.documentElement.scrollHeight ||
                document.body.scrollHeight) -
                document.documentElement.clientHeight)) *
        100;
};

window.addEventListener('load', function () {
    const root = document.querySelector("#root");
    const bg = document.querySelector("#bg");
    const loading = document.querySelector("#loading");
    root.style.display = "block";
    bg.style.display = "block";
    loading.style.display = "none";

})


function animate() {
    requestAnimationFrame(animate);
    // moveCamera();
    playScrollAnimations();






    renderer.render(scene, camera);
}
animate();

