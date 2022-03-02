import { Link, Outlet } from "react-router-dom";
import { Accordion } from "../components/Accordion/Accordion";
import { TASKS_CATEGORIES } from "../consts/data";
import { resolveTitle } from "../utils/resolveTitle";
import { resolveTasksForCategory } from "../utils/taskCategoriesUtils";

import "./pages.css";

type TaskPageProps = {
  categories: string[];
};

export const TasksPage = ({ categories }: TaskPageProps) => {
  return (
    <main>
      <h1>Kategorie zadań</h1>
      <div className="categories-wrapper">
        {categories.map((category) => (
          <Accordion
            title={resolveTitle(category)}
            content={resolveTasksForCategory(category)}
            defaultState={category === TASKS_CATEGORIES[1] ? true : false}
          />
        ))}
        <Outlet />
      </div>
    </main>
  );
};
