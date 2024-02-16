import React from "react";

type AccordionItemPropsType = {
  id: string;
  selected: boolean;
  question: string;
  answer: string;
  showItem: () => void;
};

export function AccordionItem(props: AccordionItemPropsType) {
  const onClickHandler = props.showItem;

  return (
    <div key={props.id}>
      <h3>
        {props.question}
        <span onClick={onClickHandler}>+</span>
      </h3>
      <p>{props.selected && props.answer}</p>
    </div>
  );
}
