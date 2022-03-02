import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { resolveTitle } from "../../utils/resolveTitle";
import "./accordion.css";

type AccordionProps = {
  title: string;
  content: string[];
  defaultState?: boolean;
};
export const Accordion = ({ title, content, defaultState }: AccordionProps) => {
  const [isOpen, setOpen] = useState(defaultState || false);

  return (
    <div key={title} className="accordion-item">
      <div className="accordion-item__header" onClick={() => setOpen(!isOpen)}>
        <p>{title}</p>
        <button onClick={() => setOpen(!isOpen)}>{isOpen ? "➖" : "➕"}</button>
      </div>
      <div className="accordion-item__content">
        {isOpen
          ? content.map((item) => (
              <div key={item}>
                <Link to={item}>{resolveTitle(item)}</Link>
              </div>
            ))
          : null}
      </div>
      <Outlet />
    </div>
  );
};
