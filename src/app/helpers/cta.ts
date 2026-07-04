import { WHATSAPP_URL } from "../constants";

export function buildWhatsAppLink({
  name,
  phoneNumber,
  collection,
}: {
  name: string;
  phoneNumber: string;
  collection: string;
}) {
  const cleanPhone = phoneNumber.replace(/\D/g, "");
  let message = `Hi, my name is ${name} (${cleanPhone}).`;

  if (collection) {
    if (collection === "undecided") {
      message += ` I'm interested in your collections. Could you share more details?`;
    } else {
      message += ` I'm interested in the ${collection.toUpperCase()} collection. Could you share more details?`;
    }
  } else {
    message += ` I'm interested to visit. Could you set up a meeting?`;
  }

  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
