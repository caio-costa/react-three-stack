import React, { Component } from "react";
import ReactDOM from "react-dom";

//Functions
import webGLSetup       from    "../../functions/webGLSetup";
import handleAnimation  from    "../../functions/handleAnimation";
import handleResize     from    "../../functions/handleResize";

import * as THREE from "three";

class WebGL extends Component {
  componentDidMount() {
    // === THREE.JS CODE START ===

    var webgl = webGLSetup();

    this.mount.appendChild(webgl.renderer.domElement);
    handleResize(webgl.renderer, webgl.camera);

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshStandardMaterial( { color: 0xFF8C00 } );
    var cube = new THREE.Mesh( geometry, material );
    cube.name = "cube";
    
    webgl.scene.add( cube );
    webgl.camera.position.z = 5;

    requestAnimationFrame(() => handleAnimation(webgl.scene, webgl.camera, webgl.renderer))
    // === THREE.JS EXAMPLE CODE END ===
  }
  
  render() {
    return (
      <div id="main" ref={ref => (this.mount = ref)}/>
    )
  }
}

export default WebGL;