const express = require("express");
const { spawn } = require("child_process");
const fs = require("fs");
const app = express();

app.post("/generatePdf", (req, res) => {
  console.log("Solicitud recibida para generar PDF");

  const pandoc = spawn(
    "pandoc",
    [
      "--toc",
      "-o",
      "libro4.pdf", // Se usa "-" para indicar que la salida debe ser dirigida a stdout
      "../title.txt", // Ruta relativa al directorio serve
      "../docs/intro.md", // Ruta relativa al directorio serve
    ],
    {
      cwd: __dirname, // Usa __dirname para especificar el directorio actual donde se encuentra serve.js
    }
  );

  let pdfBuffer = Buffer.from([]);

  pandoc.stdout.on("data", (data) => {
    pdfBuffer = Buffer.concat([pdfBuffer, data]);
  });

  pandoc.stderr.on("data", (data) => {
    console.error("Error en el proceso de Pandoc:", data.toString());
  });

  pandoc.on("close", (code) => {
    console.log(`Proceso de Pandoc finalizado con código ${code}`);
    if (code === 0) {
      const filePath = `${__dirname}/generated.pdf`; // Ruta donde se guardará el PDF en el servidor
      fs.writeFile(filePath, pdfBuffer, (err) => {
        if (err) {
          console.error("Error al guardar el archivo PDF:", err);
          res.status(500).send("Error al guardar el archivo PDF");
        } else {
          console.log("PDF guardado correctamente en:", filePath);
          res.download(filePath, "generated.pdf"); // Envía el archivo PDF como respuesta al cliente
        }
      });
    } else {
      res.status(500).send("Error en el proceso de generación de PDF");
    }
  });
});

app.listen(3000,() => {
  console.log("Servidor iniciado en http://localhost:3000");
});
