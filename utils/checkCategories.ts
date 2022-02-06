import { Category } from './types';

export const checkCategories = (categoryIds: number[], categories: Category[]) => {
  const categoriesInDb = categories.map(({ id }) => id);

  return categoryIds.every((category) => categoriesInDb.includes(category));
}