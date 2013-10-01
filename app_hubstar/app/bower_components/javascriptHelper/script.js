// variables
var canvas, ctx;
var image;
var iMouseX, iMouseY = 1;
var theSelection;
var xRation;
var yRation;
var defaultWidth;
var defaultHeight;

// define Selection constructor
function Selection(x, y, w, h) {
    this.x = x; // initial positions
    this.y = y;
    this.w = w; // and size
    this.h = h;
    this.px = x; // extra variables to dragging calculations
    this.py = y;

    this.csize = 3; // resize cubes size
    this.csizeh = 5; // resize cubes size (on hover)

    this.bHow = [false, false, false, false]; // hover statuses
    this.iCSize = [this.csize, this.csize, this.csize, this.csize]; // resize cubes sizes
    this.bDrag = [false, false, false, false]; // drag statuses
    this.bDragAll = false; // drag whole selection
}

// define Selection draw method
Selection.prototype.draw = function() {

    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.strokeRect(this.x, this.y, this.w, this.h);

    // draw part of original image

    if (this.w > 0 && this.h > 0) {
      ctx.drawImage(image, this.x * xRation, this.y * yRation, this.w * xRation, this.h * yRation, this.x, this.y, this.w, this.h);
        //ctx.drawImage(image, 2,2, 2, 2, 20, 20, 20, 20);
    }

    // draw resize cubes
    ctx.fillStyle = '#fff';
    ctx.fillRect(this.x - this.iCSize[0], this.y - this.iCSize[0], this.iCSize[0] * 2, this.iCSize[0] * 2);
    ctx.fillRect(this.x + this.w - this.iCSize[1], this.y - this.iCSize[1], this.iCSize[1] * 2, this.iCSize[1] * 2);
    ctx.fillRect(this.x + this.w - this.iCSize[2], this.y + this.h - this.iCSize[2], this.iCSize[2] * 2, this.iCSize[2] * 2);
    ctx.fillRect(this.x - this.iCSize[3], this.y + this.h - this.iCSize[3], this.iCSize[3] * 2, this.iCSize[3] * 2);
};

function drawScene() { // main drawScene function


    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // clear canvas

    // draw source image
    ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.height);

    // and make it darker
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // draw selection
    theSelection.draw();
}

function crop(imageSrc) {
    // loading source image
    image = new Image();
    image.src = imageSrc;

    defaultWidth = document.getElementById('crop-container').offsetWidth;
    defaultHeight = document.getElementById('crop-container').offsetHeight;

    image.onload = function() {
             xRation =2;
              yRation =2;
            ctx.canvas.width = image.width/xRation;
            ctx.canvas.height = image.height/xRation;
 
        if (ctx.canvas.width > defaultWidth)
        {
             ctx.canvas.width = defaultWidth;
            xRation = image.width / defaultWidth;
           
            
            console.log(xRation);
        }

      
        if (ctx.canvas.height > defaultHeight)
        {
            ctx.canvas.height = defaultHeight;
            yRation = image.height / defaultHeight;
           
            console.log(yRation);

        }
    };

    // creating canvas and context objects
    canvas = document.getElementById('panel');

    ctx = canvas.getContext('2d');

    // create initial selection
    if(document.getElementById('crop-container').offsetWidth===300){
    theSelection = new Selection(20, 20, 200, 200);
    }
     if(document.getElementById('crop-container').offsetWidth===600){
         
            theSelection = new Selection(10,10, 490,300);
        
    
    }

    $('#panel').mousemove(function(e) { // binding mouse move event
        var canvasOffset = $(canvas).offset();
        iMouseX = Math.floor(e.pageX - canvasOffset.left);
        iMouseY = Math.floor(e.pageY - canvasOffset.top);

        // in case of drag of whole selector
        if (theSelection.bDragAll) {

            theSelection.x = iMouseX - theSelection.px;
            theSelection.y = iMouseY - theSelection.py;
//            var theSelectionX = defaultWidth - iMouseX + theSelection.px -200;
//            var theSelectionY = defaultHeight - iMouseY + theSelection.py - 200;

            if (theSelection.x < 0 && theSelection.y < 0) {
                theSelection.x = 0;
                theSelection.y = 0;
            } else if (theSelection.x < 0 && theSelection.y > 0)
            {
                theSelection.x = 0;
            }
            else if (theSelection.x > 0 && theSelection.y < 0)
            {
                theSelection.y = 0;
            }

//
//            if (theSelectionX < 0 && theSelectionY < 0)
//            {
//                theSelectionX = 0;
//                //
//                theSelectionY = 0;
//
//            }
//            else if (theSelectionX < 0 && theSelectionY > 0)
//            {
//
//                theSelectionX = 0;
//                //   console.log("0    " + theSelectionX);
//            }
//            else if (theSelectionX > 0 && theSelectionY < 0)
//            {
//                theSelectionY = 0;
//                //  console.log("0   " + theSelectionY);
//
//            }

        }
      

        for (i = 0; i < 4; i++) {
            theSelection.bHow[i] = false;
            theSelection.iCSize[i] = theSelection.csize;
        }

        // hovering over resize cubes
        if (iMouseX > theSelection.x - theSelection.csizeh && iMouseX < theSelection.x + theSelection.csizeh &&
                iMouseY > theSelection.y - theSelection.csizeh && iMouseY < theSelection.y + theSelection.csizeh) {

            theSelection.bHow[0] = false;
            theSelection.iCSize[0] = theSelection.csizeh;
        }
        if (iMouseX > theSelection.x + theSelection.w - theSelection.csizeh && iMouseX < theSelection.x + theSelection.w + theSelection.csizeh &&
                iMouseY > theSelection.y - theSelection.csizeh && iMouseY < theSelection.y + theSelection.csizeh) {

            theSelection.bHow[1] = false;
            theSelection.iCSize[1] = theSelection.csizeh;
        }
        if (iMouseX > theSelection.x + theSelection.w - theSelection.csizeh && iMouseX < theSelection.x + theSelection.w + theSelection.csizeh &&
                iMouseY > theSelection.y + theSelection.h - theSelection.csizeh && iMouseY < theSelection.y + theSelection.h + theSelection.csizeh) {

            theSelection.bHow[2] = false;
            theSelection.iCSize[2] = theSelection.csizeh;
        }
        if (iMouseX > theSelection.x - theSelection.csizeh && iMouseX < theSelection.x + theSelection.csizeh &&
                iMouseY > theSelection.y + theSelection.h - theSelection.csizeh && iMouseY < theSelection.y + theSelection.h + theSelection.csizeh) {

            theSelection.bHow[3] = false;
            theSelection.iCSize[3] = theSelection.csizeh;
        }


        // in case of dragging of resize cubes
        var iFW, iFH;
        if (theSelection.bDrag[0]) {
            var iFX = iMouseX - theSelection.px;
            var iFY = iMouseY - theSelection.py;
            iFW = theSelection.w + theSelection.x - iFX;
            iFH = theSelection.h + theSelection.y - iFY;
        }
        if (theSelection.bDrag[1]) {
            var iFX = theSelection.x;
            var iFY = iMouseY - theSelection.py;
            iFW = iMouseX - theSelection.px - iFX;
            iFH = theSelection.h + theSelection.y - iFY;
        }
        if (theSelection.bDrag[2]) {
            var iFX = theSelection.x;
            var iFY = theSelection.y;
            iFW = iMouseX - theSelection.px - iFX;
            iFH = iMouseY - theSelection.py - iFY;
        }
        if (theSelection.bDrag[3]) {
            var iFX = iMouseX - theSelection.px;
            var iFY = theSelection.y;
            iFW = theSelection.w + theSelection.x - iFX;
            iFH = iMouseY - theSelection.py - iFY;
        }

        if (iFW > theSelection.csizeh * xRation && iFH > theSelection.csizeh * yRation) {
            theSelection.w = iFW;
            theSelection.h = iFH;

            theSelection.x = iFX;
            theSelection.y = iFY;
        }

        drawScene();
    });

    $('#panel').mousedown(function(e) { // binding mousedown event
        var canvasOffset = $(canvas).offset();
        iMouseX = Math.floor(e.pageX - canvasOffset.left);
        iMouseY = Math.floor(e.pageY - canvasOffset.top);


        theSelection.px = iMouseX - theSelection.x;
        theSelection.py = iMouseY - theSelection.y;

        if (theSelection.bHow[0]) {
            theSelection.px = iMouseX - theSelection.x;
            theSelection.py = iMouseY - theSelection.y;
        }
        if (theSelection.bHow[1]) {
            theSelection.px = iMouseX - theSelection.x - theSelection.w;
            theSelection.py = iMouseY - theSelection.y;
        }
        if (theSelection.bHow[2]) {
            theSelection.px = iMouseX - theSelection.x - theSelection.w;
            theSelection.py = iMouseY - theSelection.y - theSelection.h;
        }
        if (theSelection.bHow[3]) {
            theSelection.px = iMouseX - theSelection.x;
            theSelection.py = iMouseY - theSelection.y - theSelection.h;
        }


        if (iMouseX > theSelection.x + theSelection.csizeh && iMouseX < theSelection.x + theSelection.w - theSelection.csizeh &&
                iMouseY > theSelection.y + theSelection.csizeh && iMouseY < theSelection.y + theSelection.h - theSelection.csizeh) {

            theSelection.bDragAll = true;
        }

        for (i = 0; i < 4; i++) {
            if (theSelection.bHow[i]) {
                theSelection.bDrag[i] = true;
            }
        }
    });

    $('#panel').mouseup(function(e) { // binding mouseup event
        theSelection.bDragAll = false;

        for (i = 0; i < 4; i++) {
            theSelection.bDrag[i] = false;
        }
        theSelection.px = 0;
        theSelection.py = 0;
    });

    drawScene();
}


function getResults() {
    var temp_ctx, temp_canvas;
    temp_canvas = document.createElement('canvas');
    temp_ctx = temp_canvas.getContext('2d');
    temp_canvas.width = theSelection.w;
    temp_canvas.height = theSelection.h;
    temp_ctx.drawImage(image, theSelection.x * xRation, theSelection.y * yRation, theSelection.w * xRation, theSelection.h * yRation, 0, 0, theSelection.w, theSelection.h);
   console.log(xRation,yRation);
    var vData = temp_canvas.toDataURL();
    //$('#crop_result').attr('src', vData);
    //  $('#results h2').text('Well done, we have prepared our cropped image, now you can save it if you wish');

    return vData;
}