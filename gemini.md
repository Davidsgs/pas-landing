# Contexto del Proyecto
Actúa como un Desarrollador Frontend Senior, experto en UX/UI y Copywriting. Tu tarea es generar el código completo para la landing page de "PAS (Piedra Angular Solutions)", una empresa especializada en servicios de construcción, perforaciones y corte de hormigón.

Aplica estrictamente las siguientes skills durante todo el desarrollo: `concise-planning`, `lint-and-validate`, `git-pushing`, `frontend-design`, `seo-audit`, `ui-ux-pro-max`, `mobile-design` y `scroll-experience`.

## 1. Arquitectura Técnica
* **Archivos:** Genera la estructura clásica en 3 archivos separados: `index.html`, `styles.css` y `script.js`. Todo debe estar optimizado para hostearse en GitHub Pages.
* **Tecnologías:** HTML5 semántico, CSS3 puro (puedes usar variables nativas y Flexbox/Grid) y Vanilla JavaScript. No uses frameworks pesados.

## 2. Identidad Visual y Diseño (UI/UX Pro Max)
* **Estilo:** Rústico/Industrial, pero con una ejecución moderna, limpia y altamente profesional.
* **Colores (Uso estricto):**
    * Primario: `#F49600` (Naranja industrial - para CTAs, acentos y logotipos).
    * Secundario: `#5F5E5E` (Gris oscuro - para textos principales, fondos contrastantes o footers).
    * Fondo/Claro: `#F2F4F6` (Gris muy claro - para fondos de secciones y mantener la lectura limpia).
* **Tipografías:** `Poppins` para los títulos (H1, H2, H3) y `Outfit` para los párrafos y textos secundarios. Importarlas desde Google Fonts.
* **Logo:** Utiliza la ruta `./references/logo.svg` para todas las instancias del logo.

## 3. Estructura de la Landing y Scroll Experience
Basado en los wireframes provistos, la página debe tener las siguientes secciones:

* **Header y Hero Section (Impacto inicial):**
    * *Scroll-experience:* Al cargar la página, el logo debe estar grande y centrado en la vista principal. Al hacer scroll hacia abajo, el logo debe transicionar suavemente (animación CSS/JS) hacia el header fijo en la parte superior izquierda, y aparecer la navegación (Inicio, Nosotros, Servicios, Contáctanos).
    * *Mensaje principal:* "Soluciones que sostienen estructuras".
* **Galería / Imágenes de Trabajo:**
    * Una sección limpia y visual donde se muestren imágenes de los trabajos realizados (usa placeholders de imágenes de construcción/industriales por ahora).
* **Servicios (Interacciones Hover):**
    * Muestra tarjetas o bloques para los servicios: Perforaciones H° A°, Sellado de Juntas, Boca de Ataque, Anclajes, Químico y Mecánico, Flexibilidad Operativa.
    * *Interacción:* Al hacer hover sobre cada servicio, debe aparecer una descripción breve y persuasiva del mismo.
* **Formulario de Contacto (WhatsApp):**
    * Campos: Nombre, Servicio de interés y Consulta.
    * *Funcionalidad:* Usa JavaScript para interceptar el `submit` del formulario. Debe construir una URL de la API de WhatsApp (`wa.me/numero`) que abra el chat con un mensaje predefinido.
    * *Mensaje predefinido:* "¡Hola, equipo de PAS! Mi nombre es [Nombre]. Vi sus excelentes trabajos y me interesa cotizar un servicio de [Servicio]. Mi consulta es: [Consulta]. ¡Espero su respuesta para empezar a trabajar juntos!" (Deja el número de teléfono como una variable constante fácil de editar en el JS).

## 4. Copywriting y SEO Audit
* **Copywriting:** Redacta textos profesionales, persuasivos y orientados a la conversión para las secciones de "Nosotros" y descripciones de "Servicios". El tono debe transmitir seguridad, solidez y experiencia en el rubro de la construcción.
* **SEO:** Optimiza las etiquetas meta del HTML (Title, Description). 
    * *Keywords a incluir en el copy y metas:* Perforaciones en hormigón armado, sellado de juntas, anclajes químicos y mecánicos, corte de hormigón.
    * *Localización:* Enfoca el SEO local para "Buenos Aires", "Ciudad Autónoma de Buenos Aires (CABA)", e incluye menciones a cobertura en "Gran Buenos Aires (Zona Oeste/Ituzaingó)" para abarcar todo el radio de operación.

## Entregables
Proporciona el código completo y listo para producción de los archivos `index.html`, `styles.css` y `script.js`.

# Funcionalidad: Section Scrolling e Indicador de Scroll
Por favor, actualiza el código de la landing page de PAS para implementar un "Section Scrolling" fluido y un indicador visual en la vista principal. Sigue manteniendo el enfoque de HTML y CSS puro.

Aplica las skills: `scroll-experience`, `ui-ux-pro-max`, `frontend-design` y `mobile-design`.

## 1. Implementación de CSS Scroll Snapping
* Configura el contenedor principal (el `<body>` o un `<main>` envolvente) para que actúe como el contenedor de scroll:
  * Debe tener `height: 100vh;` y `overflow-y: scroll;`.
  * Aplica `scroll-snap-type: y mandatory;` para que el scroll se detenga exactamente al inicio de cada sección.
  * Asegúrate de ocultar las barras de scroll predeterminadas si es posible para un look más limpio, manteniendo la funcionalidad.
* Configura cada `<section>` (`#inicio`, `#nosotros`, `#servicios`, `#proyectos`, `#contacto`):
  * Deben ocupar el 100% del alto de la pantalla (`min-height: 100vh;`).
  * Aplica `scroll-snap-align: start;` para que el "snap" se fije en la parte superior de cada bloque al scrollear.

## 2. Indicador Visual de Scroll (Hero Section)
* En la sección `#inicio` (Hero), agrega un elemento visual en la parte inferior central para indicar que hay más contenido abajo.
* **Diseño:** Puede ser un ícono de un mouse con la rueda moviéndose, o una flecha doble hacia abajo (puedes usar Google Material Symbols que ya está en el head del HTML).
* **Animación:** Crea una animación en CSS puro con `@keyframes` (por ejemplo, `bounce` o `scroll-down`) que haga que el ícono suba y baje suavemente de forma infinita para llamar la atención del usuario.
* El color del ícono debe ser el naranja primario (`#F49600`) o blanco con un poco de opacidad, para que contraste bien con el fondo oscuro del hero.

---

# Historial de Modificaciones y Fixes de Arquitectura (Guía de Referencia Futura)

Para futuros mantenimientos y modificaciones sobre esta landing page, el agente debe considerar las siguientes implementaciones vigentes en el código original que resolvieron fricciones severas de UX (User Experience) y fallos con las APIs web móviles. Todo debe mantenerse intacto si se desea refactorizar:

## 1. Animaciones por Intersección (Intersection Observer)
*   Las animaciones de los distintos bloques de contenido en las vistas visuales no ocurren de forma estática apenas carga el dom, sino a medida que entran progresivamente a cámara. 
*   **Implementación Base:** Los tags cuentan con clases CSS de base como `.fade-up` y `.fade-left` con opacidad y traslación inactiva para ocultarlas detrás del view port (`.animate-on-scroll`). Al colisionar e ingresar en rango activo, un `IntersectionObserver` inyecta la clase detonadora y reactiva temporal `.show` subiendo inmediatamente su visibilidad a 1 con transiciones fluidas.  

## 2. Adaptación de Scroll Móvil Nativos y Parche Webkit (< 768px breakpoints)
Inesperadamente en dispositivos touch y safari-iOS menores a 768px, el *Snap scrolling* implementado junto con los bloqueadores y listeners JS para anular la rueda/pad, creaban severos conflictos de rubber-banding bounce obligando al div principal a un loop inacabable. Si alguna vez hay fricción con iOS Safari, no modifique el DOM entero sin antes leer esto:
*   **Decisión Táctica - Bypass de Navegación Custom JS:** Dentro de `script.js` cualquier función que obligue a emparejar ventanas, calcular posiciones wheelDelta e invalidar el default se bloqueó inteligentemente tras detectar si `window.innerWidth <= 768`. ¡Dejemos respirar el UX táctil del teléfono!
*   **Overscroll Bypass Global:** `overscroll-behavior-y: none;` está configurado para la visión Desktop (html/body o `:root`), anulándola condicionalmente en un Mobile layout para lograr scroll normal y predecible.

## 3. Comportamiento en Textareas de Formulario
El formulario hacia WhatsApp (`#contacto`) no servía por culpa del listener "WheelDeta/DOMMouseScroll".
*   El usuario al tratar de releer su propio *String* de +50 líneas escrolleando hacia abajo **accionaba por accidente un salto entero de pantalla**, arrojando el documento hacia el Footer/otra Sección.
*   **Mitigación Prevista (¡A NO ROMPER!):** Todo bloque en JS enfocado en interceptar la posición o las ruedas incluye explícitamente y al mero tope la sintaxis protectora de early exit: `if (event.target.tagName.toLowerCase() === 'textarea') return;`.

## 4. Estructura HTML Semántica y Cierre de Etiquetas
A veces un desarrollador o agente puede inadvertidamente quitar un div (`</div>`) de cierre. Se tuvo que refactorizar de nuevo un gran tramo del formulario de WhatsApp ya que este error rompía por completo `document.getElementById` lo que imposibilitaba conectar selectores HTML al flujo asíncrono en JavaScript para los contadores y triggers de envíos. Siempre verifica de forma atómica.