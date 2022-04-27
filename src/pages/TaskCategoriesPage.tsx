import { Outlet } from "react-router-dom";
import { Accordion } from "../components/Accordion/Accordion";
import { TASKS_DATA } from "../consts/data";
import { resolveTitle } from "../utils/resolveTitle";

import "./pages.css";

type TaskPageProps = {
  taskData: any[];
};

export const TaskCategoriesPage = ({ taskData }: TaskPageProps) => {
  return (
    <main>
      <div className="title--center">
        <h1>Kategorie zadań</h1>
      </div>

      <div className="categories-wrapper">
        {taskData.map((item) => (
          <Accordion
            key={item.category}
            title={resolveTitle(item.category)}
            content={item.tasksInCategory}
            defaultState={item.category === TASKS_DATA[0].category ? true : false}
          />
        ))}
        <Outlet />
      </div>
    </main>
  );
};
