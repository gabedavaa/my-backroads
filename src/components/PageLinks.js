import React from "react";
import { pageLinks } from "../data";

function PageLinks({ parentClass, itenClass }) {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={itenClass}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default PageLinks;
