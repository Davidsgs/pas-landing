# PAS (Piedra Angular Solutions) - Landing Page

Bienvenido al repositorio de la Landing Page de PAS (Piedra Angular Solutions), una empresa especializada en servicios de construcción, perforaciones y corte de hormigón.

## Arquitectura y Tecnologías
Este proyecto ha sido desarrollado centrándose en el alto rendimiento, sin depender de librerías ni dependencias pesadas, priorizando la accesibilidad y facilidad de mantenimiento.
* **HTML5 Semántico**: Estructura clara y optimizada para motores de búsqueda (local SEO aplicado a CABA y Buenos Aires).
* **CSS3 Puro**: Uso extensivo de variables nativas (Custom Properties), Flexbox, CSS Grid y animaciones (`@keyframes`).
* **Vanilla JavaScript**: Lógica de interacción fluida (Scroll behavior personalizado, Intersection Observers, conectores de Formularios).

## Características Principales (UI/UX)
* **Scroll Experience Dinámico**: Implementación de CSS Scroll Snapping (`scroll-snap-type`) y Vanilla JS para una navegación impactante que salta por secciones completas (100vh) en pantallas de escritorio.
* **Responsive / Mobile-First**: Los estilos se adaptan perfectamente a dispositivos móviles. El scroll snapping y los listeners estrictos de rueda/gestos se desactivan escaladamente en pantallas pequeñas (`< 768px`) para garantizar un deslizamiento nativo y confiable, previniendo el efecto "rubber-banding" o el rebote del marco con `overscroll-behavior-y`.
* **Animaciones Interseccionales al Hacer Scroll**: Uso del `IntersectionObserver` API para mostrar elementos progresivamente y de forma elegante (`fade-up`, `fade-left`) a medida que van entrando a la pantalla.
* **Formulario WhatsApp con Validadores en Tiempo Real**: Captura dinámica de datos y consultas mediante inputs que advierten visualmente la cantidad de caracteres restantes permitidos. Transfiere limpiamente la consulta codificada como URL a la API de WhatsApp, usando saludos y formatos pre-definidos.
* **Estilo Rústico y Moderno Consistente**: Identidad construida bajo una paleta estricta:
  * Primario (Acentos/CTAs): `#F49600` (Naranja industrial)
  * Secundario (Textos puros): `#5F5E5E` (Gris oscuro)
  * Fondo/Claro (Áreas de lectura): `#F2F4F6` (Gris muy claro)
* **Tipografías**: `Poppins` para los títulos e impacto y `Outfit` para cuerpos y accesibilidad en texto plano.

## Ejecución Local
Al ser un proyecto 100% estático (Frontend Vanilla), no requiere servidor, base de datos ni compiladores.
1. Clona el repositorio.
2. Abre el archivo `index.html` directamente en tu navegador.
3. Puedes utilizar extensiones de pre-visualización en vivo (como *Live Server* en VSCode) para editar el código iterativamente.

---
**Desarrollado con altos estándares de Código, UI y Copywriting para la maximización del flujo de usuarios.**
