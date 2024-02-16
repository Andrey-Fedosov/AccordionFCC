import React, { useState } from "react";
import data from "./data";
import { AccordionItem } from "./AccordionItem";
type AccordionPropsType = {
  title: string;
};

//multiselection
//singleselection

export function Accordion(props: AccordionPropsType) {
  const [selected, setSelected] = useState("");
  function showItem(id: string) {
    setSelected(id === selected ? "" : id);
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
