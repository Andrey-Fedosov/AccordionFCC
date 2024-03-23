import React, { useState } from "react";
import data from "./data";
import "./styles.css";

import { AccordionItem } from "./AccordionItem";
type AccordionPropsType = {
  title: string;
};

//multiselection
//singleselection

export function Accordion(props: AccordionPropsType) {
  const [selected, setSelected] = useState("");

  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  const [multiple, setMultiple] = useState<Array<string>>([]);

  function showSingleItem(id: string) {
    setSelected(id === selected ? "" : id);
  }

  function showMultiItems(id: string) {
    const copyMultiple = [...multiple];
    const indexOfCurrentId = copyMultiple.indexOf(id);

    indexOfCurrentId === -1
      ? copyMultiple.push(id)
      : copyMultiple.splice(indexOfCurrentId, 1);

    setMultiple(copyMultiple);
    setMultiple([...]);

    

    // multiple.map((i) =>
    //   i !== id ? [i, ...multiple] : multiple.filter((i) => i !== id)
    // );
    // multiple.length === 0
    //   ? console.log("array is empty")
    //   : multiple.map((i) =>
    //       i === id
    //         ? [id, ...multiple]
    //         : console.log(multiple, `there is such element`)
    //     );
  }

  return (
    <div className="wrapper">
      <button
        className="btn-switch-selection"
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
          alert(
            `multiselection mode is ${enableMultiSelection ? "off" : "on"}`
          );
        }}
      >
        Switch multiselection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((d) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => showMultiItems(d.id)
                    : () => showSingleItem(d.id)
                }
              >
                <h3>{d.question}</h3>
                <span>+</span>
              </div>

              {enableMultiSelection
                ? multiple.indexOf(d.id) !== -1 && (
                    <div className="answer">{d.answer}</div>
                  )
                : selected === d.id && <div className="answer">{d.answer}</div>}
              {/* <div>
                  <div className="answer">
                    {selected === d.id ? d.answer : null}
                  </div>
                </div> */}
            </div>
          ))
        ) : (
          <div> No Data </div>
        )}

        {/* // <AccordionItem
          //   id={d.id}
          //   selected={selected}
          //   question={d.question}
          //   answer={d.answer}
          //   showItem={showItem}
          // /> */}
      </div>
    </div>
  );
}
