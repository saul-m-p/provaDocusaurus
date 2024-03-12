import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function Home() {
  const { siteConfig } = useDocusaurusContext();

  const handleDownloadPDF = async () => {
    try {
      // Realiza una solicitud GET a la ruta de API en tu servidor Express
      const response = await fetch('/api/convert-md-to-pdf');
      
      // Verifica si la solicitud fue exitosa
      if (!response.ok) {
        throw new Error('La solicitud para convertir Markdown a PDF falló');
      }
      
      // Convierte la respuesta a un blob
      const pdfBlob = await response.blob();

      // Crea una URL del blob para descargar el PDF
      const url = window.URL.createObjectURL(pdfBlob);
      
      // Crea un enlace y simula un clic para iniciar la descarga del PDF
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'documento.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error al descargar el PDF:', error);
    }
  };

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/servicos/servicos">
              Altice Labs 🚀 - make your proyect
            </Link>
            <button className="button button--secondary button--lg" onClick={handleDownloadPDF}>
              Descargar PDF
            </button>
          </div>
        </div>
      </header>
      <main>
        {/* Aquí puedes agregar más contenido si lo necesitas */}
      </main>
    </Layout>
  );
}

export default Home;
