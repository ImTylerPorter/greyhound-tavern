import { getOrCreateUserProfile } from '$lib/auth'
import { menuCategoryTable, menuItemTable } from "$lib/db/schema";
import { getAllMenuCategories, getMenuItemsByCategory } from '$lib/dashboard'
import { db } from "$lib/db";
import { error } from "@sveltejs/kit";
import { eq } from 'drizzle-orm';

export const load = async ({ locals, cookies }) => {

  let activeCat = '';
  let menuCats = await getAllMenuCategories()
  let firstCat = menuCats ? menuCats[0]?.id : '';

  if (locals.catId != '') {
    firstCat = locals.catId
    activeCat = locals.catId
  }
  let menuItems = await getMenuItemsByCategory(firstCat);

  cookies.set('catId', '', { path: '/' })

  return {
    menuCats,
    menuItems,
    activeCat
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

      return { newCategory: newCatResult[0] };
    }
    else if (actionType === 'menuItem') {
      const description = data.get('description');
      const categoryId = data.get('categoryId');
      const order = data.get('order');
      const newMenuItemResult = await db.insert(menuItemTable).values({
        name,
        description,
        categoryId,
        order
      }).returning({
        id: menuItemTable.id,
        name: menuItemTable.name,
        description: menuItemTable.description,
        order: menuItemTable.order
      });

      return { newMenuItem: newMenuItemResult[0] };

    }

    else if (actionType === 'updateMenuItem') {
      const id = data.get('id');
      const description = data.get('description');
      const order = data.get('order');
      console.log('this is order', order)

      const updatedMenuItemResult = await db.update(menuItemTable).set({
        name,
        description,
        order
      }).where(eq(menuItemTable.id, id)).returning({
        id: menuItemTable.id,
        name: menuItemTable.name,
        description: menuItemTable.description,
        order: menuItemTable.order
      });;

      return { updatedMenuItem: updatedMenuItemResult[0] };

    }

  }
}

