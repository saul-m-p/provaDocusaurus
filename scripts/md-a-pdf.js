// const markdownpdf = require("markdown-pdf");
// const fs = require("fs");
// const path = require("path");

// // Directorio que contiene los archivos Markdown
// const directorioMarkdown = path.join(__dirname, "docs");

// // Directorio de salida para los archivos PDF
// const directorioPDF = path.join(__dirname, "pdf");

// // Asegurarse de que el directorio de salida exista
// if (!fs.existsSync(directorioPDF)) {
//   fs.mkdirSync(directorioPDF);
// }

// // Opciones de conversión (puedes ajustar según tus necesidades)
// const opciones = {
//   cssPath: path.join(__dirname, "estilos.css"),
// };

// // Función para convertir los archivos Markdown a PDF
// function convertirMarkdownAPDF() {
//   fs.readdir(directorioMarkdown, (err, archivos) => {
//     if (err) {
//       console.error("Error al leer el directorio:", err);
//       return;
//     }

//     archivos.forEach((archivo) => {
//       if (archivo.endsWith(".md")) {
//         const entrada = path.join(directorioMarkdown, archivo);
//         const salida = path.join(directorioPDF, archivo.replace(".md", ".pdf"));

//         markdownpdf(opciones)
//           .from(entrada)
//           .to(salida, function () {
//             console.log(`Archivo PDF generado: ${salida}`);
//           });
//       }
//     });
//   });
// }

// // Llamar a la función para iniciar la conversión
// convertirMarkdownAPDF();
