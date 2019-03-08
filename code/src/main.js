//the OpenGL context
var gl = null,
    program = null;

/**
 * initializes OpenGL context, compile shader, and load buffers
 */
function init(resources) {
  //create a GL context
  gl = createContext(1024 /*width*/, 1024 /*height*/);

  //compile and link shader program
  program = createProgram(gl, resources.vs, resources.fs);
}

/**
 * render one frame
 */
function render() {
  // check for resize of browser window and adjust canvas sizes
  checkForWindowResize(gl);


  gl.clearColor(0.9, 0.9, 0.9, 1.0);
  //clear the buffer
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  //TODO

  //request another call as soon as possible
  requestAnimationFrame(render);
}

//load the shader resources using a utility function
loadResources({
  vs: './src/shader/empty.vs.glsl',
  fs: './src/shader/empty.fs.glsl'
}).then(function (resources /*an object containing our keys with the loaded resources*/) {
  init(resources);

  //render one frame
  render();
});
