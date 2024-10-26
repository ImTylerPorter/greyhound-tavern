import Mailgun from 'mailgun.js';
import formData from 'form-data';  // Make sure to import form-data

import { VITE_MAILGUN_API_KEY, VITE_EMAIL_TO } from '$env/static/private'; // Import server-side env variables

// Initialize Mailgun
const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: 'api', key: VITE_MAILGUN_API_KEY });

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {

    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    // Simple bot protection using a honeypot field
    if (data.get('_honey_pot')) {
      throw error(400, 'Sorry, not today bot!');
    }

    // Validate form fields
    if (!name) {
      throw error(400, 'Name is missing');
    }

    if (!email) {
      throw error(400, 'Email is missing');
    }

    if (!message) {
      throw error(400, 'Message is missing');
    }

    try {
      // Prepare email data
      const mailgunData = {
        from: `${name} <${email}>`,
        to: VITE_EMAIL_TO,  // Use the server-side env variable for the recipient
        subject: 'New Contact Form Submission',
        text: `From: ${name} (${email})\n\n${message}`
      };

      // Uncomment the following line to send the email
      await mg.messages.create('sandboxc6fe94f30eb741b4af19a6e43da69e4a.mailgun.org', mailgunData);

      return { success: true, message: 'Message sent successfully.' };
    } catch (err) {
      console.error(err); // Log the error for debugging
      throw error(500, 'Failed to send message');
    }
  }
};
