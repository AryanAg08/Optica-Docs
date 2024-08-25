import React, { type ReactNode } from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";


type ProfileProps = {
  className?: string;
  name: string;
  position: string;
  children: ReactNode;
  githubUrl: string;
  instagramUrl: string;
};

function TeamProfileCard({
  className,
  name,
  position,
  children,
  githubUrl,
  instagramUrl,
}: ProfileProps) {
  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={`${githubUrl}.png`}
              alt={`${name}'s avatar`}
            />
            <br />
            <div className="avatar__intro">
              <Heading as="h3" className="avatar__name">
                {name} <br/>
                {position}
              </Heading>
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {githubUrl && (
              <Link className="button button--secondary" href={githubUrl}>
                GitHub
              </Link>
            )}
            {instagramUrl && (
              <Link className="button button--secondary" href={instagramUrl}>
                Instagram
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamProfileCardCol(props: ProfileProps) {
  return (
    <TeamProfileCard {...props} className="col col--6 margin-bottom--lg" />
  );
}

export function ActiveTeamRow(): JSX.Element {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Aryan Goyal"
        position="Technical Head"
        githubUrl="https://github.com/AryanAg08"
        instagramUrl="https://www.instagram.com/ag_0080/"
      >
          {
            "Fullstack developer, open source enthusiast, and tech blogger. He loves to contribute to open source."
          }
         </TeamProfileCardCol>

         <TeamProfileCardCol
         name="Shantanu Pandey"
         position="President"
         githubUrl="https://github.com/shantanupandey"
          instagramUrl="https://www.instagram.com/shantanu_pandey_108/"
         >
          {
            "Good Boy!!"
          }
         </TeamProfileCardCol>

      {/* other team members */}
    </div>
  );
}

export function HonoraryAlumniTeamRow(): JSX.Element {
  return (
    <div className="row">
     {/* Alumni Team here!! */}
     <TeamProfileCardCol
     name="Harsh Sharma"
     position="Senior Advisor"
      githubUrl="https://github.com/HarshSharma20503"
      instagramUrl="https://www.instagram.com/x_harsh.sharma_x/"
      >
        {
          "Good Boy!!"
        }
      </TeamProfileCardCol>
    </div>
  );
}
