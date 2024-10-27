import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
  if (!locals.session) {
    throw redirect(303, '/login'); // Redirect if session is missing
  }
  return { session: locals.session };
}