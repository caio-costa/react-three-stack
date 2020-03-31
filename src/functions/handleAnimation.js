import * as THREE from "three";

function handleAnimation(scene, camera, renderer, objects) {

    requestAnimationFrame(() => handleAnimation(scene, camera, renderer));

    let cube = scene.getObjectByName("cube");
    cube.rotation.x += 0.01;
    cube.rotation.z += 0.01;

    renderer.render(scene, camera);

} export default handleAnimation;