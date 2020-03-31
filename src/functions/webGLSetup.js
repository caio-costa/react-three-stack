import * as THREE from "three";
import { WebGLBufferRenderer } from "three";

function webGLSetup() {

    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    
    renderer.setClearColor(0x004EFF);

    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

    var webgl = {
        scene, camera, renderer
    }
    return(webgl);

} export default webGLSetup;