import { Link, Outlet } from "react-router-dom";
import { resolveTitle } from "../utils/resolveTitle";

type CategoryPageProps = {
  taskName: string;
  nodes: JSX.Element;
};

export const TaskPage = ({ taskName, nodes }: CategoryPageProps) => {
  return (
    <main>
      <h1>{resolveTitle(taskName)}</h1>
      {nodes}
      <Outlet />
    </main>
  );
};
