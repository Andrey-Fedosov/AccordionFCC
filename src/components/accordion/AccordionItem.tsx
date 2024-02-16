import React from "react";

type AccordionItemPropsType = {
  id: string;
  selected: string;
  question: string;
  answer: string;
  showItem: (id: string) => void;
};

export function AccordionItem(props: AccordionItemPropsType) {
  return (
    <div key={props.id}>
      <h3>{props.question}</h3>
      <span onClick={() => props.showItem(props.id)}>+</span>
      <p>{props.selected === props.id ? props.answer : null}</p>
    </div>
  );
}
