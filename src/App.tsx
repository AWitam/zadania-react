import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { TasksPage } from "./pages/TasksPage";
import { CategoryPage } from "./pages/CategoryPage";
import { TASKS_CATEGORIES } from "./consts/data";
import { resolveTasksForCategory } from "./utils/taskCategoriesUtils";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route index element={<HomePage />} />

        <Route
          path="zadania"
          element={<TasksPage categories={TASKS_CATEGORIES} />}
        ></Route>
        {TASKS_CATEGORIES.map((category) => (
          <Route
            key={category}
            path={`zadania/${category}`}
            element={
              <CategoryPage
                category={category}
                tasks={resolveTasksForCategory(category)}
              />
            }
          />
        ))}
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
