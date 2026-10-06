// Contenido de la home. Para cambiar textos, se cambian aquí.
//
// IMPORTANTE: todas las personas, citas y fotos de este archivo son DE MUESTRA
// (placeholder: true). No se puede publicar ninguna como si fuera real.
// Antes de publicar, cada una se sustituye por una persona real que haya
// firmado la cesión de derechos de imagen.

import heroAisha from '../assets/muestra/hero-aisha.jpg';
import testNil from '../assets/muestra/testimonio-nil.jpg';
import testLucia from '../assets/muestra/testimonio-lucia.jpg';
import testJan from '../assets/muestra/testimonio-jan.jpg';
import testSofia from '../assets/muestra/testimonio-sofia.jpg';
import dentro1 from '../assets/muestra/dentro-1.jpg';
import dentro2 from '../assets/muestra/dentro-2.jpg';
import dentro3 from '../assets/muestra/dentro-3.jpg';
import dentro4 from '../assets/muestra/dentro-4.jpg';

// ---------------------------------------------------------------------------
// Hero
// La pastilla del vídeo y la cita salen de la MISMA persona: un solo objeto.
// ---------------------------------------------------------------------------
export const hero = {
  placeholder: true,
  nombre: 'Aisha',
  edad: 21,
  detalle: 'Hoy estudia diseño UX/UI',
  cita: 'A los 17 nadie me habló del diseño UX/UI. Ni sabía que existía.', // sin «esto» (Sara)
  foto: heroAisha,
  alt: 'Aisha, 21 años, con sudadera crema, sentada a una mesa junto a un balcón.',
  // PENDIENTE: vídeo real del hero. Con { src, duracion } aparecen la pastilla
  // "Ver a …" y el botón de sonido; mientras sea null se muestra solo la foto.
  video: null as null | { src: string; duracion: string },
  // h1: lo que es NextYou, con las palabras que busca la gente («no sé qué estudiar»,
  // «test vocacional gratis»). Comentario #3 de Sara: que se entienda qué es.
  titular: '¿No sabes qué estudiar? Haz el test gratis y descubre a qué te podrías dedicar.',
  texto:
    'Nadie te ha enseñado la mitad de las cosas a las que podrías dedicarte. En 8 minutos te salen tres caminos para explorar, contados por gente que ya trabaja en ellos.',
  // v3: sin la primera frase, que ya dice «No eres el único» justo debajo
  textoCorto: 'En 8 minutos te salen tres caminos para explorar, contados por gente que ya trabaja en ellos.',
  boton: 'Haz el test gratis',
  meta: ['8 minutos', 'gratis', 'tres caminos para explorar'],
};

// ---------------------------------------------------------------------------
// No eres el único
// ---------------------------------------------------------------------------
export const noEresElUnico = {
  etiqueta: 'No eres el único',
  titulo: 'Chicos de tu edad que se sienten igual de perdidos que tú',
  resaltado: 'igual de perdidos', // subrayado a mano
  subtitulo: 'Es normal: nadie te ha contado todo lo que existe. Nosotros te lo enseñamos.',
  personas: [
    {
      placeholder: true,
      nombre: 'Nil',
      edad: 19,
      cita: 'Elegí por la nota, no porque me gustara.',
      foto: testNil,
      alt: 'Nil, con gafas y chaqueta verde, de brazos cruzados en un parque.',
    },
    {
      placeholder: true,
      nombre: 'Lucía',
      edad: 18,
      cita: 'En casa nadie sabía aconsejarme.',
      foto: testLucia,
      alt: 'Lucía, con camisa de cuadros, apoyada en una barandilla roja.',
    },
    {
      placeholder: true,
      nombre: 'Jan',
      edad: 17,
      cita: 'Me da pánico equivocarme y perder años.',
      foto: testJan,
      alt: 'Jan, con camiseta negra, pensativo junto a una pared de piedra.',
    },
    {
      placeholder: true,
      nombre: 'Sofía',
      edad: 18,
      cita: 'Todo el mundo opina y nadie me pregunta.',
      foto: testSofia,
      alt: 'Sofía, con chaqueta roja en una calle con gente, mira a cámara.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Qué es NextYou · reducido a tres frases (antes repetía los cinco pasos)
// ---------------------------------------------------------------------------
export const queEsNextYou = {
  // Comentarios #6-#9 y #12 de Sara: en modo pregunta con el logo, otro fondo, su titular
  // y una demo visual del producto en lugar de frases y del paso a paso con texto.
  titulo: 'El método para descubrir tus talentos probando profesiones de futuro con quienes ya trabajan en ellas.',
  resaltado: 'probando',
  // PENDIENTE: revisar con el esquema resumen de la última web de Elias cuando lo tengamos.
  pasos: [
    { titulo: 'Juegas unas misiones', texto: 'Tareas reales de profesionales. Tú dices si te apetecen.', tiempo: '8 min · gratis' },
    { titulo: 'Te salen tres caminos', texto: 'El que más encaja, el puente y el salto. Ninguno es «el bueno».', tiempo: 'sin crear cuenta' },
    { titulo: 'Conoces a quien ya está ahí', texto: 'Vídeos de profesionales que te enseñan su día a día.', tiempo: '2-3 min por vídeo' },
    { titulo: 'Un coach te acompaña, si quieres', texto: 'Sesiones online para explorar a tu ritmo y decidir tú.', tiempo: 'opcional' },
  ],
  respuestas: ['ni de broma', 'bah', 'me pega', 'eso sí'],
  caminos: ['El que más encaja', 'El puente', 'El salto'],
  noVaAPasar: [
    'No te decimos qué tienes que estudiar.',
    'No hace falta crear cuenta para empezar.',
    'No se lo mandamos a tus padres.',
    'No cuesta nada hasta que tú quieras.',
  ],
  boton: 'Haz el test gratis',
};

// ---------------------------------------------------------------------------
// Los de dentro
// Nadie de aquí puede repetir como persona del hero o de los testimonios.
// Las citas vienen del prompt «Quién hay detrás» del repositorio de diseño (de muestra).
// ---------------------------------------------------------------------------
export const losDeDentro = {
  etiqueta: 'Los de dentro',
  titulo: 'Profesionales que te cuentan cómo llegaron y cómo es su día a día',
  resaltado: 'su día a día', // va a rotulador en lima, como el «YOU» del logo
  texto:
    'Son los Insiders: personas reales en vídeo, no simulaciones. Sin discursos, te cuentan cómo entraron, en qué se equivocaron y cómo es un martes cualquiera.',
  personas: [
    {
      placeholder: true,
      nombre: 'Marta', // en el PDF era "Aisha, 34": misma persona que el hero con otra edad
      edad: 34,
      profesion: 'UX/UI Designer',
      cita: 'A los 17 quería ser veterinaria.',
      duracion: '2 min',
      video: null as string | null, // PENDIENTE: clip de noviembre (ruta al .mp4)
      subtitulos: null as string | null, // PENDIENTE: subtítulos del clip (ruta al .vtt)
      foto: dentro1,
      alt: 'Marta, en su mesa de trabajo con bocetos y notas en la pared.',
    },
    {
      placeholder: true,
      nombre: 'Dani',
      edad: 27,
      profesion: 'Sonido para videojuegos',
      cita: 'Probé tres cosas antes de dar con esta.',
      duracion: '2 min',
      video: null as string | null, // PENDIENTE: clip de noviembre (ruta al .mp4)
      subtitulos: null as string | null, // PENDIENTE: subtítulos del clip (ruta al .vtt)
      foto: dentro2,
      alt: 'Dani, en su estudio de sonido, delante de la mesa de mezclas.',
    },
    {
      placeholder: true,
      nombre: 'Iván',
      edad: 41,
      profesion: 'Data Science',
      cita: 'Entré por la puerta de atrás y sin carrera.',
      duracion: '3 min',
      video: null as string | null, // PENDIENTE: clip de noviembre (ruta al .mp4)
      subtitulos: null as string | null, // PENDIENTE: subtítulos del clip (ruta al .vtt)
      foto: dentro3,
      alt: 'Iván, en una oficina, conversando con una compañera.',
    },
    {
      placeholder: true,
      nombre: 'Mía',
      edad: 29,
      profesion: 'Diseño de experiencias',
      cita: 'Estudié algo que no tiene nada que ver.',
      duracion: '4 min',
      video: null as string | null, // PENDIENTE: clip de noviembre (ruta al .mp4)
      subtitulos: null as string | null, // PENDIENTE: subtítulos del clip (ruta al .vtt)
      foto: dentro4,
      alt: 'Mía, con jersey mostaza, junto a un ventanal.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Quién hay detrás · textos de la documentación del proyecto (prompt «Quién hay detrás»)
// PENDIENTE: precio del acompañamiento con coach, cuando esté definido.
// ---------------------------------------------------------------------------
export const quienHayDetras = {
  etiqueta: 'Quién hay detrás',
  titulo: 'Gente que ya hace lo que tú estás pensando hacer.',
  subtitulo: 'Ninguno te va a decir qué estudiar. Te van a contar cómo es por dentro.',
  tarjetas: [
    {
      pastilla: 'Gratis',
      icono: 'dentro',
      titulo: 'Los Insiders',
      texto:
        'Profesionales que graban cómo es su trabajo de verdad: cómo entraron, en qué se equivocaron y cómo es un martes cualquiera.',
      puntos: ['Vídeos de 2 o 3 minutos', 'Están en cada camino que te sale', 'No hace falta pagar nada para verlos'],
    },
    {
      pastilla: 'Si tú quieres',
      icono: 'lado',
      titulo: 'Los coaches',
      texto:
        'Si después de probar quieres hablarlo con alguien, tienes sesiones con una persona que te acompaña mientras decides.',
      puntos: ['Una sesión al mes, online', 'Lo que cuentas ahí es tuyo', 'Lo dejas cuando quieras'],
    },
  ],
};

// ---------------------------------------------------------------------------
// Familias · franja discreta (texto del prompt de la landing del repositorio de diseño)
// PENDIENTE: página /familias.
// ---------------------------------------------------------------------------
export const familias = {
  titulo: '¿Eres madre o padre y has llegado hasta aquí?',
  texto: 'Hay una página para ti, con el método, qué datos guardamos y cómo acompañar sin decidir en su lugar.',
  boton: 'Ir a la página de familias',
};

// ---------------------------------------------------------------------------
// Por qué existe esto · Sara (persona real, fundadora)
// PENDIENTE: texto escrito para la propuesta; validarlo con Sara antes de publicar.
// ---------------------------------------------------------------------------
export const sara = {
  etiqueta: 'Por qué existe esto',
  titulo: 'Tardé diez años en llegar a un trabajo que ni sabía que existía',
  resaltado: 'ni sabía que existía',
  texto:
    'Nadie me contó que había más caminos. Fui dando tumbos, perdí tiempo y dinero, y acabé bien de casualidad. Monté esto para que tú no tengas que hacer el camino largo.',
  firma: '— Sara',
  boton: 'Leer su historia',
  cargo: 'Fundadora de NextYou',
  // PENDIENTE: la foto de Sara aún no existe. Mientras sea null se ve un marcador.
  foto: null,
};

// ---------------------------------------------------------------------------
// Pie
// ---------------------------------------------------------------------------
export const pie = {
  lema: 'Tu futuro no se adivina. Se explora.',
};
