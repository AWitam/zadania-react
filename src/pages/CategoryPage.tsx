import { Link, Outlet } from "react-router-dom";
import { resolveTitle } from "../utils/resolveTitle";

type CategoryPageProps = {
  category: string;
  tasks: string[];
};

export const CategoryPage = ({ category, tasks }: CategoryPageProps) => {
  return (
    <main>
      <h1>{resolveTitle(category)}</h1>
      {tasks.map((task) => (
        <Link key={task} to={task}>
          {task}
        </Link>
      ))}
      <Outlet />
    </main>
  );
};
