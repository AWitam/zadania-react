import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { TaskCategoriesPage } from "./pages/TaskCategoriesPage";
import { TaskPage } from "./pages/TaskPage";
import { TASKS_DATA } from "./consts/data";
import { mapTaskToElement } from "./utils/mapTaskToElement";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="zadania"
          element={<TaskCategoriesPage taskData={TASKS_DATA} />}
        ></Route>
        {TASKS_DATA.map((item: any) => {
          return item.tasksInCategory.map((task: string) => (
            <Route
              path={`zadania/${task}`}
              element={
                <TaskPage taskName={task} nodes={mapTaskToElement(task)} />
              }
            />
          ));
        })}
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
