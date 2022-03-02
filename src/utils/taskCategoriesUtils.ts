import { TASKS_CATEGORIES, TASKS_IN_CATEGORY } from "../consts/data";

export const resolveTasksForCategory = (category: string) => {
  switch (category) {
    case TASKS_CATEGORIES[0]:
      return TASKS_IN_CATEGORY[TASKS_CATEGORIES[0]];
    case TASKS_CATEGORIES[1]:
      return TASKS_IN_CATEGORY[TASKS_CATEGORIES[1]];
    case TASKS_CATEGORIES[2]:
      return TASKS_IN_CATEGORY[TASKS_CATEGORIES[2]];
    default:
      return [];
  }
};
