'use server';

import { Resend } from 'resend';
import { Contact } from '@/validators/contact.validator';
import { z } from 'zod';

export async function SendMail(contacts: z.infer<typeof Contact>) {
  const parsedContacts = Contact.safeParse(contacts);
  const resend = new Resend(process.env.RESEND_API);

  if (parsedContacts.error) {
    return { success: false };
  }
  const { email, message, name } = parsedContacts.data;

  try {
    const { data, error } = await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`,
      to: [`${process.env.MY_MAIL}`],
      subject: `Portfolio contact - ${name}`,
      html: `<p>
      From - ${email} <br/>
      ${message}</p>`,
    });

    if (error) {
      console.error('mail not send', error);
      return { success: false };
    }
  } catch (error) {
    console.error('Email send error: ', error);
    return { success: false };
  }
}
