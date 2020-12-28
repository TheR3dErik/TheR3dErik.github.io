(this.webpackJsonpts_react_first=this.webpackJsonpts_react_first||[]).push([[0],{29:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){},46:function(e,t,i){"use strict";i.r(t);var n=i(0),o=i(1),s=i.n(o),a=i(22),r=i.n(a),h=(i(29),i(4)),c=i(2),l=function(e){var t=e.link,i=e.img,o=e.alttext,s=e.caption;return Object(n.jsx)(h.b,{to:t,children:Object(n.jsxs)("article",{className:"cardArticle",children:[Object(n.jsx)("img",{className:"cardThumbnail",src:i,alt:o}),Object(n.jsx)("h4",{className:"cardCaption",children:s})]})})},d=i.p+"static/media/thumbnail.049e0926.png",u=i.p+"static/media/thumbnail.2cbdb989.png",f=i.p+"static/media/thumbnail.b0b271eb.png",m=i.p+"static/media/thumbnail.b8d80bc2.jpg",p=i.p+"static/media/thumbnail.7940be22.png",g=function(){return Object(o.useEffect)((function(){document.title="Erik's Website"})),Object(n.jsxs)("div",{className:"mainContent",children:[Object(n.jsx)("h1",{children:"My Personal Projects"}),Object(n.jsx)("p",{children:"My name is Erik Scarlatescu and this is a site where I post about different things I work on in my free time. I'm intensely curious and always finding something new to experiment with."}),Object(n.jsxs)("div",{className:"cardRow",children:[Object(n.jsx)(l,{link:"/quadtrees",img:d,caption:"Voxel octrees (and pixel quadtrees)",alttext:"Thumbnail showing screenshot of interactive quadtree on the page."}),Object(n.jsx)(l,{link:"/mandelbrot",img:u,caption:"Visualizing mandelbrot set in browser",alttext:"Thumbnail showing screenshot of interactive quadtree on the page."}),Object(n.jsx)(l,{link:"/conductors",img:f,caption:"Visualizing point charges in electrostatic conductors",alttext:"Thumbnail showing screenshot of interactive quadtree on the page."}),Object(n.jsx)(l,{link:"/photomosaic",img:m,caption:"Photo mosaic generator for history project",alttext:"Thumbnail showing screenshot of interactive quadtree on the page."}),Object(n.jsx)(l,{link:"/mspaintmatrix",img:p,caption:"How to actually rotate text in Microsoft Paint",alttext:"Thumbnail showing screenshot of interactive quadtree on the page."})]})]})},b=i(9),y=i(10),j=function(e){var t=e.renderFunc,i=e.width,s=e.height,a=e.mouseDown,r=e.mouseUp,h=e.mouseMove,c=e.mouseWheel,l=e.mouseOut,d=e.keyDown,u=e.keyUp,f=e.contextType,m=Object(o.useRef)(null);return Object(o.useEffect)((function(){var e,n=m.current,o=n.getContext(f);void 0!==a&&n.addEventListener("mousedown",a),void 0!==r&&n.addEventListener("mouseup",r),void 0!==h&&n.addEventListener("mousemove",h),void 0!==c&&n.addEventListener("mousewheel",c),void 0!==l&&n.addEventListener("mouseout",l),void 0!==d&&window.addEventListener("keydown",d),void 0!==u&&window.addEventListener("keyup",u);return function n(){t(o,i,s),e=requestAnimationFrame(n)}(),function(){cancelAnimationFrame(e)}})),Object(n.jsx)("canvas",{ref:m,width:i,height:s})},x=j,v=function(){function e(t,i){Object(b.a)(this,e),this.x=void 0,this.y=void 0,this.x=t,this.y=i}return Object(y.a)(e,[{key:"len",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"len_n",value:function(e){return Math.pow(this.x*this.x+this.y*this.y,.5*e)}},{key:"add",value:function(t){return new e(this.x+t.x,this.y+t.y)}},{key:"sub",value:function(t){return new e(this.x-t.x,this.y-t.y)}},{key:"mul",value:function(t){return new e(this.x*t,this.y*t)}},{key:"dot",value:function(e){return this.x*e.x+this.y*e.y}}]),e}(),w=function(){function e(t,i,n){Object(b.a)(this,e),this.pos=void 0,this.vel=void 0,this.charge=void 0,this.fixed=void 0,this.charge=i,this.pos=t,this.vel=new v(0,0),this.fixed=n}return Object(y.a)(e,[{key:"render",value:function(e){this.charge>0?(e.fillStyle="#EE3300",e.beginPath(),e.arc(this.pos.x,this.pos.y,3,0,2*Math.PI,!1),e.fill(),e.lineWidth=1,e.strokeStyle="#FFFFFF",e.beginPath(),e.moveTo(this.pos.x-2,this.pos.y),e.lineTo(this.pos.x+2,this.pos.y),e.moveTo(this.pos.x,this.pos.y-2),e.lineTo(this.pos.x,this.pos.y+2),e.stroke()):(e.fillStyle="#0099EE",e.beginPath(),e.arc(this.pos.x,this.pos.y,3,0,2*Math.PI,!1),e.fill(),e.lineWidth=1,e.strokeStyle="#FFFFFF",e.beginPath(),e.moveTo(this.pos.x-2,this.pos.y),e.lineTo(this.pos.x+2,this.pos.y),e.stroke())}},{key:"calc_accel",value:function(e){var t=e.pos.sub(this.pos),i=-.5*this.charge*e.charge*t.len_n(-2);return t.mul(i)}}]),e}(),O=[],k=200;function T(e,t,i){e.fillStyle="#222222",e.fillRect(0,0,t,i),e.lineWidth=2,e.strokeStyle="#DDDD00",e.beginPath(),e.arc(.5*t,.5*i,k,0,2*Math.PI,!1),e.stroke();for(var n=[],o=0;o<O.length;o++){for(var s=new v(0,0),a=0;a<O.length;a++)o!==a&&(s=s.add(O[o].calc_accel(O[a])));n.push(s)}for(o=0;o<O.length;o++)if(!O[o].fixed){O[o].vel=O[o].vel.add(n[o]),O[o].pos=O[o].pos.add(O[o].vel);var r=new v(.5*t,.5*i),h=O[o].pos.sub(r);if(h.len()>k){var c=h.mul(O[o].vel.dot(h)*h.len_n(-2));O[o].vel=O[o].vel.sub(c.mul(1.9));var l=h.mul(k/h.len());O[o].pos=r.add(l)}}O.forEach((function(t){t.render(e)}))}var E,I=function(){return Object(o.useEffect)((function(){document.title="Conductors",function(e,t){O=[new w(new v(600,130),-100,!0)];for(var i=0;i<t;i+=20)for(var n=0;n<e;n+=20)(n-e/2)*(n-e/2)+(i-t/2)*(i-t/2)>4e4||O.push(new w(new v(n,i),1,!0));for(i=10;i<t;i+=20)for(n=10;n<e;n+=20)(n-e/2)*(n-e/2)+(i-t/2)*(i-t/2)>4e4||O.push(new w(new v(n,i),-1,!1))}(640,480)})),Object(n.jsxs)("div",{className:"mainContent",children:[Object(n.jsx)(h.b,{to:"/",children:"Back to main page"}),Object(n.jsx)(j,{contextType:"2d",renderFunc:T,width:640,height:480}),Object(n.jsx)("script",{src:"conductors.js"}),Object(n.jsx)("p",{children:"While learning electrostatics for AP physics, my book made the claim that in an electrically neutral conductor, the electric field inside is zero and there is only a net charge on the surface."}),Object(n.jsx)("p",{children:"So, I decided to try to get some more intuition for this claim by simulating a conductor as seen above. The positive nuclei of atoms are fixed in place and their electrons are free to flow around. I simply use Coulomb's law to calculate the attraction between every charge, and even with this many charges, it works well enough on a website. I fixed a single negative charge in place outside of the conductor with one hundred times the magnitude of charge compared to the individual particles in the conductor."}),Object(n.jsx)("p",{children:"I did make a slight modification to Coulomb's law. Basically, it seems that the charge only settles on the surface in 3 dimensions because the electric force obeys an inverse-square relationship with distance. However, this is a 2 dimensional simulation, so to get the same behavior, an inverse-square law no longer works. Instead, I modified it to be only inverse."}),Object(n.jsx)("p",{children:"This is still somewhat low resolution as far as atoms and electrons in a conductor go, so the result doesn't seem to be very clearly visible. But still, it does seem to work pretty well just by looking at it (which admittedly isn't a very rigorous metric). Some further changes I could make to pursue this further would be to rewrite it in C++ to get enough of a performance boost to allow a finer grid with more nuclei and electrons to be simulated."})]})},C=i(20),P=i(12),F=i.n(P),M=(i(43),i.p+"static/media/stockphotosign.70f0bb49.jpg"),N=i.p+"static/media/step1.300747a7.png",_=i.p+"static/media/step2.c6fa55de.png",S=i.p+"static/media/step3.87f35fe5.png",R=i.p+"static/media/step4.40941011.png",z=i.p+"static/media/finalresult.96c51cc9.png",A=i.p+"static/media/bobross.52ce9a7f.jpg",D=function(){var e=Object(o.useRef)(null),t=Object(o.useRef)(null),i=Object(o.useRef)(null),s=Object(o.useRef)(null),a=Object(o.useRef)(null),r=Object(o.useState)("The new width is: "),c=Object(C.a)(r,2),l=c[0],d=c[1],u=Object(o.useState)("The new height is: "),f=Object(C.a)(u,2),m=f[0],p=f[1],g=Object(o.useRef)(null),b={width:"30%"},y={width:"60%"};function j(){var n=parseInt(e.current.value),o=parseInt(t.current.value),s=parseInt(i.current.value);d("The new width is: "+Math.round(n*Math.cos(s*Math.PI/180))),p("The new height is: "+Math.round(o/Math.cos(s*Math.PI/180)))}function v(e,t,i){return(1-i)*e+i*t}return Object(o.useEffect)((function(){document.title="Matrix!",j()})),Object(n.jsxs)("div",{className:"mainContent",children:[Object(n.jsx)(h.b,{to:"/",children:"Back to main page"}),Object(n.jsx)("h1",{children:"Actually rotating text in MS Paint"}),Object(n.jsx)("p",{children:"The classic meme is that it is impossible to rotate text in Microsoft Paint. Outside of flipping and 90 degree rotations, this seems to be true. However, here I will prove that statement wrong using math."}),Object(n.jsx)("h2",{children:"How to do it (explanation why is further down)"}),Object(n.jsx)("p",{children:"Let's start by trying to add rotated text to this guy's stock photo sign below. I'm going to guess that we need to rotate it about 25 degrees clockwise. The plan is to rotate the whole image, place the text with no rotation, and rotate it back."}),Object(n.jsx)("img",{className:"step",style:b,src:M}),Object(n.jsx)("p",{children:"First, do a horizontal skew on the image by the ultimate amount you want to rotate. 25 degrees in this case."}),Object(n.jsx)("img",{className:"step",style:y,src:N}),Object(n.jsxs)("p",{children:["Now this step is slightly more complicated. Set the width to the original width of the image multiplied by the cosine of the angle. Set the height to the original height ",Object(n.jsx)("i",{children:"divided"})," by the cosine of the angle. This step is really only to scale the width by the cosine and height by the secant of the angle. The reason we don't scale by percent is that Microsoft Paint only lets you scale by integer percents so precision is lost. Since this can be confusing, I've included a small helper below to calculate the new width and height of an image."]}),Object(n.jsxs)("p",{children:["Original width: ",Object(n.jsx)("input",{defaultValue:1e3,onChange:j,ref:e,type:"number",id:"widthfield",min:"0",max:"10000"})]}),Object(n.jsxs)("p",{children:["Original height: ",Object(n.jsx)("input",{defaultValue:600,onChange:j,ref:t,type:"number",id:"heightfield",min:"0",max:"10000"})]}),Object(n.jsxs)("p",{children:["Angle: ",Object(n.jsx)("input",{defaultValue:0,onChange:j,ref:i,type:"number",id:"anglefield",min:"-89",max:"89"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:l}),Object(n.jsx)("p",{children:m}),Object(n.jsx)("img",{className:"step",style:y,src:_}),Object(n.jsxs)("p",{children:["This final step is easier than before. Just do a vertical scale by the ",Object(n.jsx)("i",{children:"negative"})," angle of rotation."]}),Object(n.jsx)("img",{className:"step",style:y,src:S}),Object(n.jsx)("p",{children:"Now put the text on:"}),Object(n.jsx)("img",{className:"step",style:b,src:R}),Object(n.jsx)("p",{children:"And repeat these instructions but in reverse to get the final result:"}),Object(n.jsx)("img",{className:"step",style:b,src:z}),Object(n.jsx)("p",{children:"Now for a few caveats. If your image is too large or too far from being a square, Microsoft Paint sometimes splices the image in a bizarre way when performing skews. Either resize or crop the image back to a smaller size or more square aspect ratio. Also, when rotating by an angle close to 90, such as 85 degrees, the extreme skewing will tend to lead to poor results. If you wish to rotate by such an angle, use the built-in feature to rotate first by 90 degrees and then rotate -5 degrees with this process."}),Object(n.jsx)("h2",{children:"Why it works"}),Object(n.jsx)("p",{children:"Since matrices can also represent linear transformations, rotations can be written in terms of matrix multiplication. While a rotation cannot be represented in Microsoft Paint, the program does have support for shearing and scaling. So, if a rotation matrix can be broken down into a bunch of shears and scales, then in theory MS Paint would be able to support rotating text."}),Object(n.jsx)("p",{children:"Here is how a rotation can be represented as a matrix:"}),Object(n.jsx)(F.a,{latex:"\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}"}),Object(n.jsxs)("p",{children:["In terms of linear transformations, the unit vector in the x direction gets mapped to the first column and the unit vector in the y direction gets mapped to the second column. If that doesn't mean much to you, then try watching ",Object(n.jsx)("a",{href:"https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",children:"the first three videos of 3blue1brown's essence of linear algebra series on YouTube."}),"If I tried to explain how matrices are linear transformations, this would turn into a bad copy of his videos."]}),Object(n.jsx)("p",{children:"Now to try decomposing the rotation into a multiplication of triangular matrices. Since this matrix is only 2x2, it's a relatively straightforward process. To the second row, add the first row multiplied by $-\\tan\\theta$ to eliminate the number in the lower left corner:"}),Object(n.jsx)(F.a,{latex:"\\begin{bmatrix} 1 & 0 \\\\ -\\tan\\theta & 1 \\end{bmatrix}\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix} = \\begin{bmatrix} 1\\cdot\\cos\\theta + 0\\cdot\\sin\\theta & 1\\cdot(-\\sin\\theta) + 0\\cdot\\cos\\theta \\\\ -\\tan\\theta\\cdot\\cos\\theta + 1\\cdot\\sin\\theta & (-\\tan\\theta)\\cdot(-\\sin\\theta) + 1\\cdot\\cos\\theta \\end{bmatrix}"}),Object(n.jsx)(F.a,{latex:" = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ 0 & \\sec\\theta \\end{bmatrix}"}),Object(n.jsx)("p",{children:"And the matrix is factored. It can be written as follows:"}),Object(n.jsx)(F.a,{latex:"\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}= \\begin{bmatrix} 1 & 0 \\\\ \\tan\\theta & 1 \\end{bmatrix}\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ 0 & \\sec\\theta \\end{bmatrix}"}),Object(n.jsx)("p",{children:"However, MS Paint can only do shearing and scaling, so we have to break up the right-hand matrix. But this is only as hard as factoring out a diagonal matrix from it."}),Object(n.jsx)(F.a,{latex:"\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}= \\begin{bmatrix} 1 & 0 \\\\ \\tan\\theta & 1 \\end{bmatrix}\\begin{bmatrix} \\cos\\theta & 0 \\\\ 0 & \\sec\\theta \\end{bmatrix}\\begin{bmatrix}1 & -\\tan\\theta \\\\ 0 & 1\\end{bmatrix}"}),Object(n.jsx)("p",{children:"The matrices with tangents in them happen to be the exact same transformation that MS Paint does when it performs a skew by a certain angle. So, reading the matrices right to left, to rotate an image, first perform a horizontal skew by the negative angle, then scale the x and y by the cosine and secant of the angle, and then perform vertical skew by the desired angle."}),Object(n.jsx)("p",{children:"This small program below demonstrates what exactly is going on with the math. Drag the slider to visualize each step of the transformation."}),Object(n.jsx)(x,{contextType:"2d",renderFunc:function(e,t,i){if(null!=a.current){var n;e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,640,480),e.setTransform(1,0,0,1,320,240);var o=parseInt(a.current.value),r=parseInt(s.current.value);r=r<=-180?Math.PI:r>=180?-Math.PI:-r*Math.PI/180,o<=333?(n=o/333,e.transform(1,v(0,Math.tan(r),n),0,1,0,0)):o<=666?(n=(o-333)/333,e.transform(1,Math.tan(r),0,1,0,0),e.transform(v(1,Math.cos(r),n),0,0,v(1,1/Math.cos(r),n),0,0)):(n=(o-666)/333,e.transform(1,Math.tan(r),0,1,0,0),e.transform(Math.cos(r),0,0,1/Math.cos(r),0,0),e.transform(1,0,v(0,-Math.tan(r),n),1,0,0)),e.fillStyle="#000000",e.drawImage(g.current,-100,-100,200,200)}},width:640,height:480}),Object(n.jsx)("input",{ref:a,type:"range",min:"0",defaultValue:"0",max:"999",step:"1",className:"slider",id:"range1"}),Object(n.jsxs)("p",{style:{textAlign:"center"},children:["Angle: ",Object(n.jsx)("input",{ref:s,type:"number",defaultValue:"30",min:"-180",max:"180",id:"angle1"})]}),Object(n.jsx)("img",{style:{display:"none"},src:A,ref:g})]})},L=(i(44),i.p+"static/media/trenchpicoriginal.fb8b798d.jpg"),Y=i.p+"static/media/try1.2d9ca401.jpg",B=i.p+"static/media/try2.edf7ed4c.jpg",X=i.p+"static/media/try3.20852a5f.jpg",W=i.p+"static/media/try5_a.b20c52dc.jpg",q=i.p+"static/media/hereitis_secondposter.e59c57f3.jpg",H=function(){return Object(n.jsxs)("div",{className:"mainContent",children:[Object(n.jsx)(h.b,{to:"/",children:"Back to main page"}),Object(n.jsx)("h2",{children:"Photomosiac generator"}),Object(n.jsx)("p",{children:"In my U.S. History class, we were assigned to create a photomosaic relating to World War 1. For anyone who doesn't know what it is, it's basically a larger image made up of smaller ones, like the one in the thumbnail for this page."}),Object(n.jsx)("p",{children:"Anyways, I decided to have a little fun with this and make the computer do it for me on a scale much bigger than I could ever hope to do. I started with the base image below:"}),Object(n.jsx)("img",{className:"mosaicimg",src:L}),Object(n.jsxs)("p",{children:["Now I needed a quick way to download the first few hundred search results for World War 1 on Google. For this, I used ",Object(n.jsx)("a",{href:"https://github.com/hardikvasa/google-images-download",children:"this python library"}),"to get the first few hundred images that pop up. The program ran out of images after it downloaded roughly 900 of them."]}),Object(n.jsx)("p",{children:"Then I sliced the base image into rectangular regions with a total of 32 across and 25 down. These subsections were sorted from lowest to highest average brightness. The downloaded images were sorted in a similar fashion. The algorithm that follows is nothing complicated: each downloaded image was then matched with a subsection of similar brightness index. This is the result:"}),Object(n.jsx)("img",{className:"mosaicimg",src:Y}),Object(n.jsx)("p",{children:"It seems to work, but not well enough. My theory is that the distribution of brightnesses in the downloaded images is too far from that of the base image subsections. In an attempt to account for this, I adjusted the brightness of each downloaded image to better match the base image. This produces a more well-defined result."}),Object(n.jsx)("img",{className:"mosaicimg",src:B}),Object(n.jsx)("p",{children:"However, the original image still doesn't come through clearly enough. So, I blended it with the original image just a bit:"}),Object(n.jsx)("img",{className:"mosaicimg",src:X}),Object(n.jsx)("p",{children:"One final idea I had was to duplicate each downloaded image 10 times so that we can have an even more well-defined photomosaic. This has the unfortunate effect of causing the same images to cluster around each other because they have similar brightness. But the final result is good enough that I think it's worth it."}),Object(n.jsx)("img",{className:"mosaicimg",src:W}),Object(n.jsx)("p",{children:"We were also required to make a second photomosaic. My program can't sort with colors, so I just blended the colored base image more aggressively and still got this good result:"}),Object(n.jsx)("img",{className:"mosaicimg",src:q}),Object(n.jsx)("p",{children:"One final note: If it seems difficult to distinguish individual subimages in the pictures above, it's because they are stored at a decreased resolution so the webpage loads more quickly."})]})},V=function(){var e=960,t=640,i=-1.5,s=1.5,a=1,r=-1,c=!1,l=0,d=0;function u(n,o){var h=s-i,c=a-r;i-=n/e*h,s-=n/e*h,a+=o/t*c,r+=o/t*c}function f(n){var o=s-i,h=a-r;n?(i+=l/e*o*.1,s-=(1-l/e)*o*.1,a-=d/t*h*.1,r+=(1-d/t)*h*.1):(i-=l/e*o*.1,s+=(1-l/e)*o*.1,a+=d/t*h*.1,r-=(1-d/t)*h*.1)}Object(o.useEffect)((function(){document.title="Mandelbrot"}));var m,p;function g(e,t,i){var n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS)?n:(alert("An error occurred compiling the shaders: "+e.getShaderInfoLog(n)),e.deleteShader(n),null)}return Object(n.jsxs)("div",{className:"mainContent",children:[Object(n.jsx)(h.b,{to:"/",children:"Back to main page"}),Object(n.jsx)(x,{contextType:"webgl",renderFunc:function(e){var t=function(e,t,i){var n=g(e,e.VERTEX_SHADER,t),o=g(e,e.FRAGMENT_SHADER,i),s=e.createProgram();if(e.attachShader(s,n),e.attachShader(s,o),e.linkProgram(s),!e.getProgramParameter(s,e.LINK_STATUS))return alert("Unable to initialize the shader program: "+e.getProgramInfoLog(s)),null;return s}(e,"\n        attribute vec2 aVertexPos;\n\n        //bounds for camera in the order: left, right, up, down\n        uniform vec4 cameraInfo;\n\n        varying vec2 p;\n\n        void main()\n        {\n            gl_Position = vec4(aVertexPos, 0.0, 1.0);\n            \n            vec2 temp = 0.5*(aVertexPos + vec2(1.0, 1.0));\n\n            // I really did just brute force it with advanced AI right here\n            if (aVertexPos == vec2(-1.0, -1.0))\n                p = cameraInfo.xw;\n            else if (aVertexPos == vec2(-1.0, 1.0))\n                p = cameraInfo.xz;\n            else if (aVertexPos == vec2(1.0, 1.0))\n                p = cameraInfo.yz;\n            else\n                p = cameraInfo.yw;\n        }\n    ","\n        precision highp float;\n\n        varying vec2 p;\n        const int max_iterations = 1024;\n\n        void main()\n        {\n            float znr = 0.0;\n            float zni = 0.0;\n            \n            int bounded_iterations = 0;\n            for (int i = 0; i < max_iterations; i++)\n            {\n                // once bounded_iterations is set, it is no longer changed\n                if (znr*znr + zni*zni >= 4.0 && bounded_iterations == 0)\n                {\n                    bounded_iterations = i+1;\n                }\n\n                float znnr = znr*znr - zni*zni + p.x;\n                float znni = 2.0*znr*zni + p.y;\n\n                znr = znnr;\n                zni = znni;\n            }\n\n            if (znr*znr + zni*zni < 4.0)\n            {\n                bounded_iterations = max_iterations;\n                gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n            }\n            else\n            {\n                float r = 0.5 * sin(3.0 * log(float(bounded_iterations)) + 0.0) + 0.5;\n                float g = 0.5 * sin(2.1 * log(float(bounded_iterations)) - 1.2) + 0.5;\n                float b = 0.5 * sin(4.6 * log(float(bounded_iterations)) + 0.6) + 0.5;\n                gl_FragColor = vec4(r, g, b, 1.0);\n            }\n            //gl_FragColor = vec4(vec3(float(bounded_iterations)/float(max_iterations)), 1.0);\n        }\n    ");p=e.getAttribLocation(t,"aVertexPos"),m=e.getUniformLocation(t,"cameraInfo");var n=function(e){var t=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,t);var i=[-1,-1,-1,1,1,1,-1,-1,1,1,1,-1];return e.bufferData(e.ARRAY_BUFFER,new Float32Array(i),e.STATIC_DRAW),t}(e);e.bindBuffer(e.ARRAY_BUFFER,n),e.vertexAttribPointer(p,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(p),e.useProgram(t),e.clearColor(1,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.uniform4f(m,i,s,a,r),e.drawArrays(e.TRIANGLES,0,6)},width:e,height:t,mouseDown:function(e){console.log("mousedown"),c=!0,l=e.offsetX,d=e.offsetY},mouseUp:function(e){console.log("mouseup"),c=!1},mouseMove:function(e){c?(u(e.offsetX-l,e.offsetY-d),l=e.offsetX,d=e.offsetY):(l=e.offsetX,d=e.offsetY)},mouseWheel:function(e){console.log(e.deltaY),e.deltaY<0?f(!0):f(!1)},keyDown:function(e){switch(e.key){case"r":i=-1.5,s=1.5,a=1,r=-1;break;case"d":u(100,0);break;case"a":u(-100,0);break;case"s":u(0,100);break;case"w":u(0,-100);break;case"i":f(!0);break;case"o":f(!1)}}}),Object(n.jsx)("p",{children:"This is made using WebGL. All calculations are done in a fragment shader. Since WebGL (and OpenGL in general) doesn't like to use floats with more precision than 32 bits, it doesn't take much zooming to hit the limit on this. Nevertheless, I still think it's pretty cool. I will try experimenting soon with increasing precision."}),Object(n.jsx)("p",{children:"Click and drag with the mouse or use the arrow keys to pan around. To zoom, use the scroll wheel, or press 'i' to zoom in and 'o' to zoom out. Press 'r' to reset to the original zoom."})]})},U=i(8);i(45);!function(e){e[e.MIXED_TYPE=-1]="MIXED_TYPE",e[e.GREY=0]="GREY",e[e.BLUE=1]="BLUE",e[e.GREEN=2]="GREEN",e[e.BROWN=3]="BROWN",e[e.RED=4]="RED"}(E||(E={}));var G=["#999999","#2288EE","#5CCC00","#9B7653","#FF6600"],Q=0,J=function(){function e(t,i,n,o,s){Object(b.a)(this,e),this.root=void 0,this.depthCap=void 0,this.centerx=void 0,this.centery=void 0,this.width=void 0,this.height=void 0,this.buffer=void 0,this.bufferContext=void 0,this.root=new $(0,t),this.depthCap=t,this.centerx=i,this.centery=n,this.width=o,this.height=s,this.buffer=document.createElement("canvas"),this.buffer.width=512,this.buffer.height=512,this.bufferContext=this.buffer.getContext("2d")}return Object(y.a)(e,[{key:"draw",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.bufferContext.strokeStyle="#FFFFFF",this.bufferContext.clearRect(0,0,512,512),this.bufferContext.fillStyle="#FFFFFF",this.root.draw(e,this.bufferContext,this.centerx,this.centery,this.width,this.height),t&&(e.globalCompositeOperation="difference",e.drawImage(this.buffer,0,0),e.globalCompositeOperation="source-over")}},{key:"handleClick",value:function(e,t,i,n){this.root.handleClick(e,t,i,n,0,this.depthCap,this.centerx,this.centery,this.width,this.height)}},{key:"drawHoverbox",value:function(e,t,i,n){e.strokeStyle="#FFFFFF",this.root.drawHoverbox(e,t,i,n,0,this.depthCap,this.centerx,this.centery,this.width,this.height)}},{key:"getNodeAt",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.depthCap;if(!(e<0||t<0||e>this.width||t>this.height)){for(var n=this.root,o=this.centerx,s=this.centery,a=this.width,r=this.height,h=0;n.getType()===E.MIXED_TYPE&&h<i;)e<=o&&t<=s?(o-=.25*a,s-=.25*r,n=n.getChild(0)):e<=o&&t>s?(o-=.25*a,s+=.25*r,n=n.getChild(1)):e>o&&t>s?(o+=.25*a,s+=.25*r,n=n.getChild(2)):(o+=.25*a,s-=.25*r,n=n.getChild(3)),a*=.5,r*=.5,h++;return{node:n,width:a,height:r,centerx:o,centery:s,depth:h}}}},{key:"selectTest",value:function(e,t){console.log("SELECT TEST");var i=this.getNodeAt(e,t);void 0!==i&&(console.log("not nll"),i.node.getLeftNeighbors(this,i.width,i.height,i.centerx,i.centery,i.depth).forEach((function(e){e.node.selected=!0})),console.log(i.node.getLeftNeighbors(this,i.width,i.height,i.centerx,i.centery,i.depth)))}},{key:"floodFill",value:function(e,t,i){var n=this.getNodeAt(e,t);if(void 0!==n){var o=n.node.getType();if(o!==i){for(var s=[n];s.length>0;){console.log("QUEUE LENGTH IS NOW: "+s.length);var a=s.shift();if(void 0!==a){null===a||void 0===a||a.node.setType(i,a.depth,this.depthCap);var r=null===a||void 0===a?void 0:a.node.getTopNeighbors(this,a.width,a.height,a.centerx,a.centery,a.depth);void 0!==r&&r.forEach((function(e){e.node.getType()!==o||s.includes(e)||s.push(e)})),void 0!==(r=null===a||void 0===a?void 0:a.node.getBottomNeighbors(this,a.width,a.height,a.centerx,a.centery,a.depth))&&r.forEach((function(e){e.node.getType()!==o||s.includes(e)||s.push(e)})),void 0!==(r=null===a||void 0===a?void 0:a.node.getLeftNeighbors(this,a.width,a.height,a.centerx,a.centery,a.depth))&&r.forEach((function(e){e.node.getType()!==o||s.includes(e)||s.push(e)})),void 0!==(r=null===a||void 0===a?void 0:a.node.getRightNeighbors(this,a.width,a.height,a.centerx,a.centery,a.depth))&&r.forEach((function(e){e.node.getType()!==o||s.includes(e)||s.push(e)}))}}this.root.consolidate(0,this.depthCap)}}}}]),e}(),$=function(){function e(t,i){if(Object(b.a)(this,e),this.children=void 0,this.type=void 0,this.selected=!1,this.type=1,this.children=[],t<i)for(var n=0;n<4;n++)this.children.push(new e(t+1,i))}return Object(y.a)(e,[{key:"getType",value:function(){return this.type}},{key:"getChild",value:function(e){return this.children[e]}},{key:"consolidate",value:function(e,t){e!==t&&this.type===E.MIXED_TYPE&&(this.children[0].type!==E.MIXED_TYPE&&this.children[0].type===this.children[1].type&&this.children[1].type===this.children[2].type&&this.children[2].type===this.children[3].type?this.setType(this.children[0].type,e,t):(this.type=E.MIXED_TYPE,this.children[0].consolidate(e+1,t),this.children[1].consolidate(e+1,t),this.children[2].consolidate(e+1,t),this.children[3].consolidate(e+1,t),this.children[0].type!==E.MIXED_TYPE&&this.children[0].type===this.children[1].type&&this.children[1].type===this.children[2].type&&this.children[2].type===this.children[3].type&&this.setType(this.children[0].type,e,t)))}},{key:"getTopChildren",value:function(e,t,i,n,o){if(this.type!==E.MIXED_TYPE)return[{node:this,width:e,height:t,centerx:i,centery:n,depth:o}];var s=[];return s.push.apply(s,Object(U.a)(this.children[0].getTopChildren(.5*e,.5*t,i-.25*e,n-.25*t,o+1))),s.push.apply(s,Object(U.a)(this.children[3].getTopChildren(.5*e,.5*t,i+.25*e,n-.25*t,o+1))),s}},{key:"getBottomChildren",value:function(e,t,i,n,o){if(this.type!==E.MIXED_TYPE)return[{node:this,width:e,height:t,centerx:i,centery:n,depth:o}];var s=[];return s.push.apply(s,Object(U.a)(this.children[1].getBottomChildren(.5*e,.5*t,i-.25*e,n+.25*t,o+1))),s.push.apply(s,Object(U.a)(this.children[2].getBottomChildren(.5*e,.5*t,i+.25*e,n+.25*t,o+1))),s}},{key:"getLeftChildren",value:function(e,t,i,n,o){if(this.type!==E.MIXED_TYPE)return[{node:this,width:e,height:t,centerx:i,centery:n,depth:o}];var s=[];return s.push.apply(s,Object(U.a)(this.children[0].getLeftChildren(.5*e,.5*t,i-.25*e,n-.25*t,o+1))),s.push.apply(s,Object(U.a)(this.children[1].getLeftChildren(.5*e,.5*t,i-.25*e,n+.25*t,o+1))),s}},{key:"getRightChildren",value:function(e,t,i,n,o){if(this.type!==E.MIXED_TYPE)return[{node:this,width:e,height:t,centerx:i,centery:n,depth:o}];var s=[];return s.push.apply(s,Object(U.a)(this.children[3].getRightChildren(.5*e,.5*t,i+.25*e,n-.25*t,o+1))),s.push.apply(s,Object(U.a)(this.children[2].getRightChildren(.5*e,.5*t,i+.25*e,n+.25*t,o+1))),s}},{key:"getTopNeighbors",value:function(e,t,i,n,o,s){var a=e.getNodeAt(n,o-i,s);return void 0===a?[]:a.node.type!==E.MIXED_TYPE?[a]:a.node.getBottomChildren(t,i,n,o-i,s)}},{key:"getBottomNeighbors",value:function(e,t,i,n,o,s){var a=e.getNodeAt(n,o+i,s);return void 0===a?[]:a.node.type!==E.MIXED_TYPE?[a]:a.node.getTopChildren(t,i,n,o+i,s)}},{key:"getLeftNeighbors",value:function(e,t,i,n,o,s){var a=e.getNodeAt(n-t,o,s);return void 0===a?[]:a.node.type!==E.MIXED_TYPE?[a]:a.node.getRightChildren(t,i,n-t,o,s)}},{key:"getRightNeighbors",value:function(e,t,i,n,o,s){var a=e.getNodeAt(n+t,o,s);return void 0===a?[]:a.node.getLeftChildren(t,i,n+t,o,s)}},{key:"setType",value:function(e,t,i){if(t<i)for(var n=0;n<4;n++)this.children[n].setType(e,t+1,i);this.type=e}},{key:"handleClick",value:function(e,t,i,n,o,s,a,r,h,c){e!==this.type&&(o!==n?(t<=a&&i<=r&&this.children[0].type!==e?this.children[0].handleClick(e,t,i,n,o+1,s,a-.25*h,r-.25*c,.5*h,.5*c):t<=a&&i>r&&this.children[1].type!==e?this.children[1].handleClick(e,t,i,n,o+1,s,a-.25*h,r+.25*c,.5*h,.5*c):t>a&&i>r&&this.children[2].type!==e?this.children[2].handleClick(e,t,i,n,o+1,s,a+.25*h,r+.25*c,.5*h,.5*c):t>a&&i<=r&&this.children[3].type!==e&&this.children[3].handleClick(e,t,i,n,o+1,s,a+.25*h,r-.25*c,.5*h,.5*c),this.children[0].type===this.children[1].type&&this.children[1].type===this.children[2].type&&this.children[2].type===this.children[3].type?this.type=this.children[0].type:this.type=E.MIXED_TYPE):this.setType(e,o,s))}},{key:"draw",value:function(e,t,i,n,o,s){if(this.type===E.MIXED_TYPE){this.children[0].draw(e,t,i-.25*o,n-.25*s,.5*o,.5*s),this.children[1].draw(e,t,i-.25*o,n+.25*s,.5*o,.5*s),this.children[2].draw(e,t,i+.25*o,n+.25*s,.5*o,.5*s),this.children[3].draw(e,t,i+.25*o,n-.25*s,.5*o,.5*s);for(var a=0;a<2;a++)t.beginPath(),t.moveTo(i-.5*o,n-.5*s),t.lineTo(i-.5*o,n+.5*s),t.lineTo(i+.5*o,n+.5*s),t.lineTo(i+.5*o,n-.5*s),t.lineTo(i-.5*o,n-.5*s),t.stroke(),t.beginPath(),t.moveTo(i-.5*o,n),t.lineTo(i+.5*o,n),t.stroke(),t.beginPath(),t.moveTo(i,n-.5*s),t.lineTo(i,n+.5*s),t.stroke()}else e.fillStyle=G[this.type],this.selected&&(e.fillStyle="#FF00FF"),e.fillRect(i-.5*o,n-.5*s,o,s)}},{key:"drawHoverbox",value:function(e,t,i,n,o,s,a,r,h,c){o===n||o===s?(e.beginPath(),e.moveTo(a-.5*h,r-.5*c),e.lineTo(a-.5*h,r+.5*c),e.lineTo(a+.5*h,r+.5*c),e.lineTo(a+.5*h,r-.5*c),e.lineTo(a-.5*h,r-.5*c),e.stroke()):t<=a&&i<=r?this.children[0].drawHoverbox(e,t,i,n,o+1,s,a-.25*h,r-.25*c,.5*h,.5*c):t<=a&&i>r?this.children[1].drawHoverbox(e,t,i,n,o+1,s,a-.25*h,r+.25*c,.5*h,.5*c):t>a&&i>r?this.children[2].drawHoverbox(e,t,i,n,o+1,s,a+.25*h,r+.25*c,.5*h,.5*c):t>a&&i<=r&&this.children[3].drawHoverbox(e,t,i,n,o+1,s,a+.25*h,r-.25*c,.5*h,.5*c)}}]),e}(),K=function(){var e,t=!1,i=6,s=0,a=0,r=!0;Object(o.useEffect)((function(){e=new J(6,256,256,512,512)}));var c=[];c.push(Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{onClick:function(){return Q=0},type:"radio",id:"radio0",name:"radios",value:0}),Object(n.jsx)("label",{style:{backgroundColor:G[0]},htmlFor:"radio0"})]}));for(var l=function(e){var t="radio"+e;c.push(Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{onClick:function(){return Q=e},type:"radio",id:t,name:"radios",value:e}),Object(n.jsx)("label",{style:{backgroundColor:G[e]},htmlFor:t})]}))},d=1;d<G.length;d++)l(d);return Object(n.jsxs)("div",{className:"mainContent",children:[Object(n.jsx)(h.b,{to:"/",children:"Back to main page"}),Object(n.jsx)(x,{contextType:"2d",renderFunc:function(t){void 0!==e?(t.lineWidth=2,e.draw(t,r),e.drawHoverbox(t,s,a,i)):console.log("Quadtree is undefined!!")},width:512,height:512,mouseDown:function(n){e.handleClick(Q,n.offsetX,n.offsetY,i),t=!0},mouseMove:function(n){s=n.offsetX,a=n.offsetY,t&&e.handleClick(Q,n.offsetX,n.offsetY,i)},mouseUp:function(e){t=!1},mouseWheel:function(e){e.deltaY>0?i++:e.deltaY<0&&i--,i>6?i=6:i<0&&(i=0)},mouseOut:function(e){t=!1},keyDown:function(t){switch(t.key){case"i":++i>6&&(i=6);break;case"o":--i<0&&(i=0);break;case"f":e.floodFill(s,a,Q);break;case"s":e.selectTest(s,a)}}}),Object(n.jsxs)("div",{className:"colorButtonDiv",children:[" ",c," "]}),Object(n.jsx)("input",{onChange:function(e){r=e.target.checked}.bind(undefined),defaultChecked:!0,type:"checkbox",id:"gridRenderCheckbox"}),Object(n.jsx)("label",{htmlFor:"gridRenderCheckbox",children:"Render grid"}),Object(n.jsx)("p",{children:"Select a color to draw with by clicking on its square above. Then simply click and drag to draw. Press 'f' to perform a floodfill at the location of the mouse cursor with the selected color."}),Object(n.jsx)("p",{children:"Recently, I've been obsessed with making a voxel game similar to Minecraft. One thing I've read is how commonly octrees are used for this purpose. Before I try making anything with octrees, I wanted to see if I could even use quadtrees, the more mild 2-dimensional cousins of octrees."}),Object(n.jsx)("p",{children:"The canvas above is sort of like a picture in MS Paint that you can draw on, but it also visualizes the quadtree structure. For the most part, this wasn't too hard to implement, but getting the flood fill to work properly was somewhat of a challenge."})]})};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(h.a,{children:Object(n.jsxs)(c.c,{children:[Object(n.jsx)(c.a,{exact:!0,path:"/",component:g}),Object(n.jsx)(c.a,{exact:!0,path:"/conductors",component:I}),Object(n.jsx)(c.a,{exact:!0,path:"/mspaintmatrix",component:D}),Object(n.jsx)(c.a,{exact:!0,path:"/photomosaic",component:H}),Object(n.jsx)(c.a,{exact:!0,path:"/mandelbrot",component:V}),Object(n.jsx)(c.a,{exact:!0,path:"/quadtrees",component:K})]})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.a432a677.chunk.js.map