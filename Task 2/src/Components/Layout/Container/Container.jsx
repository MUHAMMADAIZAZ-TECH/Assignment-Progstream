import { SectionData, Products } from "@/Components/Mockups/Mockup";
import { Section, ProductBox } from "@/Components/UI-Components";
import React from "react";
export default function Container() {
  return (
    <main>
      {SectionData.map((section, index) => (
        <Section
          key={index}
          Id={section?.Id}
          SectionClass={section?.SectionClass}
          left={section?.left}
          right={section?.right}
          middle={section?.middle}
          HeadingTitle={section?.HeadingTitle}
          HeadingClass={section?.HeadingClass}
          SpanTitle={section?.SpanTitle}
          SpanClass={section?.SpanClass}
          ParagrahText={section?.ParagrahText}
          ParagraphClass={section?.ParagraphClass}
          BoxClass={section?.BoxClass}
          ContentExist={section.Content ? true : false}
          Content={section.Content}
        />
      ))}
      <section id="section-six">
        <div className="products" id="products">
          {Products.map((product, index) => (
            <ProductBox
              key={index}
              path={product.Path}
              className={product.className}
            />
          ))}
        </div>
        <div className="button-section">
          <button className="button-style">Get Quote</button>
        </div>
      </section>
    </main>
  );
}
