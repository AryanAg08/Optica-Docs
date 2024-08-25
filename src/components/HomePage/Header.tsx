// skipcq: JS-W1028
import React, { useEffect, useRef } from "react";
import "./header.css";
import Link from "@docusaurus/Link";
import VanillaTilt from "vanilla-tilt";

/**
 * Renders the header component of the application.
 * @returns The Header component as a React functional component.
 */

const HeaderContent = () => {
  return (
    <>
    <div className="chh__header-content">
      <h1 className="gradient__text">Welcome to Optica Docs</h1>
      <p>
        This Documentation contains all record Of JIIT OPTICA and its legacy.
      </p>

      <div className="chh__header-content__input">
        <button type="button">
          <Link to="/docs" className="chh__header-content__input--link">
            Get Started
          </Link>
        </button>
        <button type="button">
          <Link to="/courses" className="chh__header-content__input--link">
            Docs
          </Link>
        </button>
      </div>
    </div>
    </>
  );
};

/**
 * Renders the header image component.
 * @returns The header image element.
 */
const HeaderImage = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      VanillaTilt.init(imgRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }

    // Cleanup function to destroy VanillaTilt instance
    return () => {
      if (imgRef.current && imgRef.current.vanillaTilt) {
        imgRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div className="chh__header-image">
      <img
        src="/img/hero-img.png"
        alt="ai"
        className="float-animation"
        data-tilt
        ref={imgRef}
      />
    </div>
  );
};

/**
 * Renders the header component of the application.
 * @returns A header component with styling and structure.
 */
const Header: React.FC = () => {
  return (
    <div className="chh__header--body">
      <div className="chh__header">
        <HeaderContent />
        <HeaderImage />
      </div>
    </div>
  );
};

export default Header;
