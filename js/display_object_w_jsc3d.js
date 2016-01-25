var xRotInitial = 270;
var yRotInitial = 0;
var zRotInitial = 0;

var xRotAdjust = 0;
var yRotAdjust = 1;
var zRotAdjust = 0;

var rotationLag = 7; // higher numbers rotate object slower.


show_viewer(xRotInitial, yRotInitial, zRotInitial);

function show_viewer(xRotIn, yRotIn, zRotIn) {

    var cvs = document.getElementById('object_canvas');
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;

    var viewer = new JSC3D.Viewer(cvs);

    viewer.setParameter('SceneUrl', 'object/ewha_logo.obj');
    viewer.setParameter('InitRotationX', xRotIn);
    viewer.setParameter('InitRotationY', yRotIn);
    viewer.setParameter('InitRotationZ', zRotIn);
    viewer.setParameter('ModelColor', '#009900');
    viewer.setParameter('BackgroundColor2', '#FFFFFF');
    viewer.setParameter('BackgroundColor1', '#FFFFFF');
    viewer.setParameter('RenderMode', 'texturesmooth');

    viewer.init();
    setInterval(function() {
        viewer.rotate(xRotAdjust, yRotAdjust, zRotAdjust);
        viewer.update();
    }, rotationLag);
}