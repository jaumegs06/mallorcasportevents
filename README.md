# 🏋️ FITNESS SUMMIT 2026 - Landing Page

Una landing page moderna y dinámica para un evento de fitness masivo, creada con las mejores tecnologías web.

## 🚀 Stack Tecnológico

- **Framework:** Next.js 15 (App Router)
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Lenguaje:** TypeScript
- **Font:** Inter (Google Fonts)

## 🎨 Características de Diseño

### Visual Vibe - Dark Mode Agresivo
- **Fondo:** Negro profundo (#050505) y gris oscuro (#0a0a0a)
- **Acentos de Neón:**
  - Verde Lima (#39ff14)
  - Cian Eléctrico (#00ffff)
  - Naranja Quemado (#ff6b35)
- **Efectos:**
  - Glassmorphism (transparencias borrosas)
  - Gradientes neón
  - Glowing effects
  - Animaciones fluidas con Framer Motion

## 📦 Componentes Principales

### 1. **Navbar Sticky** (`components/navbar/`)
- Logo animado con gradiente
- Enlaces de navegación con efectos hover
- Botón CTA destacado "Comprar Tickets"
- Efecto glassmorphism con backdrop-blur al hacer scroll
- Menú móvil responsive

### 2. **Hero Section** (`components/hero/`)
- Título masivo animado con gradiente neón
- **Countdown Timer funcional** con cuenta regresiva al evento
- Botones CTA con efectos hover y animaciones
- Orbes de gradiente animados en el fondo
- Badges informativos del evento
- Responsive y optimizado

### 3. **Speakers** (`components/speakers/`)
- Grid responsive de tarjetas
- Imágenes de alta calidad con overlay gradiente
- Efecto hover: escala y elevación
- Iconos sociales (Instagram, LinkedIn)
- Animaciones de entrada secuenciales

### 4. **Agenda** (`components/agenda/`)
- Sistema de tabs para cambiar entre días
- Lista de sesiones con horarios
- Información de instructores y duración
- Animaciones de transición entre días
- Efectos hover en cada sesión

### 5. **Tickets** (`components/tickets/`)
- 3 niveles de precios: General, VIP, Premium
- Tarjeta VIP destacada con escala mayor
- Bordes con gradientes de color
- Lista de características incluidas
- Botones CTA personalizados por tier
- Badge de "Más Popular"

## 🎯 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build para producción
npm run build

# Ejecutar en producción
npm start

# Linting
npm run lint
```

## 📂 Estructura del Proyecto

```
papasproject/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales + tema
├── components/
│   ├── navbar/
│   │   └── Navbar.tsx      # Navbar sticky
│   ├── hero/
│   │   └── Hero.tsx        # Hero + Countdown
│   ├── speakers/
│   │   └── Speakers.tsx    # Grid de speakers
│   ├── agenda/
│   │   └── Agenda.tsx      # Tabs de agenda
│   └── tickets/
│       └── Tickets.tsx     # Pricing cards
├── public/                  # Assets estáticos
├── next.config.ts          # Config de Next.js
└── package.json
```

## 🎨 Utilidades CSS Personalizadas

El archivo `globals.css` incluye clases personalizadas:

- `.gradient-neon` - Fondo con gradiente neón
- `.gradient-neon-text` - Texto con gradiente neón
- `.glow-neon-green` - Efecto glow verde
- `.glow-neon-cyan` - Efecto glow cian
- `.glass` - Efecto glassmorphism

## 🌐 Variables CSS Personalizadas

```css
--color-dark: #050505
--color-darker: #0a0a0a
--color-neon-green: #39ff14
--color-neon-cyan: #00ffff
--color-neon-orange: #ff6b35
--color-neon-purple: #b026ff
```

## 🔧 Configuración de Imágenes

Las imágenes externas están configuradas en `next.config.ts` para permitir Unsplash:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
}
```

## 📱 Responsive Design

Todos los componentes están optimizados para:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## ✨ Animaciones Framer Motion

- **Hero:** Fade-in con stagger en elementos
- **Navbar:** Slide down desde arriba
- **Speakers:** Fade-in secuencial con escala en hover
- **Agenda:** Transiciones suaves entre tabs
- **Tickets:** Entrada con delay escalonado
- **Orbes de fondo:** Movimiento continuo y orgánico

## 🎯 Próximos Pasos Sugeridos

1. Reemplazar las imágenes de Unsplash con fotos reales de los speakers
2. Conectar los botones CTA a un sistema de tickets real
3. Añadir una sección de Footer con redes sociales
4. Implementar sección de sponsors/partners
5. Agregar formulario de suscripción a newsletter
6. Integrar Google Analytics o similar
7. Optimizar SEO con metadatos dinámicos
8. Añadir animaciones de scroll reveal adicionales

## 📄 Licencia

Este proyecto es un ejemplo educativo para demostrar capacidades de desarrollo frontend moderno.

---

**Desarrollado con ❤️ usando Next.js 15, Tailwind CSS y Framer Motion**
