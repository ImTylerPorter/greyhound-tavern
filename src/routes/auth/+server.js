import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';
import { VITE_SIGNUP_PASSPHRASE } from '$env/static/private';


export async function POST({ request }) {
  const { email, password, confirmPassword, profilePhoto, passphrase } = await request.json();

  // Check if the passphrase matches the server's passphrase
  if (passphrase !== VITE_SIGNUP_PASSPHRASE) {
    return json({ error: 'Invalid passphrase.' }, { status: 403 });
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    return json({ error: 'Passwords do not match.' }, { status: 400 });
  }

  // Create the user
  const { data: signUpData, error: signupError } = await supabase.auth.signUp({ email, password });

  if (signupError) {
    return json({ error: signupError.message }, { status: 400 });
  }

  // If profile photo is provided, upload to storage
  if (profilePhoto) {
    const fileName = profilePhoto.name || 'default_profile.jpg'; // Default name if not provided
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('Website')
      .upload(`public/${signUpData.user.id}/${fileName}`, profilePhoto);

    if (uploadError) {
      return json({ error: uploadError.message }, { status: 500 });
    }

    const publicUrl = supabase.storage.from('Website').getPublicUrl(`public/${signUpData.user.id}/${fileName}`);
    await supabase.auth.updateUser({ data: { profile_photo: publicUrl } });
  }

  return json({ message: 'User signed up successfully!' });


}