import React, { useEffect, useRef } from "react";

const CanvasAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    var matrixString =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";

    let matrix = matrixString.split("");

    var font_size = 10;
    var columns = c.width / font_size; // number of columns for the rain
    var drops = [];
    // Initialize the drops array with random values
    for (var x = 0; x < columns; x++) {
      drops[x] = Math.floor((Math.random() * c.height) / font_size);
    }

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = "##ed9960"; // green text
      ctx.font = font_size + "px arial";

      for (var i = 0; i < drops.length; i++) {
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > c.height && Math.random() > 0.975)
          drops[i] = 0;

        drops[i]++;
      }
    }

    setInterval(draw, 80);
  }, []);

  return (
    <canvas
      style={{
        opacity: 0.2,
        position: "fixed",
        height: "100vh",
        width: "100vw",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
      ref={canvasRef}
    />
  );
};

export default CanvasAnimation;
