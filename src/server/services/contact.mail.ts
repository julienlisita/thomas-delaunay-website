// src/server/services/contact.mail.ts

const brevoApiKey = process.env.BREVO_API_KEY;

// Tu peux réutiliser ADMIN_NOTIFICATION_EMAIL (comme les réservations)
// ou définir une variable dédiée CONTACT_NOTIFICATION_EMAIL.
const contactNotificationEmail =
  process.env.CONTACT_NOTIFICATION_EMAIL ?? process.env.ADMIN_NOTIFICATION_EMAIL;

type SendContactAdminEmailInput = {
  civilite?: string;
  prenom: string;
  nom: string;
  email: string;
  message: string;
  adminEmailOverride?: string;
};

export async function sendContactAdminEmail({
  civilite,
  prenom,
  nom,
  email,
  message,
  adminEmailOverride,
}: SendContactAdminEmailInput): Promise<boolean> {
  if (!brevoApiKey) {
    console.warn('[sendContactAdminEmail] BREVO_API_KEY manquante, email non envoyé');
    return false;
  }

  const targetAdminEmail = adminEmailOverride ?? contactNotificationEmail;
  if (!targetAdminEmail) {
    console.warn(
      '[sendContactAdminEmail] CONTACT_NOTIFICATION_EMAIL/ADMIN_NOTIFICATION_EMAIL manquante, email non envoyé'
    );
    return false;
  }

  const fullName = `${prenom} ${nom}`;
  const displayName = civilite ? `${civilite} ${fullName}` : fullName;

  const htmlContent = `
    <h2>Nouvelle demande de contact</h2>
    <p><strong>De :</strong> ${displayName}</p>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Message :</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
    <hr />
    <p>Email envoyé automatiquement depuis le formulaire de contact du site.</p>
  `;

  const textContent = [
    'Nouvelle demande de contact',
    '',
    `De : ${displayName}`,
    `Email : ${email}`,
    '',
    'Message :',
    message,
    '',
    'Email envoyé automatiquement depuis le formulaire de contact du site.',
  ].join('\n');

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': brevoApiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Contact',
          // idéalement domaine vérifié côté Brevo
          email: 'no-reply@julienlisita.com',
        },
        to: [{ email: targetAdminEmail }],
        // Important: pour pouvoir répondre directement au client depuis la boîte admin
        replyTo: { email, name: displayName },
        subject: 'Nouveau message – Formulaire de contact',
        htmlContent,
        textContent,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => '');
      console.error('[sendContactAdminEmail] Brevo HTTP error', response.status, errorText);
      return false;
    }

    const json = await response.json().catch(() => null);
    console.log('[sendContactAdminEmail] email envoyé via Brevo', json);
    return true;
  } catch (err) {
    console.error('[sendContactAdminEmail] erreur réseau ou Brevo', err);
    return false;
  }
}
