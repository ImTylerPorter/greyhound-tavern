import { db } from "$lib/db";
import { menuCategoryTable, menuItemTable } from "$lib/db/schema";
import { eq } from "drizzle-orm";

export const getAllMenuCategories = async () => {
  try {
    const result = await db.select().from(menuCategoryTable);
    return result;
  } catch (error) {
    console.error("Error fetching menu categories:", error);
    return null; // Or handle error in a way suitable for your application
  }
}

export const getMenuItemsByCategory = async (categoryId) => {
  if (!categoryId) {
    return '';
  }

  try {
    // Query the database for menu items that match the given categoryId
    const items = await db.select().from(menuItemTable)
      .where(eq(menuItemTable.categoryId, categoryId));

    return items;
  } catch (error) {
    console.error("Error fetching menu items by category", error)
  }
}