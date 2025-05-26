// import React, { useState, useRef } from "react";
// import "./MemeGenerator.css";

// const MemeGenerator = () => {
//   const [topText, setTopText] = useState("");
//   const [bottomText, setBottomText] = useState("");
//   const [image, setImage] = useState(null);
//   const [topTextSize, setTopTextSize] = useState(30);
//   const [bottomTextSize, setBottomTextSize] = useState(30);
//   const [textColor, setTextColor] = useState("#FFFFFF");
//   const [strokeColor, setStrokeColor] = useState("#000000");
//   const [animate, setAnimate] = useState(false);
//   const canvasRef = useRef(null);

//   const handleImageUpload = (e) => {
//     const reader = new FileReader();
//     reader.onload = function (event) {
//       const img = new Image();
//       img.onload = () => {
//         setImage(img);
//         drawMeme(img);
//       };
//       img.src = event.target.result;
//     };
//     reader.readAsDataURL(e.target.files[0]);
//   };

//   const drawMeme = (img) => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//     ctx.lineWidth = 2;
//     ctx.textAlign = "center";

//     ctx.font = `${topTextSize}px Impact`;
//     ctx.fillStyle = textColor;
//     ctx.strokeStyle = strokeColor;
//     ctx.fillText(topText.toUpperCase(), canvas.width / 2, topTextSize + 10);
//     ctx.strokeText(topText.toUpperCase(), canvas.width / 2, topTextSize + 10);

//     ctx.font = `${bottomTextSize}px Impact`;
//     ctx.fillText(
//       bottomText.toUpperCase(),
//       canvas.width / 2,
//       canvas.height - 20
//     );
//     ctx.strokeText(
//       bottomText.toUpperCase(),
//       canvas.width / 2,
//       canvas.height - 20
//     );
//   };

//   const generateMeme = () => {
//     if (image) {
//       drawMeme(image);
//     }
//   };

//   const downloadMeme = () => {
//     if (!image) return;

//     // Trigger animation
//     setAnimate(true);

//     // Create download link after a small delay to allow animation to start
//     setTimeout(() => {
//       const link = document.createElement("a");
//       link.download = "meme.png";
//       link.href = canvasRef.current.toDataURL();
//       link.click();

//       // Reset animation after it completes
//       setTimeout(() => setAnimate(false), 1000);
//     }, 100);
//   };

//   return (
//     <div className="container">
//       <div className={`content ${animate ? "bubble-animate" : ""}`}>
//         <h1>Meme Generator</h1>
//         <input type="file" accept="image/*" onChange={handleImageUpload} />
//         <br />
//         <input
//           type="text"
//           placeholder="Top Text"
//           value={topText}
//           onChange={(e) => setTopText(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Bottom Text"
//           value={bottomText}
//           onChange={(e) => setBottomText(e.target.value)}
//         />
//         <br />
//         <label>Top Text Size: </label>
//         <input
//           type="number"
//           value={topTextSize}
//           onChange={(e) => setTopTextSize(Number(e.target.value))}
//         />
//         <label>Bottom Text Size: </label>
//         <input
//           type="number"
//           value={bottomTextSize}
//           onChange={(e) => setBottomTextSize(Number(e.target.value))}
//         />
//         <br />
//         <label>Text Color: </label>
//         <input
//           type="color"
//           value={textColor}
//           onChange={(e) => setTextColor(e.target.value)}
//         />
//         <label>Stroke Color: </label>
//         <input
//           type="color"
//           value={strokeColor}
//           onChange={(e) => setStrokeColor(e.target.value)}
//         />
//         <br />
//         <button onClick={generateMeme}>Generate Meme</button>
//         <button onClick={downloadMeme}>Download Meme</button>
//         <br />
//         <canvas ref={canvasRef} width={500} height={500}></canvas>

//         {/* Animation element */}
//         {animate && <div className="bubble"></div>}
//       </div>
//     </div>
//   );
// };

// export default MemeGenerator;

import React, { useState, useRef } from "react";
import "./MemeGenerator.css";

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [image, setImage] = useState(null);
  const [topTextSize, setTopTextSize] = useState(30);
  const [bottomTextSize, setBottomTextSize] = useState(30);
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [animate, setAnimate] = useState(false);
  const canvasRef = useRef(null);

  const handleImageUpload = (e) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = () => {
        setImage(img);
        drawMeme(img);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const drawMeme = (img) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 2;
    ctx.textAlign = "center";

    ctx.font = `${topTextSize}px Impact`;
    ctx.fillStyle = textColor;
    ctx.strokeStyle = strokeColor;
    ctx.fillText(topText.toUpperCase(), canvas.width / 2, topTextSize + 10);
    ctx.strokeText(topText.toUpperCase(), canvas.width / 2, topTextSize + 10);

    ctx.font = `${bottomTextSize}px Impact`;
    ctx.fillText(
      bottomText.toUpperCase(),
      canvas.width / 2,
      canvas.height - 20
    );
    ctx.strokeText(
      bottomText.toUpperCase(),
      canvas.width / 2,
      canvas.height - 20
    );
  };

  const generateMeme = () => {
    if (image) {
      drawMeme(image);
    }
  };

  const downloadMeme = () => {
    if (!image) return;

    // Trigger animation
    setAnimate(true);

    // Create download link after a small delay to allow animation to start
    setTimeout(() => {
      const link = document.createElement("a");
      link.download = "meme.png";
      link.href = canvasRef.current.toDataURL();
      link.click();

      // Reset animation after it completes
      setTimeout(() => setAnimate(false), 2000);
    }, 300);
  };

  return (
    <div className={`container ${animate ? "bubble-background" : ""}`}>
      <div className="content">
        <h1>Meme Generator</h1>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <br />
        <input
          type="text"
          placeholder="Top Text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
        <br />
        <label>Top Text Size: </label>
        <input
          type="number"
          value={topTextSize}
          onChange={(e) => setTopTextSize(Number(e.target.value))}
        />
        <label>Bottom Text Size: </label>
        <input
          type="number"
          value={bottomTextSize}
          onChange={(e) => setBottomTextSize(Number(e.target.value))}
        />
        <br />
        <label>Text Color: </label>
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
        <label>Stroke Color: </label>
        <input
          type="color"
          value={strokeColor}
          onChange={(e) => setStrokeColor(e.target.value)}
        />
        <br />
        <button onClick={generateMeme}>Generate Meme</button>
        <button onClick={downloadMeme}>Download Meme</button>
        <br />
        <canvas ref={canvasRef} width={500} height={500}></canvas>
      </div>

      {/* Background bubbles that appear during download */}
      {animate && (
        <>
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
          <div className="bubble bubble-5"></div>
        </>
      )}
    </div>
  );
};

export default MemeGenerator;
