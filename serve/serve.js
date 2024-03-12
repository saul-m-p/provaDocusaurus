// server.js

const express = require('express');
const markdownpdf = require('markdown-pdf');
const fs = require('fs');
const path = require('path');

const app = express();

// Ruta para convertir Markdown a PDF
app.get('/api/convert-md-to-pdf', (req, res) => {
  const markdownFilePath = '/path/to/markdown/file.md';
  const pdfFilePath = '/path/to/save/pdf/file.pdf';

  const options = {
    cssPath: path.join(__dirname, 'styles.css'), // Opcional: estilos personalizados
  };

  markdownpdf(options)
    .from(markdownFilePath)
    .to(pdfFilePath, () => {
      // Enviar el archivo PDF como respuesta
      res.sendFile(pdfFilePath);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
