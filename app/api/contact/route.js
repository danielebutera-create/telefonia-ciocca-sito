import { Resend } from "resend";

const DESTINATARIO = "info@telefoniaciocca.it";
const MITTENTE     = "Sito Telefonia Ciocca <noreply@telefoniaciocca.it>";

// Flag: il canale email è attivo solo se RESEND_API_KEY è valida (non placeholder).
// In assenza della key il form fa comunque aprire WhatsApp lato client, e l'API
// ritorna 503 con messaggio esplicito. Sblocca in Gate D (pre-go-live).
function isResendConfigured() {
  const key = process.env.RESEND_API_KEY;
  return typeof key === "string" && key.startsWith("re_") && !key.includes("INSERISCI");
}

export async function POST(request) {
  try {
    const { nome, email, servizio, messaggio } = await request.json();

    // Validazione campi obbligatori
    if (!nome?.trim() || !email?.trim() || !servizio?.trim()) {
      return Response.json(
        { error: "Campi obbligatori mancanti." },
        { status: 400 }
      );
    }

    // Early-return graceful: se la key Resend non è configurata, evitiamo
    // chiamate fallimentari e restituiamo un messaggio pulito. Lato UI il
    // pulsante WhatsApp è comunque già stato aperto in modo sincrono.
    if (!isResendConfigured()) {
      console.warn("[contact/route] RESEND_API_KEY non configurata — canale email disabilitato.");
      return Response.json(
        {
          error: "Canale email momentaneamente non disponibile. La tua richiesta è stata inoltrata via WhatsApp.",
          channel: "whatsapp-only",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Validazione email base
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Indirizzo email non valido." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: MITTENTE,
      to:   DESTINATARIO,
      replyTo: email,
      subject: `[Sito] Nuova richiesta: ${servizio} — ${nome}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0f172a;">

          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1a6fb5 0%, #145a94 100%);
                      padding: 32px 40px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; font-size: 22px; margin: 0; font-weight: 700;">
              Nuova richiesta dal sito
            </h1>
            <p style="color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 14px;">
              Telefonia Ciocca — telefoniaciocca.it
            </p>
          </div>

          <!-- Body -->
          <div style="background: #f8fafc; padding: 32px 40px; border: 1px solid #e2e8f0;
                      border-top: none; border-radius: 0 0 12px 12px;">

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;
                            font-size: 13px; color: #64748b; width: 130px; font-weight: 600;
                            text-transform: uppercase; letter-spacing: 0.05em;">
                  Nome
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;
                            font-size: 15px; color: #0f172a; font-weight: 600;">
                  ${escapeHtml(nome)}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;
                            font-size: 13px; color: #64748b; font-weight: 600;
                            text-transform: uppercase; letter-spacing: 0.05em;">
                  Email
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;
                            font-size: 15px;">
                  <a href="mailto:${escapeHtml(email)}"
                     style="color: #1a6fb5; font-weight: 600; text-decoration: none;">
                    ${escapeHtml(email)}
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;
                            font-size: 13px; color: #64748b; font-weight: 600;
                            text-transform: uppercase; letter-spacing: 0.05em;">
                  Servizio
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="display: inline-block; background: #dbeafe; color: #1a6fb5;
                               padding: 3px 12px; border-radius: 9999px; font-size: 13px;
                               font-weight: 700;">
                    ${escapeHtml(servizio)}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 13px; color: #64748b; font-weight: 600;
                            text-transform: uppercase; letter-spacing: 0.05em;
                            vertical-align: top; padding-top: 16px;">
                  Messaggio
                </td>
                <td style="padding: 10px 0; font-size: 15px; color: #0f172a;
                            line-height: 1.6; padding-top: 16px;">
                  ${messaggio?.trim()
                    ? escapeHtml(messaggio).replace(/\n/g, "<br>")
                    : '<em style="color: #94a3b8;">(nessun messaggio aggiuntivo)</em>'
                  }
                </td>
              </tr>
            </table>

            <!-- CTA risposta rapida -->
            <div style="margin-top: 28px; padding: 20px; background: white;
                        border-radius: 10px; border: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0 0 14px; font-size: 14px; color: #64748b;">
                Rispondi direttamente a questa email per contattare il cliente.
              </p>
              <a href="mailto:${escapeHtml(email)}?subject=Re: ${encodeURIComponent(`Richiesta ${servizio} - Telefonia Ciocca`)}"
                 style="display: inline-block; background: linear-gradient(135deg, #1a6fb5, #145a94);
                        color: white; padding: 12px 28px; border-radius: 8px; font-weight: 700;
                        font-size: 14px; text-decoration: none;">
                Rispondi a ${escapeHtml(nome)}
              </a>
            </div>

            <p style="margin: 24px 0 0; font-size: 12px; color: #94a3b8; text-align: center;">
              Messaggio inviato tramite il form di contatto su telefoniaciocca.it
            </p>
          </div>

        </div>
      `,
    });

    if (error) {
      console.error("[contact/route] Resend error:", error);
      return Response.json(
        { error: "Errore invio email. Riprova o contattaci su WhatsApp." },
        { status: 500 }
      );
    }

    return Response.json({ success: true, id: data?.id }, { status: 200 });

  } catch (err) {
    console.error("[contact/route] Unexpected error:", err);
    return Response.json(
      { error: "Errore interno del server." },
      { status: 500 }
    );
  }
}

// Sanitizzazione HTML per prevenire XSS nel corpo email
function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
