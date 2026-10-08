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

// v5: el paso 1 con los conceptos del test real (nextyou.academy/test/bachillerato-que-estudiar):
// misión «Brújula Interior», 12 preguntas, 8 minutos, sin respuestas correctas ni incorrectas.
export const queV5 = {
  ...queV4,
  // Cada paso cuenta qué haces y qué te llevas, para que se entienda el recorrido entero.
  // PLACEHOLDER: textos de propuesta, a validar con Sara (sin precios ni condiciones del coach).
  pasos: [
    {
      titulo: 'Haces el test: 12 preguntas sobre ti',
      texto: 'Te preguntamos cómo es tu energía, qué te mueve y cómo piensas. Eliges la opción que más se parece a ti: no hay respuestas buenas ni malas.',
      llevas: 'tu arquetipo, es decir, cómo eres y qué te motiva, explicado con palabras normales.',
    },
    {
      titulo: 'Te damos tres recorridos',
      texto: 'Al acabar ves tres recorridos que encajan contigo: el que más te pega, un puente hacia algo parecido y un salto hacia algo que quizá no conocías. Ninguno es «el bueno»: son ideas para explorar.',
      llevas: 'tres profesiones concretas y por qué encajan contigo.',
      // Esquema de los tres caminos (PLACEHOLDER: profesiones de ejemplo)
      ramas: [
        { tipo: 'Lo que más te pega', ejemplo: 'Edición de vídeo', nota: 'encaja con cómo eres hoy' },
        { tipo: 'El puente', ejemplo: 'Diseño UX/UI', nota: 'algo parecido, con un giro' },
        { tipo: 'El salto', ejemplo: 'Sonido para videojuegos', nota: 'quizá ni sabías que existía' },
      ],
    },
    {
      titulo: 'Recibes consejos personalizados',
      texto: 'Según tus resultados, te damos consejos para empezar a explorar cada recorrido y acceso a entrevistas con personas que ya se dedican a ello: qué estudiaron, cómo empezaron y cómo es su día a día.',
      llevas: 'pasos concretos para probar y la experiencia de quien ya está ahí.',
      // Ejemplo con el recorrido «puente» (PLACEHOLDER). Las entrevistas son de gente de «Los de dentro»
      // Cromos de gente de «Los de dentro»: cada uno con su consejo y su vídeo (PLACEHOLDER: textos de ejemplo)
      cromos: [
        { nombre: 'Marta', prof: 'Diseña apps', estudio: 'Bellas Artes', empezo: 'Quería ser veterinaria', consejo: 'Rediseña en papel la app que más usas.' },
        { nombre: 'Mía', prof: 'Diseña experiencias', estudio: 'Turismo', empezo: 'Organizando eventos', consejo: 'Mira qué FP y cursos hay cerca de ti.' },
        { nombre: 'Dani', prof: 'Sonido para videojuegos', estudio: 'FP de Sonido', empezo: 'Probando tres cosas', consejo: 'Graba sonidos de tu casa y móntalos en un vídeo.' },
      ],
    },
    {
      titulo: 'Opción premium: un coach te acompaña',
      texto: 'Para quien quiera ir un paso más allá: sesiones online con un coach para probar esos recorridos en la vida real y decidir qué estudiar.',
      llevas: 'un plan para probar y decidir tú, a tu ritmo.',
      // Videollamada de ejemplo (PLACEHOLDER: coach de muestra, sin foto todavía)
      coach: {
        nombre: 'Laura',
        pregunta: 'De los tres caminos, ¿cuál te dio más energía esta semana?',
        reto: 'Editar un vídeo de 30 segundos sobre tu barrio',
      },
    },
  ],
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
