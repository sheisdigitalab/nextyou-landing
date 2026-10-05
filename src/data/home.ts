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
  detalle: 'Estudiando UX/UI Design',
  cita: 'A los 17 nadie me habló de esto. Ni sabía que existía.',
  foto: heroAisha,
  alt: 'Aisha, 21 años, con sudadera crema, sentada a una mesa junto a un balcón.',
  // PENDIENTE: vídeo real del hero. Con { src, duracion } aparecen la pastilla
  // "Ver a …" y el botón de sonido; mientras sea null se muestra solo la foto.
  video: null as null | { src: string; duracion: string },
  texto:
    'Nadie te ha enseñado la mitad de las cosas a las que podrías dedicarte. En NextYou te ayudamos a descubrir cuáles te pegan, sin que nadie decida por ti.',
  boton: 'Empezar, es gratis',
  meta: ['8 minutos', 'gratis', 'tres caminos para explorar'],
};

// ---------------------------------------------------------------------------
// Franja en movimiento bajo el hero (solo datos ya dichos en la página)
// ---------------------------------------------------------------------------
export const marquesina = ['8 minutos', 'gratis', 'sin crear cuenta', 'tres caminos para explorar', 'tú decides'];

// ---------------------------------------------------------------------------
// No eres el único
// ---------------------------------------------------------------------------
export const noEresElUnico = {
  etiqueta: 'No eres el único',
  titulo: 'Gente que está exactamente donde tú estás',
  resaltado: 'donde tú estás', // subrayado a mano
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
  etiqueta: 'Qué es NextYou',
  titulo: 'Una plataforma para explorar quién quieres ser.',
  resaltado: 'quién quieres ser.',
  frases: [
    'Te enseñamos trabajos que ni sabías que existían, contados por quien los vive.',
    'Sin prisas, sin etiquetas y sin que nadie decida por ti.',
  ],
  // «Tu jornada»: el resultado del test es un martes posible, con tareas reales
  // y el nombre de quien las hace. Sin puntos ni porcentajes. Solo salen las horas
  // que se han llenado (no se completa). Tareas de ejemplo de 04-mecanica-del-test.
  jornada: {
    titulo: 'Tu martes posible',
    nota: 'esto es lo que te llevas',
    tareas: [
      { hora: '09:30', tarea: 'Llamar a cuatro personas y preguntarles por qué dejaron de usar algo', quien: 'Marta' },
      { hora: '11:00', tarea: 'Inventar el sonido de algo que no existe', quien: 'Dani' },
      { hora: '13:30', tarea: 'Moderar una reunión donde nadie se pone de acuerdo', quien: 'Mía' },
      { hora: '17:00', tarea: 'Buscar por qué un dato no cuadra hasta dar con el motivo', quien: 'Iván' },
    ],
    pie: 'Ejemplo · cada martes sale de lo que tú eliges',
  },
};

// ---------------------------------------------------------------------------
// Los de dentro
// Nadie de aquí puede repetir como persona del hero o de los testimonios.
// ---------------------------------------------------------------------------
export const losDeDentro = {
  etiqueta: 'Los de dentro',
  titulo: 'Profesionales que te enseñan su trabajo por dentro',
  resaltado: 'por dentro',
  texto:
    'Son los Insiders: personas reales en vídeo, no simulaciones. Sin discursos, te cuentan cómo entraron, en qué se equivocaron y cómo es un martes cualquiera.',
  personas: [
    {
      placeholder: true,
      nombre: 'Marta', // en el PDF era "Aisha, 34": misma persona que el hero con otra edad
      edad: 34,
      profesion: 'UX/UI Designer',
      duracion: '2 min',
      foto: dentro1,
      alt: 'Marta, en su mesa de trabajo con bocetos y notas en la pared.',
    },
    {
      placeholder: true,
      nombre: 'Dani',
      edad: 27,
      profesion: 'Sonido para videojuegos',
      duracion: '2 min',
      foto: dentro2,
      alt: 'Dani, en su estudio de sonido, delante de la mesa de mezclas.',
    },
    {
      placeholder: true,
      nombre: 'Iván',
      edad: 41,
      profesion: 'Data Science',
      duracion: '3 min',
      foto: dentro3,
      alt: 'Iván, en una oficina, conversando con una compañera.',
    },
    {
      placeholder: true,
      nombre: 'Mía',
      edad: 29,
      profesion: 'Diseño de experiencias',
      duracion: '4 min',
      foto: dentro4,
      alt: 'Mía, con jersey mostaza, junto a un ventanal.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Cómo funciona
// ---------------------------------------------------------------------------
export const comoFunciona = {
  etiqueta: '¿Cómo funciona?',
  titulo: 'Ocho minutos ahora. Una semana para probarlo. Y decides tú.',
  resaltado: 'Y decides tú.',
  subtitulo: 'Nadie te va a decir lo que tienes que estudiar.',
  pasos: [
    {
      titulo: 'Te prestan un rato de su trabajo',
      texto:
        'Nada de «¿eres creativo?». Ves tareas reales de gente que trabaja en ello y dices qué te parecen: ni de broma, bah, me pega o eso sí. No hay respuestas buenas ni malas y puedes volver atrás.',
      pastillas: ['8 min', 'sin crear cuenta'],
    },
    {
      titulo: 'A mitad te decimos lo que vamos viendo',
      texto:
        'No esperas al final. Te devolvemos tres frases sobre ti, en claro. Y si alguna no te representa, la cambias tú antes de seguir.',
      pastillas: ['30 seg', 'lo corriges tú'],
    },
    {
      titulo: 'Te salen tres caminos, no uno',
      texto:
        'El que más encaja, el puente y el salto. Cada uno con por qué te ha salido, tu martes posible en ese trabajo y el vídeo de alguien que ya está ahí. Ninguno es «el bueno».',
      pastillas: ['se lee en 5 min'],
    },
    {
      titulo: 'Pruebas uno de verdad, una semana',
      texto:
        'Un reto pequeño, gratis, que puedes hacer con lo que ya tienes. Al terminar solo respondes una cosa: ¿me dio energía, o solo me gustaba la idea?',
      pastillas: ['un rato al día', '7 días gratis'],
    },
    {
      titulo: 'Y a partir de ahí, tú decides',
      texto:
        'Te lo guardas, pruebas otro camino, o se lo enseñas a quien tú quieras. Si te apetece hablarlo con alguien, hay coaches. Pero eso ya lo decides tú.',
      pastillas: ['cuando tú quieras'],
    },
  ],
  noVaAPasar: {
    titulo: 'Lo que no va a pasar',
    puntos: [
      'No te vamos a decir qué tienes que estudiar.',
      'No hace falta crear cuenta para empezar.',
      'No se lo mandamos a tus padres. Eso lo decides tú.',
      'No te va a costar nada hasta que tú quieras.',
    ],
  },
  boton: 'Ver mis tres caminos',
  meta: ['8 minutos', 'sin crear cuenta', 'gratis'],
};

// ---------------------------------------------------------------------------
// Quién hay detrás · textos de la documentación del proyecto (prompt «Quién hay detrás»)
// PENDIENTE: precio del acompañamiento con coach, cuando esté definido.
// ---------------------------------------------------------------------------
export const quienHayDetras = {
  etiqueta: 'Quién hay detrás',
  titulo: 'Gente que ya hace lo que tú estás pensando hacer.',
  resaltado: 'ya hace',
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
