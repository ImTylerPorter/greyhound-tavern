import { db } from "$lib/db";
import { menuCategoryTable } from "$lib/db/schema";

export const getAllMenuCategories = async () => {
  try {
    const result = await db.select().from(menuCategoryTable);
    return result;
  } catch (error) {
    console.error("Error fetching menu categories:", error);
    return null; // Or handle error in a way suitable for your application
  }
}