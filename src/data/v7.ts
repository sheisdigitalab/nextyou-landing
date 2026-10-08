// Versión 7: correcciones de la reunión con la clienta (2026-10-08).
// Textos de propuesta: PENDIENTE CLIENTA validar antes de publicar como definitivos.

export const queEsV7 = {
  lema: 'La plataforma para que explores tu camino profesional.',
  resaltado: 'tu camino profesional',
  // Máximo 4 líneas, directo, sin frases filosóficas
  texto:
    // PENDIENTE CLIENTA: validar
    'Un test y una comunidad para descubrir qué profesiones conectan contigo antes de decidir qué estudiar. Gratis y desde el móvil.',
};

export const comoV7 = {
  titulo: 'Cómo funciona',
  frase: 'De no saber qué estudiar a saber qué quieres probar.',
  resaltado: 'quieres probar',
  email: 'Todo lo que recibes te llega por email.',
  // Mapa de los cuatro pasos (enlaza a cada uno): título corto y detalle
  indice: [
    { t: 'Un test', d: '8 minutos', ic: 'test' },
    { t: '3 caminos', d: 'que encajan contigo', ic: 'caminos' },
    { t: 'Gente real', d: 'que ya está ahí', ic: 'persona' },
    { t: 'Un coach', d: 'opción premium', ic: 'coach' },
  ],
  pasos: [
    {
      titulo: 'Haces el test',
      texto: '¿Cómo es tu energía? Eliges lo que más se parece a ti y en 8 minutos tienes tu perfil.',
      meta: '8 min · 12 preguntas',
    },
    {
      titulo: 'Recibes 3 recorridos',
      texto: 'Al acabar, recibes 3 recorridos que encajan contigo: el que más te pega, un puente hacia algo conocido y un salto hacia algo nuevo.',
      meta: 'te llegan por email',
    },
    {
      titulo: 'Recibes consejos y entrevistas',
      texto: 'Según tus resultados, recibes consejos personalizados y acceso a entrevistas con personas reales que ya se dedican a ello: qué estudiaron, cómo empezaron y cómo es su día a día.',
      meta: 'cada semana, por email',
    },
    {
      titulo: 'Opción premium: un coach te acompaña',
      texto: 'Para quien quiera ir un paso más allá: sesiones online con un coach para probar tus recorridos en la vida real y decidir qué estudiar.',
      meta: 'opción premium',
    },
  ],
  // Bocadillo de la videollamada del coach (la clienta proponía «de los 6 caminos»; se deja en 3 para que cuadre con el paso 2)
  pregunta: '¿Cuál de los 3 caminos te dio más energía esta semana?',
};

// Textos de «Cómo funciona» de la v7 (revisión 2026-10-08). Se separan de comoV7 para no cambiar
// la versión B de la página de comparación /como-funciona/, que se generó con comoV7.
export const pasosV7 = {
  pasos: [
    {
      titulo: 'Haces el test',
      texto: '¿Cómo es tu energía? Eliges lo que más se parece a ti y en 8 minutos tienes tu perfil. Solo te pedimos tu email para mandarte los resultados.',
      meta: '8 min · 12 preguntas',
    },
    {
      titulo: 'Recibes 3 caminos',
      texto: 'Al acabar, recibes 3 caminos que encajan contigo: el que más te pega, un puente hacia algo conocido y un salto hacia algo nuevo.',
    },
    {
      titulo: 'Hablas con gente real',
      texto: 'Según tus resultados, recibes consejos y acceso a entrevistas con personas que ya se dedican a ello: qué estudiaron, cómo empezaron y cómo es su día a día.',
    },
    {
      titulo: 'Un coach te acompaña',
      texto: 'Para quien quiera ir un paso más allá: sesiones online con un coach para probar tus caminos en la vida real y decidir qué estudiar.',
    },
  ],
  pregunta: 'De tus 3 caminos, ¿cuál te apetece probar primero?',
  micro: '8 minutos · gratis · te mandamos tus resultados por email',
};

// «No eres el único» en la v7 (solo bachillerato). PLACEHOLDER: personas de muestra
export const unicoV7Cambios: Record<string, { cita: string; edad: number }> = {
  Nil: { cita: 'Tengo que elegir en mayo y no tengo ni idea.', edad: 17 },
  Irene: { cita: 'Mis amigos lo tienen claro y yo no.', edad: 18 },
};

// «La uni no es el único camino»: tercer ejemplo (PLACEHOLDER)
export const hugoV7 = {
  placeholder: true,
  nombre: 'Hugo',
  edad: 22,
  cita: 'Hice una FP al acabar bachillerato y no me arrepiento.',
  recorrido: ['Bachillerato', 'FP de Desarrollo de apps', 'Ahora programa videojuegos'],
};
