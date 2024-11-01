import { getOrCreateUserProfile } from '$lib/auth'
import { menuCategoryTable, menuItemTable } from "$lib/db/schema";
import {getAllMenuCategories, getMenuItemsByCategory} from '$lib/dashboard'
import { db } from "$lib/db";
import { error } from "@sveltejs/kit";

export const load = async () => {
  let menuCats = await getAllMenuCategories()
  let firstCat = menuCats[0].id;
  let menuItems = await getMenuItemsByCategory(firstCat);
  return {
    menuCats,
    menuItems
  }
}

export const actions = {
  default: async ({ request, locals }) => {
    const userProfile = await getOrCreateUserProfile(locals);
    if (!userProfile) {
      error(401, "You need to be logged in!");
    }
    const data = await request.formData();
    const name = data.get('name');
    const actionType = data.get('actionType');
    if (!actionType) {
      error(401, "You must have filled out the wrong form!")
    }

    if (actionType === 'menuCat') {
      const newCatResult = await db.insert(menuCategoryTable).values({
        name
      }).returning({
        id: menuCategoryTable.id,
        name: menuCategoryTable.name
      });

      return {newCategory: newCatResult[0]};
    }
    else if (actionType === 'menuItem') {
      const description = data.get('description');
      const categoryId = data.get('categoryId');

      const newMenuItemResult = await db.insert(menuItemTable).values({
        name,
        description,
        categoryId
      }).returning({
        id: menuCategoryTable.id,
        name: menuCategoryTable.name,
        description: menuCategoryTable.description
      });

      return {newMenuItem: newMenuItemResult[0]};

    }

  }
}