# 🎨 Guía de Personalización - Fitness Summit

Esta guía te ayudará a personalizar la landing page según tus necesidades.

## 🎨 Cambiar Paleta de Colores

Edita `app/globals.css` en la sección `@theme inline`:

```css
@theme inline {
  --color-neon-green: #39ff14;    /* Verde principal */
  --color-neon-cyan: #00ffff;     /* Cian principal */
  --color-neon-orange: #ff6b35;   /* Naranja principal */
  --color-neon-purple: #b026ff;   /* Púrpura (no usado aún) */
}
```

## 📅 Actualizar Fecha del Evento

En `components/hero/Hero.tsx`, línea 9:

```typescript
const eventDate = new Date("2026-06-15T09:00:00");
```

Cambia la fecha al formato: `"YYYY-MM-DDTHH:mm:ss"`

## 👥 Modificar Speakers

En `components/speakers/Speakers.tsx`, actualiza el array `speakers`:

```typescript
const speakers: Speaker[] = [
  {
    id: 1,
    name: "TU NOMBRE",
    specialty: "Tu Especialidad",
    image: "URL_DE_IMAGEN",
    instagram: "https://instagram.com/tu_usuario",
    linkedin: "https://linkedin.com/in/tu_perfil",
  },
  // Añade más speakers...
];
```

### Fuentes de Imágenes Recomendadas:
- **Unsplash:** `https://images.unsplash.com/photo-ID?w=400&h=400&fit=crop`
- **Tu servidor:** Coloca imágenes en `/public/speakers/` y usa `/speakers/nombre.jpg`

## 📋 Personalizar Agenda

En `components/agenda/Agenda.tsx`, modifica el array `schedule`:

```typescript
const schedule: DaySchedule[] = [
  {
    day: "DÍA 1",
    date: "15 Junio",
    sessions: [
      {
        time: "09:00",
        title: "Nombre de la Sesión",
        instructor: "Nombre del Instructor",
        duration: "1h",
      },
      // Más sesiones...
    ],
  },
  // Más días...
];
```

## 💰 Ajustar Precios de Tickets

En `components/tickets/Tickets.tsx`, edita el array `tickets`:

```typescript
const tickets: TicketTier[] = [
  {
    id: 1,
    name: "GENERAL",
    price: "199€",          // Cambia el precio
    icon: <Zap size={32} />,
    color: "neon-green",
    features: [
      "Característica 1",   // Modifica las características
      "Característica 2",
      // ...
    ],
  },
  // Más tiers...
];
```

## 🔗 Cambiar Enlaces de Navegación

En `components/navbar/Navbar.tsx`, modifica el array `navLinks`:

```typescript
const navLinks = [
  { name: "INICIO", href: "#hero" },
  { name: "SPEAKERS", href: "#speakers" },
  { name: "AGENDA", href: "#agenda" },
  { name: "TICKETS", href: "#tickets" },
  // Añade más enlaces si necesitas
];
```

## 🏢 Actualizar Información del Evento

En `components/hero/Hero.tsx`, busca la sección de información:

```tsx
<div className="flex items-center space-x-2">
  <MapPin size={20} className="text-[--color-neon-green]" />
  <span className="font-semibold">Barcelona, España</span> {/* Cambia la ubicación */}
</div>
<div className="flex items-center space-x-2">
  <Users size={20} className="text-[--color-neon-orange]" />
  <span className="font-semibold">+5000 Participantes</span> {/* Cambia la capacidad */}
</div>
```

## 🖼️ Agregar Más Fuentes de Imágenes

En `next.config.ts`, añade más dominios permitidos:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
    {
      protocol: 'https',
      hostname: 'tu-dominio.com',  // Añade tu dominio
    },
  ],
}
```

## 📝 Cambiar Metadatos SEO

En `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Tu Título - Tu Evento",
  description: "Tu descripción personalizada del evento",
};
```

## 🎭 Personalizar Animaciones

### Velocidad de Animaciones

En cualquier componente, ajusta los valores de `transition`:

```typescript
transition={{ duration: 0.6 }}  // Más lento: > 0.6, Más rápido: < 0.6
```

### Delay entre Animaciones

```typescript
transition={{ delay: index * 0.1 }}  // Cambia 0.1 a otro valor
```

## 🌐 Conectar Botones CTA

Para conectar los botones "COMPRAR ENTRADAS":

1. **Opción 1 - Enlace externo:**
```tsx
<a href="https://tupasarela.com/tickets" target="_blank">
```

2. **Opción 2 - Modal:**
Instala una librería de modales y reemplaza el `<a>` con un `<button onClick={openModal}>`

3. **Opción 3 - Página interna:**
```tsx
<Link href="/checkout">
```

## 🎨 Crear Variaciones de Color

Para crear una variación de color diferente, duplica las clases en `globals.css`:

```css
.gradient-neon-alt {
  background: linear-gradient(135deg, #ff00ff 0%, #00ffff 50%, #ffff00 100%);
}
```

## 📱 Ajustar Responsive Breakpoints

Los breakpoints de Tailwind por defecto:
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px
- `2xl:` 1536px

Ejemplo de uso:
```tsx
className="text-5xl md:text-7xl lg:text-9xl"
```

## 🚀 Tips de Performance

1. **Optimizar imágenes:**
   - Usa WebP cuando sea posible
   - Tamaño recomendado para speakers: 400x400px

2. **Lazy loading:**
   Next.js Image ya tiene lazy loading por defecto

3. **Reducir animaciones en móvil:**
```tsx
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
transition={{ duration: isMobile ? 0.3 : 0.6 }}
```

## 📞 Soporte

Si necesitas ayuda adicional, revisa:
- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de Framer Motion](https://www.framer.com/motion/)
- [Iconos de Lucide](https://lucide.dev/)

---

¡Feliz personalización! 🎉
