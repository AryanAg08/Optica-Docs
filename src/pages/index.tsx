import clsx from "clsx";
// import Link from "@docusaurus/Link";
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import Courses from "../components/HomePage/Courses";
import { DocsData } from "../database/home";
import Header from "../components/HomePage/Header";



export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Optica Docs`}
      description="Welcome to Jiit Optica Docs. Learn the basics of the Club and work with others and more."
    >
      <main className={styles.main__home}>
        <div className={styles.home__header}>
          <Header />
        </div>

        <hr className={styles.home__hr} />

        <div className={styles.home__divider}>
          <Heading as="h2">Docs Available</Heading>
        </div>

        <Courses courses={DocsData} />

        {/* <div className={styles.home__divider}>
          <Heading as="h2">Features of {siteConfig.title}</Heading>
        </div> */}

        {/* <Features features={featuresData} /> */}

      </main>
    </Layout>
  );
}
