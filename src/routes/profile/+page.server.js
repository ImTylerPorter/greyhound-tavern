import { getOrCreateUserProfile } from '$lib/auth'
import { error } from "@sveltejs/kit";
import { db } from "$lib/db";
import { profileTable } from "$lib/db/schema";
import { eq } from "drizzle-orm";

export const load = async ({ locals }) => {
  const userProfile = await getOrCreateUserProfile(locals)
  return {
    userProfile
  }
}

export const actions = {
  default: async ({ request, locals }) => {
    const userProfile = await getOrCreateUserProfile(locals);

    if (!userProfile) {
      error(401, "You need to be logged in!");
    }

    const data = await request.formData();
    const email = data.get('email');
    const firstName = data.get('firstName') ?? '';
    const lastName = data.get('lastName') ?? '';
    const profilePhoto = data.get('profilePhoto');

    await db.update(profileTable).set({
      firstName,
      lastName
    }).where(eq(profileTable.id, userProfile.id));


    if (profilePhoto && profilePhoto instanceof File) {
      console.log(profilePhoto.name)
      const fileName = profilePhoto.name || 'default_profile.jpg'; // Default name if not provided
      const { data: uploadData, error: uploadError } = await locals.supabase.storage
         .from('images')
         .upload(`${fileName}`, profilePhoto, {
          metadata: { userId: userProfile.id }
        });

       if (uploadError) {
        error(401, uploadError.message);
      }

      const publicUrl = locals.supabase.storage
      .from('images')
      .getPublicUrl(fileName).data.publicUrl;

      await db.update(profileTable).set({
        profilePhoto: publicUrl,
      }).where(eq(profileTable.id, userProfile.id));

    }


  }
}