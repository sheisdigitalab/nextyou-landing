// Contenido propio de la versión 4. Parte de home.ts, familias.ts y universidad.ts
// (que siguen usando la v1, la v2 y la v3) y sobrescribe solo lo que cambia en la v4.
//
// IMPORTANTE: todas las personas, citas y fotos son DE MUESTRA (placeholder: true).

import { noEresElUnico, queEsNextYou } from './home';
import { familiasPagina } from './familias';
import { acompanamiento } from './acompanamiento';
import irene from '../assets/muestra/que-es.jpg';

export const BASE_V4 = 'v4/';

// ---------------------------------------------------------------------------
// Home
// ---------------------------------------------------------------------------
export const unicoV4 = {
  ...noEresElUnico,
  // Voicebook: «No estás perdido: estás buscando pistas». Sin la palabra «perdido».
  titulo: 'Chicos de tu edad que están justo donde tú estás',
  resaltado: 'justo donde tú estás',
  // Lucía (comentario #5 de Sara: la foto no encajaba) pasa a ser un testimonio universitario
  personas: noEresElUnico.personas.map((p, i) =>
    i === 1
      ? {
          placeholder: true,
          nombre: 'Irene',
          edad: 20,
          cita: 'Voy por segundo de carrera y no me veo en esto.',
          foto: irene,
          alt: 'Irene, con jersey mostaza, en la terraza de un café con su portátil.',
          universidad: true,
        }
      : { ...p, universidad: false }
  ),
};

export const queV4 = {
  ...queEsNextYou,
  // «De futuro» sonaba a promesa
  titulo: 'El método para descubrir tus talentos probando profesiones que quizá no conoces con quienes ya trabajan en ellas.',
  pasos: queEsNextYou.pasos.map((p, i) =>
    i === 1 ? { ...p, texto: 'Lo que más te pega, el puente y el salto. Ninguno es «el bueno».' } : p
  ),
};

export const bifurcacion = {
  texto: '¿Ya estás en la universidad o en FP y no te ves en lo tuyo?',
  enlace: 'Esto es para ti',
};

// ---------------------------------------------------------------------------
// Universidad: historias de cambio de rumbo (PLACEHOLDER, sin foto todavía)
// ---------------------------------------------------------------------------
export const historiasUni = {
  etiqueta: 'Cambiaron de rumbo',
  titulo: 'Gente que estudió una cosa y acabó en otra',
  personas: [
    {
      placeholder: true,
      nombre: 'Claudia',
      edad: 27,
      cita: 'Acabé Derecho sabiendo que no quería ejercer.',
      recorrido: ['Estudió Derecho', 'Curso de diseño de producto', 'Ahora diseña muebles'],
    },
    {
      placeholder: true,
      nombre: 'Rubén',
      edad: 26,
      cita: 'Dejé Ingeniería en tercero y no fue un fracaso.',
      recorrido: ['Estudió Ingeniería', 'FP de Sonido', 'Ahora produce pódcast'],
    },
  ],
};

// ---------------------------------------------------------------------------
// Familias: todo en «vosotros»
// ---------------------------------------------------------------------------
export const familiasV4 = {
  ...familiasPagina,
  hero: {
    ...familiasPagina.hero,
    texto:
      'Menos presión y más información para acompañar una decisión importante. Responde vuestro hijo o hija; vosotros recibís lo que decida compartir y una guía para hablarlo en casa.',
  },
  avisoFuturo: 'Así funcionará cuando abramos el test. Si queréis, os avisamos.',
  eleccion: {
    etiqueta: 'Quién hay detrás',
    titulo: 'Cómo elegimos a la gente que sale aquí',
    puntos: [
      'Llevan al menos cinco años en lo suyo.',
      'Comprobamos que trabajan donde dicen.',
      'Ninguno cobra por recomendar una universidad, una carrera o un centro.',
      'Si hace falta un psicólogo y no un coach, lo decimos.',
    ],
    sara: 'Leer la historia de Sara',
  },
};

// Para tener a mano la fuente de los puntos anteriores (prompt «Quién hay detrás»)
export const fuenteEleccion = acompanamiento.eleccion;
