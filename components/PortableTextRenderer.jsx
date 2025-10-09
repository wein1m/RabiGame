"use client";

import React from "react";
import { PortableText } from "@portabletext/react";

export default function PortableTextRenderer({ value }) {
  const components = {
    types: {
      // add custom block types if you create them
    },
    block: {
      // map Sanity block styles to HTML elements
      h1: ({ children }) => <h1 className="text-4xl">{children}</h1>,
      h2: ({ children }) => <h2 className="text-3xl">{children}</h2>,
      h3: ({ children }) => <h3 className="text-2xl">{children}</h3>,
      h4: ({ children }) => <h4 className="text-xl">{children}</h4>,
      h5: ({ children }) => (
        <h5 className="text-lg font-semibold">{children}</h5>
      ),
      normal: ({ children }) => (
        <p className="my-4 leading-relaxed">{children}</p>
      ),
    },
    marks: {
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
      link: ({ children, value }) => {
        const href = value?.href || "";
        return (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      },
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className="mb-2">{children}</li>,
    },
  };

  return <PortableText value={value} components={components} />;
}
