import { Outlet } from "react-router-dom";
import { resolveTitle } from "../utils/resolveTitle";

type CategoryPageProps = {
  taskName: string;
  nodes: JSX.Element;
};

export const TaskPage = ({ taskName, nodes }: CategoryPageProps) => {
  return (
    <main>
      <div className="title--center">
        <h1>{resolveTitle(taskName)}</h1>
      </div>

      {nodes}
      <Outlet />
    </main>
  );
};
