# Pendientes antes de publicar

En el código, cada punto está marcado con `data-placeholder="true"` y un comentario `PLACEHOLDER` o `PENDIENTE`. Para encontrarlos todos: buscar `PLACEHOLDER`, `PENDIENTE` y `data-placeholder`.

## Personas, citas y fotos de muestra (no publicar como reales)

Todas salen de `src/data/home.ts`. Las fotos de `src/assets/muestra/` son siluetas neutras. Cada persona real tiene que firmar la cesión de derechos de imagen.

| Bloque | Qué hay ahora | Qué falta |
|---|---|---|
| Hero | Aisha, 21 · «A los 17 nadie me habló de esto…» · silueta | Persona real, su cita, foto y vídeo |
| No eres el único | Nil 19, Lucía 18, Jan 17, Sofía 18, con cita y silueta | Cuatro personas reales |
| Qué es NextYou | Silueta | Foto real |
| Los de dentro | Marta 34, Dani 27, Iván 41, Mía 29, con silueta | Profesionales reales, sus fotos y sus vídeos |
| Sara | Marcador gris en lugar de la foto | Foto de Sara |
| Sara | Titular y párrafo escritos para la propuesta | Que Sara los valide o los reescriba |

## Contenido sin decidir (la clienta)

- **Destino del botón principal**: `CTA_PRINCIPAL` en `src/config.ts`, ahora `#`. Cambia los cinco botones de «Empezar» a la vez.
- **Línea de precio bajo el botón**: hueco comentado en el hero y en «Cómo funciona».
- **Bloque «Quién hay detrás»** (Insiders gratis y coaches de pago): hueco comentado en `src/pages/index.astro`.
- **Bloque de familias**: hueco comentado en `src/pages/index.astro`.
- **Vídeo del hero**: `hero.video` en `src/data/home.ts`. Al rellenarlo aparecen la pastilla «Ver a …» y el botón de sonido.
- **Vídeos de los profesionales**: las tarjetas muestran la duración pero aún no abren nada.

## Páginas que aún no existen

Todas en `ENLACES` (`src/config.ts`), ahora con `#`: Historias, Profesiones, Para familias, Sobre Sara (también el botón «Leer su historia»), Privacidad y Datos y menores.

## Técnico

- **Dominio**: ahora se publica como vista previa en `https://sheisdigitalab.github.io/nextyou-landing/` (variables `SITE_URL` y `BASE_PATH` del flujo de despliegue). Con el dominio definitivo, cambiar `SITIO.url` en `src/config.ts` y quitar `BASE_PATH`.
- **Textos legales**: los aporta la clienta o su abogado.
- Antes de pasar al dominio definitivo: quitar el aviso de vista previa (`VISTA_PREVIA` en `src/config.ts`), que además pone `noindex`.
