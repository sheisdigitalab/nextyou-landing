// Ajustes globales de la web. Lo que cambia a menudo vive aquí.

export const SITIO = {
  nombre: 'NextYou',
  // PENDIENTE: dominio definitivo. Se usa para las URL absolutas de Open Graph.
  url: 'https://nextyou.example',
  titulo: 'NextYou · Descubre a qué te podrías dedicar',
  descripcion:
    'Orientación vocacional para chicos de 16 a 21 años. Ocho minutos, gratis y sin crear cuenta: tres caminos para explorar, sin que nadie decida por ti.',
};

// Pide a los buscadores que no indexen la web mientras sea una vista previa.
// Poner a false al publicar en el dominio definitivo.
export const NO_INDEXAR = true;

// Ruta base de la web ("/" en el dominio definitivo). Para enlaces internos.
export const BASE = (import.meta.env?.BASE_URL ?? '/').replace(/\/?$/, '/');

// Destino del botón principal. Todos los botones de "Empezar" leen de aquí.
// PENDIENTE: decidir con la clienta (lista de espera, contacto u otro).
export const CTA_PRINCIPAL = {
  href: '#',
};

// Enlaces internos. Las que llevan '#' aún no existen: cuando existan, cambiar el href aquí.
export const ENLACES = {
  historias: '#', // PENDIENTE: página fase posterior (/historias)
  profesiones: '#', // PENDIENTE: página fase posterior (/profesiones)
  familias: `${BASE}familias/`,
  sara: '#', // PENDIENTE: página fase posterior (/sara)
  privacidad: '#', // PENDIENTE: página fase posterior (/legal)
  menores: '#', // PENDIENTE: página fase posterior (/legal)
};
