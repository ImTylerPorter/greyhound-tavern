import { db } from '$lib/db';
import { eq } from 'drizzle-orm';
import { menuItemTable } from '$lib/db/schema';
import { error } from '@sveltejs/kit';

export async function GET({ request }) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  try {
    // Convert itemId to UUID type if needed, then delete
    // @ts-ignore
    await db.delete(menuItemTable).where(eq(menuItemTable.id, id));
    return new Response(null, { status: 303, headers: { Location: "/dashboard/menu" } });

  } catch (err) {
    console.error('Error deleting menu item:', err);
    throw error(500, 'Failed to delete menu item');
  }
};