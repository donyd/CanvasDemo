 //alert("JavaScript file is linked properly");



 var c = document.getElementById("myCanvas");
 var ctx = c.getContext("2d");

        // style setup
        ctx.lineWidth = 10;
        // ctx.lineCap = "round";
        ctx.strokeStyle= 'blue';

        // Drawing a line
        // ctx.moveTo(110, 175);
        // ctx.lineTo(520, 200);

        
        
        // Draw a circle
        ctx.arc(c.width/ 2, c.height/2, 80, 1.1 *
                Math.PI, 1.9 * Math.PI, false);

       
        
        // Rendering
        ctx.stroke();


        