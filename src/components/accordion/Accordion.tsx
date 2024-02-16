import React, { useState } from "react";
import data from "./data";
import { AccordionItem } from "./AccordionItem";
type AccordionPropsType = {
  title: string;
};

//singleselection
//multiselection

export function Accordion(props: AccordionPropsType) {
  const [selected, setSelected] = useState(false);
  function showItem() {
    setSelected(!selected);
  }

  return (
    <div>
      {data.map((d) => (
        <AccordionItem
          id={d.id}
          selected={selected}
          question={d.question}
          answer={d.answer}
          showItem={showItem}
        />
      ))}
    </div>
  );
}
