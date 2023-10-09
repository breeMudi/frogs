import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const canvas = document.querySelector('.webgl')

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.01, 100)
camera.position.set (0, 0, 10)
scene.add(camera)
const renderer = new THREE.WebGLRenderer()
    
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.appendChild(renderer.domElement)
// renderer.shadowMap.enabled = true
// renderer.gammaOutput = true
// renderer.render(scene, camera)


// scene.background = new THREE.Color(0xffffff)

const loader = new GLTFLoader()
let obj;
loader.load('models/my_frog.glb', function(gltf){
    console.log(gltf)
    obj = gltf.scene
    // root.scale.set(1, 1, 1)
    scene.add(gltf.scene)
}, function(xhr){
    console.log('loading success')
}, function(error){
    console.log('an error occured')
}
)


const light = new THREE.DirectionalLight(0xFFA500, 1)
light.position.set(0, 0, 10)
scene.add(light)

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()