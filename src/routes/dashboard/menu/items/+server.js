import { getMenuItemsByCategory} from '$lib/dashboard'

export async function GET({ request }) {
  const url = new URL(request.url);
  const id = url.searchParams.get('catId');
  if (!id) {
      return new Response(JSON.stringify({ error: 'No category ID provided' }), { status: 400 });
  }

  const menuItems = await getMenuItemsByCategory(id);
  return new Response(JSON.stringify({ success: true, menuItems }), {
      headers: { 'Content-Type': 'application/json' }
  });
}