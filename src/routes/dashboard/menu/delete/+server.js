import { db } from '$lib/db';
import { eq } from 'drizzle-orm';
import { menuItemTable } from '$lib/db/schema';
import { error } from '@sveltejs/kit';

export async function GET({ request, cookies }) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  const catId = url.searchParams.get('catId');
  cookies.set('catId', catId, { path: '/' })
  try {
    // Convert itemId to UUID type if needed, then delete
    // @ts-ignore
    await db.delete(menuItemTable).where(eq(menuItemTable.id, id));
    return new Response(null, { status: 303, headers: { Location: `/dashboard/menu`, 'catId': { catId } } });

  } catch (err) {
    console.error('Error deleting menu item:', err);
    throw error(500, 'Failed to delete menu item');
  }
};