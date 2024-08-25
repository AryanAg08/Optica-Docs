import React from 'react';
import Layout from '@theme/Layout';


import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Translate from '@docusaurus/Translate';


const TITLE =
  'OPTICA: An all-in-one Docs for everything';
const DESCRIPTION =
  'Unleash your creativity and expertise with our exceptional Site/Templates/Projects Showcase at CodeHarborHub: Where Innovation Meets Inspiration.';
const EDIT_URL =
  'https://github.com/AryanAg08/Optica-Docs';

type UserState = {
  scrollTopPosition: number;
  focusedElementId: string | undefined;
};

export function prepareUserState(): UserState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    };
  }

  return undefined;
}

function ShowcaseHeader() {
  return (
   <>
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
      <a
        className="button button--primary"
        href={EDIT_URL}
        target="_blank"
        rel="noreferrer"
      >
        <Translate id="showcase.header.button">
          🌟 JIIT OPTICA STUDENT CHAPTER
        </Translate>
      </a>
    </section>
   </>
  );
}

export default function Showcase(): JSX.Element {
  return (
    <Layout
      title={"Showcase of Optica Docs"}
      description="Showcase of Optica Docs"
    >
      <main className="margin-vert--lg">
        <ShowcaseHeader />
       
      </main>
    </Layout>
  );
}