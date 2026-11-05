import { profile } from "./portfolio.js";

export const inquirySubject = "Consulta desde el portfolio";
export const inquiryMessage =
  "Hola Nicolas, te contacto desde tu portfolio. Me gustaría consultarte por un proyecto web.\n\nMi nombre:\nMi negocio o proyecto:\nQué necesito desarrollar:";

export const contactLinks = {
  whatsapp: `${profile.whatsapp}?text=${encodeURIComponent(inquiryMessage)}`,
  email: `mailto:${profile.email}?subject=${encodeURIComponent(inquirySubject)}&body=${encodeURIComponent(inquiryMessage)}`,
};
