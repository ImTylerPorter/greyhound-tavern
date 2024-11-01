import { getOrCreateUserProfile } from '$lib/auth'
import { menuCategoryTable } from "$lib/db/schema";
import {getAllMenuCategories} from '$lib/dashboard'
import { db } from "$lib/db";
import { error } from "@sveltejs/kit";
import { eq } from "drizzle-orm";


export const load = async () => {
  let menuCats = await getAllMenuCategories()
  return {
    menuCats
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

    const newCatResult = await db.insert(menuCategoryTable).values({
      name
    }).returning({
      id: menuCategoryTable.id,
      name: menuCategoryTable.name
    });


    await db.query.profileTable.findFirst({
      where: eq(menuCategoryTable.id, newCatResult[0].id),
    });

    return {newCategory: newCatResult[0]};

  }
}