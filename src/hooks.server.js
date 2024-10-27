import { supabase } from '$lib/supabase';

export async function handle({ event, resolve }) {
  const session = await supabase.auth.getSession();
  event.locals.session = session;

  const response = await resolve(event);
  return response;
}
