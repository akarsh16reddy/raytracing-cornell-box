/* classes */

class Color {
    constructor(r,g,b,a) {
        // try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw new Error("color component not a number");
            else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                throw new Error("color component less than 0");
            else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                throw new Error("color component bigger than 255");
            else {
                this[0] = r; this[1] = g; this[2] = b; this[3] = a; 
            }
        // } // end try
        
        // catch (e) {
            // console.log(e);
        // }
    } // end Color constructor

        // Color change method
    change(r,g,b,a) {
        // try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw new Error("color component not a number");
            else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                throw new Error("color component less than 0");
            else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                throw new Error("color component bigger than 255");
            else {
                this[0] = r; this[1] = g; this[2] = b; this[3] = a; 
            }
        // } // end try
        
        // catch (e) {
            // console.log(e);
        // }
    } // end Color change method

    addRGB(color) {
            let [r,g,b] = [color[0], color[1], color[2]];
        // try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number"))
                throw new Error("color component not a number");
            else if ((r<0) || (g<0) || (b<0)) 
                throw new Error("color component less than 0");
            else if ((r>255) || (g>255) || (b>255)) {
                throw new Error("color component bigger than 255");
            }
            else {
                this[0] += r; this[1] += g; this[2] += b; 
                this[0] < 255 ? this[0] : 255;
                this[1] < 255 ? this[1] : 255;
                this[2] < 255 ? this[2] : 255;
            }
            return this;
        // } // end try
        
        // catch (e) {
            // console.log(e);
        // }
    } // end Color change method

    scale(c) {
        if(typeof(c) !== "number")
            throw new Error("color scaler not a constant")
        else {
            this[0] = this[0] * c;
            this[1] = this[1] * c;
            this[2] = this[2] * c
        }
        return this;
    }
} // end color class

class Vector { 
    constructor(x,y,z) {
        this.set(x,y,z);
    } // end constructor
    
    // sets the components of a vector
    set(x,y,z) {
        // try {
            if ((typeof(x) !== "number") || (typeof(y) !== "number") || (typeof(z) !== "number"))
                throw new Error("vector component not a number");
            else
                this.x = x; this.y = y; this.z = z; 
        // } // end try
        
        // catch(e) {
            // console.log(e.stack);
        // }
    } // end vector set
    
    // copy the passed vector into this one
    copy(v) {
        // try {
            if (!(v instanceof Vector))
                throw new Error("Vector.copy: non-vector parameter");
            else
                this.x = v.x; this.y = v.y; this.z = v.z;
        // } // end try
        
        // catch(e) {
            // console.log(e.stack);
        // }
    }
    
    toConsole(prefix) {
        console.log(prefix+"["+this.x+","+this.y+","+this.z+"]");
    } // end to console
    
    // static dot method
    static dot(v1,v2) {
        // try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw new Error("Vector.dot: non-vector parameter");
            else
                return(v1.x*v2.x + v1.y*v2.y + v1.z*v2.z);
        // } // end try
        
        // catch(e) {
        //     console.log(e.stack);
        //     return(NaN);
        // }
    } // end dot static method
    
    static cross(v1,v2) {
        //  try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw new Error("Vector.dot: non-vector parameter");
            else
                return( new Vector(v1.y*v2.z - v1.z*v2.y, 
                        v1.z*v2.x - v1.x*v2.z ,
                        v1.x*v2.y - v1.y*v2.x));
        // } // end try
        
        // catch(e) {
        //     console.log(e.stack);
        //     return(NaN);
        // }
    }
    
    // static add method
    static add(v1,v2) {
        // try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw new Error("Vector.add: non-vector parameter");
            else
                return(new Vector(v1.x+v2.x,v1.y+v2.y,v1.z+v2.z));
        // } // end try
        
        // catch(e) {
        //     console.log(e.stack);
        //     return(new Vector(NaN,NaN,NaN));
        // }
    } // end add static method

    // static subtract method, v1-v2
    static subtract(v1,v2) {
        // try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw new Error("Vector.subtract: non-vector parameter");
            else {
                var v = new Vector(v1.x-v2.x,v1.y-v2.y,v1.z-v2.z);
                //v.toConsole("Vector.subtract: ");
                return(v);
            }
        // } // end try
        
        // catch(e) {
        //     console.log(e.stack);
        //     return(new Vector(NaN,NaN,NaN));
        // }
    } // end subtract static method

    // static divide method, v1.x/v2.x etc
    static divide(v1,v2) {
        // try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw new Error("Vector.divide: non-vector parameter");
            else {
                var v = new Vector(v1.x/v2.x,v1.y/v2.y,v1.z/v2.z);
                //v.toConsole("Vector.divide: ");
                return(v);
            }
        // } // end try
        
        // catch(e) {
        //     console.log(e.stack);
        //     return(new Vector(NaN,NaN,NaN));
        // }
    } // end divide static method

    // static divide method, v1.x/v2.x etc
    static multiply(v1,v2) {
        // try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw new Error("Vector.multiply: non-vector parameter");
            else {
                var v = new Vector(v1.x*v2.x,v1.y*v2.y,v1.z*v2.z);
                //v.toConsole("Vector.divide: ");
                return(v);
            }
        // } // end try
        
        // catch(e) {
        //     console.log(e.stack);
        //     return(new Vector(NaN,NaN,NaN));
        // }
    } // end multiply static method

    // static scale method
    static scale(c,v) {
        // try {
            if (!(typeof(c) === "number") || !(v instanceof Vector))
                throw new Error("Vector.scale: malformed parameter");
            else
                return(new Vector(c*v.x,c*v.y,c*v.z));
        // } // end try
        
        // catch(e) {
        //     console.log(e.stack);
        //     return(new Vector(NaN,NaN,NaN));
        // }
    } // end scale static method
    
    // static normalize method
    static normalize(v) {
        // try {
            if (!(v instanceof Vector))
                throw new Error("Vector.normalize: parameter not a vector");
            else {
                var lenDenom = 1/Math.sqrt(Vector.dot(v,v));
                return(Vector.scale(lenDenom,v));
            }
        // } // end try
        
        // catch(e) {
        //     console.log(e.stack);
        //     return(new Vector(NaN,NaN,NaN));
        // }
    } // end scale static method
    
} // end Vector class

/* utility function */
const COLOR_BLACK = new Color(0,0,0,255);
const NUMBER_HEMISPHERE_SAMPLES = 1;
const NUMBER_PIXEL_SAMPLES = 100;

// generate n integers in random order
// uses Fisher-Yates shuffle
function randPermutation(n) {
    var array = new Array(n);
    var bagSize = n, temp, randChoice;
    
    // fill the array 
    for (var i=0; i<n; i++)
        array[i] = i; 

    // while the bag isn't empty, pick from it
    while (bagSize !== 0) {
        randChoice = Math.floor(Math.random() * bagSize); // pick from bag
        bagSize--; // bag is less one
        temp = array[bagSize]; // remember what was at new bag slot
        array[bagSize] = array[randChoice]; // move old pick to new slot
        array[randChoice] = temp; // copy old element to old slot
    } // end while

    // for (i=0; i<n; i++)
    //    console.log(array[i]);

    return(array);
}

// get the JSON file from the passed URL
function getJSONFile(url,descr) {
    try {
        if ((typeof(url) !== "string") || (typeof(descr) !== "string"))
            throw "getJSONFile: parameter not a string";
        else {
            var httpReq = new XMLHttpRequest(); // a new http request
            httpReq.open("GET",url,false); // init the request
            httpReq.send(null); // send the request
            var startTime = Date.now();
            while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
                if ((Date.now()-startTime) > 3000)
                    break;
            } // until its loaded or we time out after three seconds
            if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE))
                throw "Unable to open "+descr+" file!";
            else
                return JSON.parse(httpReq.response); 
        } // end if good params
    } // end try    
    
    catch(e) {
        console.log(e);
        return(String.null);
    }
} // end get input json file

// Solve quadratic. Return empty array if no solutions, 
// one t value if one solution, two if two solutions.
function solveQuad(a,b,c) {
    var discr = b*b - 4*a*c; 
    // console.log("a:"+a+" b:"+b+" c:"+c);

    if (discr < 0) { // no solutions
        // console.log("no roots!");
        return([]); 
    } else if (discr == 0) { // one solution
        // console.log("root: "+(-b/(2*a)));
        return([-b/(2*a)]);
    } else { // two solutions
        var denom = 0.5/a;
        var term1 = -b;
        var term2 = Math.sqrt(discr)
        var tp = denom * (term1 + term2);
        var tm = denom * (term1 - term2);
        // console.log("root1:"+tp+" root2:"+tm);
        if (tm < tp)
            return([tm,tp]);
        else
            return([tp,tm]);
    } 
} // end solveQuad

// // get the input ellipsoids from the standard class URL
// function getInputEllipsoids() {
//     const INPUT_ELLIPSOIDS_URL = 
//           "https://ncsucg4games.github.io/prog1/spheres.json";
//         //"https://ncsucgclass.github.io/prog1/ellipsoids.json";
        
//     // load the ellipsoids file
//     var httpReq = new XMLHttpRequest(); // a new http request
//     httpReq.open("GET",INPUT_ELLIPSOIDS_URL,false); // init the request
//     httpReq.send(null); // send the request
//     var startTime = Date.now();
//     while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
//         if ((Date.now()-startTime) > 3000)
//             break;
//     } // until its loaded or we time out after three seconds
//     if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE)) {
//         console.log*("Unable to open input ellipses file!");
//         return String.null;
//     } else
//         return JSON.parse(httpReq.response); 
// } // end get input ellipsoids

// ray ellipsoid intersection
// if no intersect, return NaN
// if intersect, return xyz vector and t value
// intersects in front of clipVal don't count
function rayEllipsoidIntersect(ray,ellipsoid,clipVal) {
    // try {
        const defaultReturn = {"exists": false, "xyz": NaN, "t": NaN};
        if (!(ray instanceof Array) || !(ellipsoid instanceof Object))
            return defaultReturn;
        else if (ray.length != 2)
            return defaultReturn;
        else { // valid params
            var A = new Vector(ellipsoid.a,ellipsoid.b,ellipsoid.c); // A as a vector
            var dDivA = Vector.divide(ray[1],A); // D/A
            var quadA = Vector.dot(dDivA,dDivA); // dot(D/A,D/A)
            var EmCdivA = Vector.divide(Vector.subtract(ray[0],new Vector(ellipsoid.x,ellipsoid.y,ellipsoid.z)),A); // (E-C)/A
            var quadB = 2 * Vector.dot(dDivA,EmCdivA); // 2 * dot(D/A,(E-C)/A)
            var quadC = Vector.dot(EmCdivA,EmCdivA) - 1; // dot((E-C)/A,(E-C)/A) - 1
            // if (clipVal == 0) {
            //     ray[0].toConsole("ray.orig: ");
            //     ray[1].toConsole("ray.dir: ");
            //     console.log("a:"+a+" b:"+b+" c:"+c);
            // } // end debug case
        
            var qsolve = solveQuad(quadA,quadB,quadC);
            if (qsolve.length == 0) 
                return defaultReturn;
            else if (qsolve.length == 1) { 
                if (qsolve[0] < clipVal)
                    return defaultReturn;
                else {
                    var isect = Vector.add(ray[0],Vector.scale(qsolve[0],ray[1]));
                    //console.log("t: "+qsolve[0]);
                    //isect.toConsole("intersection: ");
                    return({"exists": true, "xyz": isect,"t": qsolve[0]});  
                } // one unclipped intersection
            } else if (qsolve[0] < clipVal) {
                if (qsolve[1] < clipVal)
                    return defaultReturn;
                else { 
                    var isect = Vector.add(ray[0],Vector.scale(qsolve[1],ray[1]));
                    //console.log("t2: "+qsolve[1]);
                    //isect.toConsole("intersection: ");
                    return({"exists": true, "xyz": isect,"t": qsolve[1]});  
                } // one intersect too close, one okay
            } else {
                var isect = Vector.add(ray[0],Vector.scale(qsolve[0],ray[1]));
                //console.log("t1: "+qsolve[0]);
                //isect.toConsole("intersection: ");
                return({"exists": true, "xyz": isect,"t": qsolve[0]});  
            } // both not too close
        } // end if valid params
    // } // end try

    // catch(e) {
    //     //console.log(e);
    //     return({"exists": false, "xyz": NaN, "t": NaN});
    // }
} // end raySphereIntersect

function side(n, i, a, b) {
    var f = Vector.subtract(i, a);
    var g = Vector.subtract(b, a);
    return Math.sign(Vector.dot(n, Vector.cross(f, g)));
}

function IsPointInsideTriangle(i, a, b, c, n)  {
    // try {
        if(!(i instanceof Vector) || !(a instanceof Vector) || !(b instanceof Vector) || !(c instanceof Vector))
            throw "Need vector inputs";
        else {
            var s1 = side(n, i, a, b);
            var s2 = side(n, i, b, c);
            var s3 = side(n, i, c, a);
            if (s1 == s2 && s2 == s3)
                return true;
            else
                return false;
        }
    // }
    // catch(e) {
    //     console.log(e);
    //     return false;
    // }
}

function computeTriangleNormal(vertA, vertB, vertC) {
    return Vector.cross(Vector.subtract(vertB, vertA), Vector.subtract(vertC, vertA));
}

function rayTriangleIntersect(ray,triangle,clipVal) {
    const defaultReturn = {"exists": false, "xyz": NaN, "t": NaN};
    // try {
        // console.log("RayTriangleIntersect");
        if (!(ray instanceof Array) || !(triangle instanceof Object))
            return defaultReturn;
        else if (ray.length != 2)
            return defaultReturn;
        else { // valid params
            var vertA = new Vector(triangle[0][0], triangle[0][1], triangle[0][2]); 
            var vertB = new Vector(triangle[1][0], triangle[1][1], triangle[1][2]); 
            var vertC = new Vector(triangle[2][0], triangle[2][1], triangle[2][2]);     
            var triNormal = computeTriangleNormal(vertA, vertB, vertC);
            // console.log(triNormal);
            var d = Vector.dot(triNormal, vertA); //console.log("d: " + d);
            var n_dot_eye = Vector.dot(triNormal, ray[0]); //console.log("n_dot_eye: " + n_dot_eye);
            var n_dot_dir = Vector.dot(triNormal, ray[1]); //console.log("n_dot_dir: " + n_dot_dir);
            if(n_dot_dir == 0) {
                return defaultReturn;
            }
            else {
               var t = (d - n_dot_eye) / n_dot_dir;  //console.log("t: " + t);
               if(t < 0) {
                    //console.log(e);
                    return({"exists": false, "xyz": NaN, "t": NaN});
                }
               var isect = Vector.add(ray[0], Vector.scale(t, ray[1])); //console.log(isect);
               var exitsInside = IsPointInsideTriangle(isect, vertA, vertB, vertC, triNormal);
               return({"exists": exitsInside, "xyz": isect, "t": t});
            }     
        } // end if valid params
    // } // end try

    // catch(e) {
    //     //console.log(e);
    //     return({"exists": false, "xyz": NaN, "t": NaN});
    // }
}

// draw a pixel at x,y using color
function drawPixel(imagedata,x,y,color) {
    try {
        if ((typeof(x) !== "number") || (typeof(y) !== "number"))
            throw "drawpixel location not a number";
        else if ((x<0) || (y<0) || (x>=imagedata.width) || (y>=imagedata.height))
            throw "drawpixel location outside of image";
        else if (color instanceof Color) {
            var pixelindex = (y*imagedata.width + x) * 4;
            imagedata.data[pixelindex] = color[0];
            imagedata.data[pixelindex+1] = color[1];
            imagedata.data[pixelindex+2] = color[2];
            imagedata.data[pixelindex+3] = color[3];
        } else 
            throw "drawpixel color is not a Color";
    } // end try
    
    catch(e) {
        console.log(e);
    }
} // end drawPixel
    
// draw random pixels
function drawRandPixels(context) {
    var c = new Color(0,0,0,0); // the color at the pixel: black
    var w = context.canvas.width;
    var h = context.canvas.height;
    var imagedata = context.createImageData(w,h);
    const PIXEL_DENSITY = 0.01;
    var numPixels = (w*h)*PIXEL_DENSITY; 
    
    // Loop over 1% of the pixels in the image
    for (var x=0; x<numPixels; x++) {
        c.change(Math.random()*255,Math.random()*255,
            Math.random()*255,255); // rand color
        drawPixel(imagedata,
            Math.floor(Math.random()*w),
            Math.floor(Math.random()*h),
                c);
    } // end for x
    context.putImageData(imagedata, 0, 0);
} // end draw random pixels

// // put random points in the ellipsoids from the class github
// function drawRandPixelsInInputEllipsoids(context) {
//     var inputEllipsoids = getInputEllipsoids();
//     var w = context.canvas.width;
//     var h = context.canvas.height;
//     var imagedata = context.createImageData(w,h);
//     const PIXEL_DENSITY = 0.05;
//     var numCanvasPixels = (w*h)*PIXEL_DENSITY; 
    
//     if (inputEllipsoids != String.null) { 
//         var x = 0; var y = 0; // pixel coord init
//         var cx = 0; var cy = 0; // init center x and y coord
//         var ellipsoidXRadius = 0; // init ellipsoid x radius
//         var ellipsoidYRadius = 0; // init ellipsoid y radius
//         var numEllipsoidPixels = 0; // init num pixels in ellipsoid
//         var c = new Color(0,0,0,0); // init the ellipsoid color
//         var n = inputEllipsoids.length; // the number of input ellipsoids
//         //console.log("number of ellipses: " + n);

//         // Loop over the ellipsoids, draw rand pixels in each
//         for (var e=0; e<n; e++) {
//             cx = w*inputEllipsoids[e].x; // ellipsoid center x
//             cy = h*inputEllipsoids[e].y; // ellipsoid center y
//             ellipsoidXRadius = Math.round(w*inputEllipsoids[e].a); // x radius
//             ellipsoidYRadius = Math.round(h*inputEllipsoids[e].b); // y radius
//             numEllipsoidPixels = inputEllipsoids[e].a*inputEllipsoids[e].b*Math.PI; // projected ellipsoid area
//             numEllipsoidPixels *= PIXEL_DENSITY * w * h; // percentage of ellipsoid area to render to pixels
//             numEllipsoidPixels = Math.round(numEllipsoidPixels);
//             console.log("ellipsoid x radius: "+ellipsoidXRadius);
//             console.log("ellipsoid y radius: "+ellipsoidYRadius);
//             console.log("num ellipsoid pixels: "+numEllipsoidPixels);
//             c.change(
//                 inputEllipsoids[e].diffuse[0]*255,
//                 inputEllipsoids[e].diffuse[1]*255,
//                 inputEllipsoids[e].diffuse[2]*255,
//                 255); // ellipsoid diffuse color
//             for (var p=0; p<numEllipsoidPixels; p++) {
//                 do {
//                     x = Math.random()*2 - 1; // in unit square 
//                     y = Math.random()*2 - 1; // in unit square
//                 } while (Math.sqrt(x*x + y*y) > 1) // a circle is also an ellipse
//                 drawPixel(imagedata,
//                     cx+Math.round(x*ellipsoidXRadius),
//                     cy+Math.round(y*ellipsoidYRadius),c);
//                 //console.log("color: ("+c.r+","+c.g+","+c.b+")");
//                 //console.log("x: "+Math.round(w*inputEllipsoids[e].x));
//                 //console.log("y: "+Math.round(h*inputEllipsoids[e].y));
//             } // end for pixels in ellipsoid
//         } // end for ellipsoids
//         context.putImageData(imagedata, 0, 0);
//     } // end if ellipsoids found
// } // end draw rand pixels in input ellipsoids

// // draw 2d projections read from the JSON file at class github
// function drawInputEllipsoidsUsingArcs(context) {
//     var inputEllipsoids = getInputEllipsoids();
    
    
//     if (inputEllipsoids != String.null) { 
//         var c = new Color(0,0,0,0); // the color at the pixel: black
//         var w = context.canvas.width;
//         var h = context.canvas.height;
//         var n = inputEllipsoids.length; 
//         //console.log("number of ellipsoids: " + n);

//         // Loop over the ellipsoids, draw each in 2d
//         for (var e=0; e<n; e++) {
//             context.fillStyle = 
//                 "rgb(" + Math.floor(inputEllipsoids[e].diffuse[0]*255)
//                 +","+ Math.floor(inputEllipsoids[e].diffuse[1]*255)
//                 +","+ Math.floor(inputEllipsoids[e].diffuse[2]*255) +")"; // diffuse color
//             context.save(); // remember previous (non-) scale
//             context.translate(w*inputEllipsoids[e].x,h*inputEllipsoids[e].y); // translate ellipsoid to ctr
//             context.scale(1, inputEllipsoids[e].b/inputEllipsoids[e].a); // scale by ellipsoid ratio 
//             context.beginPath();
//             context.arc(0,0,Math.round(w*inputEllipsoids[e].a),0,2*Math.PI);
//             context.restore(); // undo scale before fill so stroke width unscaled
//             context.fill();
//             //console.log(context.fillStyle);
//             //console.log("x: "+Math.round(w*inputEllipsoids[e].x));
//             //console.log("y: "+Math.round(h*inputEllipsoids[e].y));
//             //console.log("a: "+Math.round(w*inputEllipsoids[e].a));
//             //console.log("b: "+Math.round(h*inputEllipsoids[e].b));
//         } // end for ellipsoids
//     } // end if ellipsoids found
// } // end draw input ellipsoids

// returns true if passed light is occluded from passed intersect/ellipsoid
// by passed array of ellipsoids
function isLightOccluded(L,isectPos,isectEllipsoid,ellipsoids) {
    var e=0; // which ellipsoid
    var lightOccluded = false; // if light is occluded
    var occluderIsect = {}; // occluder intersect details
    // console.log("testing for occlusions");
    
    // if it's a triangle
    if(isectEllipsoid === -1) isectEllipsoid = ellipsoids.length;
    
    // check each ellipsoid up to intersected ellipsoid to see if it occludes
    while ((!lightOccluded) && (e<isectEllipsoid)) { 
        occluderIsect = rayEllipsoidIntersect([isectPos,L],ellipsoids[e],0);
        if (!occluderIsect.exists) { // no intersection
            e++; // on to next ellipsoid
        } else if (occluderIsect.t > 1) { // light in front of intersection
            e++; // on to next sphere
        } else {
            lightOccluded = true;
            // console.log("occlusion found from ellipsoid "+isectEllipsoid+" to "+e);
        } // end if occlusion found
    } // while all ellipsoids up to one intersected by eye
    
    // check each ellipsoid after intersected ellipsoid to see if it occludes
    e = isectEllipsoid+1;
    while ((!lightOccluded) && (e<ellipsoids.length)) { 
        occluderIsect = rayEllipsoidIntersect([isectPos,L],ellipsoids[e],0);
        // console.log("oisect: "+occluderIsect);
        if (!occluderIsect.exists) { // no intersection
            e++; // on to next ellipsoid
        } else if (occluderIsect.t > 1) { // light in front of intersection
            e++; // on to next ellipsoid
        } else {
            lightOccluded = true;
            // console.log("occlusion found from ellipsoid "+isectEllipsoid+" to "+e);
        } // end if occlusion found
    } // while all ellipsoids after one intersected by eye
    
    return(lightOccluded);
} // end is light occluded


function uniformHemisphereSample(normal) {
    const z = Math.random();  // Uniformly sample Z
    const r = Math.sqrt(Math.max(0, 1 - z * z));
    const theta = 2 * Math.PI * Math.random();

    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);

    // Transform to world space using orthonormal basis
    const w = Vector.normalize(normal);
    const a = Math.abs(w.x) > 0.99 ? new Vector(0, 1, 0) : new Vector(1, 0, 0);
    const v = Vector.normalize(Vector.cross(a, w));
    const u = Vector.cross(w, v);

    return Vector.normalize(new Vector(
        x * u.x + y * v.x + z * w.x,
        x * u.y + y * v.y + z * w.y,
        x * u.z + y * v.z + z * w.z
    ));
}

function radiance(Lloc, normal, L, isectPos, modelType, model, isectEllipsoid, ellipsoids, triangles, depth, index) {
    const MAX_DEPTH = 5
    if(depth >= MAX_DEPTH) {
        return [0,0,0];
    }
    
    const dirIllum = dirIllumModel(normal, L, isectPos, model, isectEllipsoid, ellipsoids);
    
    if(depth > 0) {
        const continueProbability = 0.5;
        if (Math.random() > continueProbability) {
            return dirIllum;
        }
        const indirIllum = indirIllumModel(Lloc, normal, isectPos, ellipsoids, triangles, depth, modelType, model, index);
        const scalingFactor = 1/continueProbability;
        const scaledIndirIllum = [
                                    indirIllum[0] * scalingFactor,
                                    indirIllum[1] * scalingFactor,
                                    indirIllum[2] * scalingFactor
                                ];
        return [
            dirIllum[0] + scaledIndirIllum[0],
            dirIllum[1] + scaledIndirIllum[1],
            dirIllum[2] + scaledIndirIllum[2]
        ];
    } else {
        // ALWAYS SUCCEED FIRST BOUNCE
        const indirIllum = indirIllumModel(Lloc, normal, isectPos, ellipsoids, triangles, depth, modelType, model, index)
        return [
            dirIllum[0] + indirIllum[0],
            dirIllum[1] + indirIllum[1],
            dirIllum[2] + indirIllum[2]
        ];
    } 
}

function indirIllumModel(Lloc, normal, isectPos, ellipsoids, triangles, depth, modelType1, model1, index) {
    let estRadiance = [0,0,0];
    const randomDirVector = uniformHemisphereSample(normal);
    const rayEnd = Vector.add(isectPos, randomDirVector);
    const closestModel = getClosestIntersectionAgainstAllModels([isectPos, rayEnd], ellipsoids, triangles, modelType1, index);
    if(!closestModel.isect) return estRadiance;
    const lambertian = Math.max(Vector.dot(Vector.normalize(normal), Vector.normalize(randomDirVector)), 0.0);
    const model = closestModel.type == modelType.TRIANGLE ? triangles[closestModel.index[0]] : ellipsoids[closestModel.index];
    var N = computeNormal(closestModel.type, model, closestModel.index, closestModel.isect.xyz);
    const isectEllipsoid = closestModel.type == modelType.TRIANGLE ? -1 : closestModel.index;
    let newL = Vector.subtract(Lloc,closestModel.isect.xyz); // light vector unnorm'd
    newL = Vector.normalize(newL);
    const newRadiance = radiance(Lloc, N, newL, closestModel.isect.xyz, closestModel.type, model, isectEllipsoid, ellipsoids, triangles, depth + 1, closestModel.index);
    estRadiance[0] = newRadiance[0] * Math.PI * model1.diffuse[0] * lambertian 
    estRadiance[1] = newRadiance[1] * Math.PI * model1.diffuse[1] * lambertian
    estRadiance[2] = newRadiance[2] * Math.PI * model1.diffuse[2] * lambertian
    return estRadiance;
}

function dirIllumModel(normal, L, isectPos, model, isectEllipsoid, ellipsoids) {
    // Shadowed
    if(isLightOccluded(L, isectPos, isectEllipsoid, ellipsoids)) {
        return [0,0,0];
    }
    let estRadiance = [0,0,0];
    let N = normal;
    let modelDiffuse = model.diffuse;
    let lambertian = Math.max(Vector.dot(N, L), 0.0);
    estRadiance = [ lambertian * modelDiffuse[0]
                  , lambertian * modelDiffuse[1]
                  , lambertian * modelDiffuse[2]
                  ]
    return estRadiance;
}

function computeNormal(type, model, index, isectPos) {
    var N;
    if(type === modelType.ELLIPSOID) {
        const isectMCtr = Vector.subtract(isectPos,new Vector(model.x,model.y,model.z));
        var derivCoeffs = new Vector(model.a*model.a,model.b*model.b,model.c*model.c);
        derivCoeffs = Vector.divide(new Vector(2,2,2),derivCoeffs);
        N = Vector.normalize(Vector.multiply(isectMCtr,derivCoeffs)); // surface normal 
    } else {
        const vertA = new Vector(model.vertices[model.triangles[index[1]][0]][0], model.vertices[model.triangles[index[1]][0]][1], model.vertices[model.triangles[index[1]][0]][2]);
        const vertB = new Vector(model.vertices[model.triangles[index[1]][1]][0], model.vertices[model.triangles[index[1]][1]][1], model.vertices[model.triangles[index[1]][1]][2]);
        const vertC = new Vector(model.vertices[model.triangles[index[1]][2]][0], model.vertices[model.triangles[index[1]][2]][1], model.vertices[model.triangles[index[1]][2]][2]);
        N = computeTriangleNormal(vertA, vertB, vertC);
        if(Vector.dot(N,Vector.normalize(Vector.subtract(Eye, isectPos))) < 0) {
            N = Vector.scale(-1, N);
        }
    }
    return N;
}

function shadeModel(ellipsoids, triangles, lights, type, isect, index) {
      if(type == modelType.TRIANGLE && !(index instanceof Array)) throw new Error("Sub-triangle not found");
      var c = new Color(0,0,0,255); // init the ellipsoid color to black
      var model = type === modelType.TRIANGLE ? triangles[index[0]] : ellipsoids[index]; // model intersected by eye
      
      // This is used in isLightOccluded function
      const isectEllipsoid = type == modelType.TRIANGLE ? -1 : index;
      
      // add light from each light source
      var Lloc = new Vector(0,0,0);
      for (let l=0; l<lights.length; l++) {

            // check each other sphere to see if it occludes light
            Lloc.set(lights[l].x,lights[l].y,lights[l].z);
            var L = Vector.subtract(Lloc,isect.xyz); // light vector unnorm'd
          
            L = Vector.normalize(L);
            // add in the diffuse light
            var N = computeNormal(type, model, index, isect.xyz);
            let newColor = radiance(Lloc, N, L, isect.xyz, type, model, isectEllipsoid,  ellipsoids, triangles, 0, index);

            c[0] = newColor[0];
            c[1] = newColor[1];
            c[2] = newColor[2];
      } // end for lights
      
      c[0] = 255 * Math.min(1,c[0]); // clamp max value to 1
      c[1] = 255 * Math.min(1,c[1]); // clamp max value to 1
      c[2] = 255 * Math.min(1,c[2]); // clamp max value to 1
      
      return(c);
  } // if not just rendering isect

function getClosestIntersectionAgainstAllModels(ray, inputEllipsoids, inputTriangles, type, excludeIndex) {
  if(!ray instanceof Array) throw new Error("Ray is incorrect!");
  var n = inputEllipsoids.length; // the number of spheres
  var Dir = new Vector(0,0,0); // init the ray direction
  const Eye = ray[0];
  var isect = {}; // init the intersection
  Dir.copy(Vector.subtract(ray[1],ray[0])); // set ray direction
  //   console.log(Math.pow(Dir.x, 2) + Math.pow(Dir.y, 2) + Math.pow(Dir.z, 2))

  const closestModel = {
    type: null,
    isect: null,
    index: null
  }
  for (let e=0; e<n; e++) {
        if(type === modelType.ELLIPSOID && e == excludeIndex) continue;
        isect = rayEllipsoidIntersect([Eye,Dir],inputEllipsoids[e],0); 
        if (isect.exists){ // there is an intersect
            if (closestModel.isect) {
            if (isect.t < closestModel.isect.t) { // it is the closest yet
                closestModel.isect = isect; // record closest t yet
                closestModel.type = modelType.ELLIPSOID;
                closestModel.index = e;
            } // end if closest yet
            } else {
                closestModel.isect = isect;
                closestModel.type = modelType.ELLIPSOID;
                closestModel.index = e;
            }
        } 
  } // end for ellipsoids
  for (let f=0; f<inputTriangles.length; f++) {
        if(type === modelType.TRIANGLE && f == excludeIndex[0]) {continue;};
        for (let t=0; t<inputTriangles[f].triangles.length; t++){
            const vertexPos1 = (inputTriangles[f].vertices[inputTriangles[f].triangles[t][0]]);
            const vertexPos2 = (inputTriangles[f].vertices[inputTriangles[f].triangles[t][1]]);
            const vertexPos3 = (inputTriangles[f].vertices[inputTriangles[f].triangles[t][2]]);
            isect = rayTriangleIntersect([Eye,Dir],[vertexPos1, vertexPos2, vertexPos3]);
            if (isect.exists){ // there is an intersect
                if (closestModel.isect) {
                if (isect.t < closestModel.isect.t) { // it is the closest yet
                    closestModel.isect = isect; // record closest t yet
                    closestModel.type = modelType.TRIANGLE;
                    closestModel.index = [f, t];
                } // end if closest yet
                } else {
                    closestModel.isect = isect;
                    closestModel.type = modelType.TRIANGLE;
                    closestModel.index = [f, t];
                }
            } 
        }
  }
  return closestModel;
}

var isInterestingMode = false;
// use ray casting with ellipsoids to get pixel colors
function rayCastEllipsoids(context) {
    var inputEllipsoids = getJSONFile(INPUT_SPHERES_URL,"ellipsoids");
    var inputLights = getJSONFile(INPUT_LIGHTS_URL,"lights");
    var inputTriangles = [
        // TOP
        {   "tag": "TOP",
            "ambient": [0.1,0.1,0.1], "diffuse": [1.0,1.0,1.0], "specular": [0.3,0.3,0.3], "n": 3,
            "vertices": [[0, 1, 1.0], [0, 1, 0.0], [1,1,1.0], [1,1,0]],
            "triangles": [[0,1,2],[1,2,3]]
        },
        // FRONT
        {
            "tag": "FRONT",
            "ambient": [0.1,0.1,0.1], "diffuse": [1.0,1.0,1.0], "specular": [0.3,0.3,0.3], "n": 3,
            "vertices": [[0.0, 0, 1.0],[0.0, 1, 1.0],[1,0,1.0],[1,1,1.0]],
            "triangles": [[0,1,2],[1,2,3]]
        },
        // BOTTOM
        {   "tag": "BOTTOM",
            "ambient": [0.1,0.1,0.1], "diffuse": [1.0,1.0,1.0], "specular": [0.3,0.3,0.3], "n": 3,
            "vertices": [[0.0, 0, 1.0], [1, 0, 1.0], [0,0,0], [1,0,0]],
            "triangles": [[0,1,2],[1,2,3]]
        },
        // // LEFT
        {
            "tag": "LEFT",
            "ambient": [0.1,0.1,0.1], "diffuse": [1.0,0,0.0], "specular": [0.3,0.3,0.3], "n": 3,
            "vertices": [[0, 0, 1.0], [0.0, 1, 1.0], [0,0,0], [0,1,0]],
            "triangles": [[0,1,2],[1,2,3]]
        },
        // // RIGHT
        {
            "tag": "RIGHT",
            "ambient": [0.1,0.1,0.1], "diffuse": [0.0,0,1.0], "specular": [0.3,0.3,0.3], "n": 3,
            "vertices": [[1, 0, 1.0], [1, 1, 1.0], [1,0,0], [1,1,0]],
            "triangles": [[0,1,2],[1,2,3]]
        }
    ];
    var w = context.canvas.width;
    var h = context.canvas.height;
    var imagedata = context.createImageData(w,h);

    if (inputEllipsoids != String.null) { 
        var c = new Color(0,0,0,0); // init the pixel color

        // Loop over the pixels and ellipsoids, intersecting them
        var wx = WIN_LEFT; // init world pixel xcoord
        var wxd = (WIN_RIGHT-WIN_LEFT) * 1/(w-1); // world pixel x differential
        var wy = WIN_TOP; // init world pixel ycoord
        var wyd = (WIN_BOTTOM-WIN_TOP) * 1/(h-1); // world pixel y differential
        for (let y=0; y<h; y++) {
            wx = WIN_LEFT; // init w
            for (let x=0; x<h; x++) {
                c.change(0,0,0,255); // set pixel to background color
                let colorAcc = new Color(0,0,0,255);
                let lensX = 0, lensY = 0, currentPixel = [-1,-1];
                for(let s = 0; s < NUMBER_PIXEL_SAMPLES; s++) {
                    let randX = Math.random() * wxd;
                    let randY = Math.random() * wyd;

                    let sampleWx = wx + randX;
                    let sampleWy = wy + randY;

                    let rayDirection;
                    let closestModel;
                    if (isInterestingMode) {
                        // Convert pixel coordinates to centered canvas coordinates (-1 to 1)
                        const canvasCenterX = w / 2;
                        const canvasCenterY = h / 2;
                        
                        // Calculate normalized coordinates relative to canvas center
                        const ndcX = (x - canvasCenterX) / canvasCenterX;
                        const ndcY = -(y - canvasCenterY) / canvasCenterY;
                        
                        // Add zoom out factor
                        const zoomFactor = 1.5;
                        const scaledX = ndcX * zoomFactor;
                        const scaledY = ndcY * zoomFactor;
                        
                        // Calculate radius from center
                        const r = Math.sqrt(scaledX * scaledX + scaledY * scaledY);
                    
                        // Apply a more circular effect, adjusting how the radius affects the angle
                        // You can tweak this power (e.g., 2.5 or 3) for the strength of the distortion
                        const angle = Math.pow(r, 1.8) * Math.PI / 3.0; // Smoother, more circular transition
                        
                        // Calculate the new direction vector
                        const sinAngle = Math.sin(angle);
                        const dirZ = Math.cos(angle);
                        const dirX = (r > 0) ? (scaledX * sinAngle / r) : 0;
                        const dirY = (r > 0) ? (scaledY * sinAngle / r) : 0;
                        
                        // Center the view direction on the scene
                        const centerOffsetX = (WIN_LEFT + WIN_RIGHT) / 2;
                        const centerOffsetY = (WIN_TOP + WIN_BOTTOM) / 2;
                        
                        rayDirection = Vector.normalize(new Vector(
                            dirX + centerOffsetX,
                            dirY + centerOffsetY,
                            dirZ
                        ));
                        if(!currentPixel || !(currentPixel[0] === x && currentPixel[1] === y)) {
                            lensX = (Math.random() - 0.5) * 0.05;
                            lensY = (Math.random() - 0.5) * 0.05;
                            currentPixel[0] = x;
                            currentPixel[1] = y;
                        } 
                        // Randomly jitter eye position within aperture
                        let jitteredEye = new Vector(Eye.x + lensX, Eye.y + lensY, Eye.z);
                        // Compute focal point (where the ray should go)
                        let focusPoint = Vector.add(Eye,Vector.scale(1.2,rayDirection));

                        // Recompute direction towards the focal point
                        rayDirection = Vector.normalize(Vector.subtract(focusPoint,jitteredEye));
                        closestModel = getClosestIntersectionAgainstAllModels([jitteredEye, rayDirection], inputEllipsoids, inputTriangles);
                    } else {
                        rayDirection = new Vector(sampleWx,sampleWy,WIN_Z);
                        closestModel = getClosestIntersectionAgainstAllModels([Eye, rayDirection], inputEllipsoids, inputTriangles);
                    }
                    
                    if(closestModel.isect && closestModel.isect.exists){
                        let sampleColor = shadeModel(inputEllipsoids, inputTriangles, inputLights, closestModel.type, closestModel.isect, closestModel.index);
                        sampleColor = sampleColor.scale(1/NUMBER_PIXEL_SAMPLES);
                        colorAcc = colorAcc.addRGB(sampleColor);
                    }
                    
                }
                c = colorAcc;
                drawPixel(imagedata,x,y,c);
                wx += wxd; 
                //console.log(""); // blank per pixel
            } // end for x
            wy += wyd; 
            if(Math.ceil((y*100)/512) % 10 === 0) console.log(Math.ceil((y*100)/512) + "% rendered");
        } // end for y
        context.putImageData(imagedata, 0, 0);
    } // end if ellipsoids found
} // end ray cast ellipsoids

/* constants and globals */

const WIN_Z = 0;
const WIN_LEFT = 0, WIN_RIGHT = 1;
const WIN_BOTTOM = 0, WIN_TOP = 1; 
const INPUT_SPHERES_URL = 
    "https://ncsucg4games.github.io/prog1/spheres.json";
    // "https://ncsucgclass.github.io/prog1/ellipsoids.json";
    // "https://pages.github.ncsu.edu/bwatson/introcg-prog1-2017/ellipsoids.json";
const INPUT_LIGHTS_URL = 
    "https://ncsucg4games.github.io/prog1/lights.json";
    //"https://ncsucgclass.github.io/prog1/lights.json";
    //"https://pages.github.ncsu.edu/bwatson/introcg-prog1-2017/lights.json";
const renderTypes = {
        ISECT_ONLY: 1, // render white if intersect in pixel
        LIT: 2, // render lit color if intersect in pixel
        LIT_SHADOWS: 3 // render lit/shadowed color in intersect in pixel
    }; 
const RENDER_METHOD = renderTypes.LIT_SHADOWS; // show intersections unlit in white

const modelType = {
        ELLIPSOID: 1,
        TRIANGLE: 2
}

var Eye = new Vector(0.5,0.5,-0.5); // set the eye position


/* main -- here is where execution begins after window load */

function main() {

    // Get the canvas and context
    var canvas = document.getElementById("viewport"); 
    var context = canvas.getContext("2d");
 
    // Create the image
    //drawRandPixels(context);
      // shows how to draw pixels
    
    //drawRandPixelsInInputSpheres(context);
      // shows how to draw pixels and read input file
      
    //drawInputSpheresUsingArcs(context);
    // shows how to read input file, but not how to draw pixels
    let start = Date.now();
    // Call the function
    rayCastEllipsoids(context); 

    // End measuring time
    let timeTaken = Date.now() - start;

    console.log("Total time taken : " + (timeTaken/1000) + " seconds");
    
    document.addEventListener("keydown", function (event) {
        if (event.key === "!") {
            isInterestingMode = true;
            let start1 = Date.now();
            // Call the function
            rayCastEllipsoids(context); 

            // End measuring time
            let timeTaken1 = Date.now() - start1;

            console.log("Total time taken : " + (timeTaken1/1000) + " seconds");
        }
    });
    //framelessRayCastSpheres(context);
}