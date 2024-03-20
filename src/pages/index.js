import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React, { useEffect } from "react";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function Home() {
  const { siteConfig } = useDocusaurusContext();

  // Definir la función que se ejecutará al hacer clic en el botón
  const handleGeneratePdfClick = () => {
    fetch("/generatePdf", {
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Asociar la función al evento click del botón
  useEffect(() => {
    const generatePdfButton = document.getElementById("generatePdfButton");
    generatePdfButton.addEventListener("click", handleGeneratePdfClick);

    return () => {
      generatePdfButton.removeEventListener("click", handleGeneratePdfClick);
    };
  }, []);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/servicos/servicos"
            >
              Altice Labs 🚀 - make your proyect
            </Link>
            <button
              id="generatePdfButton"
              className="button button--secondary button--lg"
            >
              Generar PDF
            </button>
          </div>
        </div>
      </header>
      <main>{/* Aquí puedes agregar más contenido si lo necesitas */}</main>
    </Layout>
  );
}

export default Home;
