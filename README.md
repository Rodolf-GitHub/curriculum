# 📋 Curriculum Vitae Creator

Una aplicación web moderna y responsive para crear, editar y exportar tu curriculum vitae de forma profesional. Diseñada para cualquier profesión, no solo programadores.

## ✨ Características Principales

### 🎨 **Diseño Profesional**
- Diseño moderno y elegante con gradientes y sombras sutiles
- Layout completamente responsive para todos los dispositivos
- Tipografía optimizada para máxima legibilidad
- Iconos SVG profesionales para mejor experiencia visual

### 📝 **Editor Completo**
- **Editor a pantalla completa** para máxima comodidad
- **Control de secciones**: Activar/desactivar secciones dinámicamente
- **Información personal** editable con validación
- **Descripción profesional** personalizable
- **Persistencia de datos** en localStorage

### 🔧 **Funcionalidades Avanzadas**
- **Exportación a imagen** (PNG de alta calidad)
- **Exportación a PDF** con formato profesional
- **Botón "Vaciar Curriculum"** para reiniciar completamente
- **Modal de bienvenida** para nuevos usuarios
- **Navegación sticky** con acceso rápido a todas las funciones

### 📱 **Responsive Design**
- Optimizado para móviles, tablets y desktop
- Layout adaptativo que se ajusta a cualquier pantalla
- Botones con texto que se oculta en pantallas pequeñas
- Espaciado optimizado para cada dispositivo

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [url-del-repositorio]
cd curriculum

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

### Uso
1. **Abrir la aplicación** en tu navegador
2. **Editar información**: Haz clic en "Editar" en la barra superior
3. **Configurar secciones**: Usa los checkboxes para mostrar/ocultar secciones
4. **Personalizar datos**: Completa toda la información personal y profesional
5. **Exportar**: Usa los botones de exportación para guardar como imagen o PDF

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework de interfaz de usuario
- **TypeScript** - Tipado estático para mayor robustez
- **Tailwind CSS** - Framework de CSS utilitario
- **Vite** - Herramienta de build rápida
- **html2canvas** - Exportación a imagen
- **jsPDF** - Generación de PDFs
- **localStorage** - Persistencia de datos local

## 📋 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.tsx      # Encabezado con información personal
│   ├── About.tsx       # Sección "Sobre mí"
│   ├── Experience.tsx  # Experiencia laboral
│   ├── Education.tsx   # Formación académica
│   ├── Skills.tsx      # Habilidades y competencias
│   ├── Projects.tsx    # Proyectos destacados
│   └── NavigationHeader.tsx # Barra de navegación
├── pages/              # Páginas principales
│   └── Curriculum.tsx  # Página principal del CV
├── hooks/              # Hooks personalizados
│   └── useLocalStorage.ts # Hook para localStorage
├── data/               # Datos por defecto
│   └── curriculumData.ts # Datos iniciales del CV
└── App.tsx             # Componente raíz
```

## 🎯 Funcionalidades Detalladas

### **Editor a Pantalla Completa**
- Interfaz dedicada para edición sin distracciones
- Formularios organizados y fáciles de usar
- Validación de campos en tiempo real
- Guardado automático de cambios

### **Control de Secciones**
- **Sobre Mí**: Descripción profesional personal
- **Experiencia**: Historial laboral con fechas y descripciones
- **Educación**: Formación académica y certificaciones
- **Habilidades**: Competencias técnicas y blandas organizadas por categorías
- **Proyectos**: Trabajos destacados con enlaces y tecnologías

### **Exportación Profesional**
- **Imagen PNG**: Alta resolución para uso digital
- **PDF**: Formato profesional para impresión
- Optimización automática de gradientes para exportación
- Manejo de errores con mensajes informativos

### **Persistencia de Datos**
- Guardado automático en localStorage
- Recuperación de datos al recargar la página
- Separación de datos por secciones para mejor organización

## 🎨 Personalización

### **Adaptable a Cualquier Profesión**
- Datos por defecto genéricos y personalizables
- Categorías de habilidades flexibles
- Campos de experiencia adaptables
- Proyectos configurables para cualquier sector

### **Diseño Responsive**
- Breakpoints optimizados para todos los dispositivos
- Tipografía escalable
- Espaciado adaptativo
- Navegación optimizada para móviles

## 🔧 Configuración Avanzada

### **Modificar Datos por Defecto**
Edita `src/data/curriculumData.ts` para cambiar:
- Información personal inicial
- Categorías de habilidades
- Estructura de experiencias y educación
- Configuración de proyectos

### **Personalizar Estilos**
Modifica las clases de Tailwind CSS en los componentes para:
- Cambiar colores y gradientes
- Ajustar espaciado y tipografía
- Modificar efectos hover y transiciones
- Personalizar sombras y bordes

## 📱 Compatibilidad

- **Navegadores**: Chrome, Firefox, Safari, Edge (versiones modernas)
- **Dispositivos**: Móviles, tablets, desktop
- **Resoluciones**: Desde 320px hasta 4K

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- Iconos SVG de Heroicons
- Gradientes inspirados en diseños modernos
- Estructura de datos optimizada para cualquier profesión

---

**¡Crea tu curriculum vitae profesional en minutos!** 🚀
