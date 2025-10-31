# Guía de Agentes de GitHub Copilot

## ¿Qué son los Agentes de GitHub Copilot?

Los Agentes de GitHub Copilot son asistentes potenciados por IA que ayudan a los desarrolladores con diversas tareas a lo largo del ciclo de vida del desarrollo de software. Extienden las capacidades de GitHub Copilot más allá del autocompletado de código para incluir:

- Revisiones de código
- Corrección de errores
- Generación de documentación
- Creación de pruebas
- Refactorización
- ¡Y mucho más!

## El Agente Claude HQ

El **Agente Claude HQ** es un agente de IA de alta calidad potenciado por el modelo de IA Claude de Anthropic. Es particularmente bueno en:

- Entender bases de código complejas
- Proporcionar explicaciones detalladas
- Escribir código limpio y mantenible
- Seguir las mejores prácticas
- Trabajar con frameworks modernos como Next.js, React y TypeScript

## 🚀 Comenzando

### Requisitos Previos

1. **Suscripción a GitHub Copilot**: Necesitas una suscripción activa de GitHub Copilot (Individual, Business o Enterprise)
2. **IDE Compatible**: 
   - Visual Studio Code con la extensión de GitHub Copilot
   - IDEs de JetBrains con el plugin de GitHub Copilot
   - Neovim con el plugin de Copilot

### Configurando los Agentes de GitHub Copilot

#### En Visual Studio Code

1. **Instalar la Extensión de GitHub Copilot**
   ```
   - Abre VS Code
   - Ve a Extensiones (Ctrl+Shift+X / Cmd+Shift+X)
   - Busca "GitHub Copilot"
   - Haz clic en Instalar
   - Inicia sesión con tu cuenta de GitHub
   ```

2. **Habilitar Copilot Chat**
   ```
   - Instala la extensión "GitHub Copilot Chat"
   - Reinicia VS Code si es necesario
   ```

3. **Acceder a los Agentes**
   ```
   - Abre Copilot Chat (Ctrl+Shift+I / Cmd+Shift+I)
   - Escribe `@` para ver los agentes disponibles
   - Selecciona el agente que quieres usar
   ```

## 🤖 Usando el Agente Claude HQ

### Uso Básico

1. **Abrir Copilot Chat**
   - Presiona `Ctrl+Shift+I` (Windows/Linux) o `Cmd+Shift+I` (Mac)
   - O haz clic en el ícono de chat en la barra lateral

2. **Invocar el Agente**
   ```
   @workspace /explain ¿qué hace este componente?
   ```

3. **Hacer Preguntas**
   ```
   @workspace ¿Cómo puedo optimizar este componente de React?
   @workspace Escribe pruebas para esta función
   @workspace Refactoriza este código para usar TypeScript
   ```

### Casos de Uso Comunes

#### 1. Explicación de Código
```
@workspace Explica cómo funciona el componente Globe en app/page.tsx
```

#### 2. Corrección de Errores
```
@workspace ¿Por qué este componente no se renderiza correctamente?
@workspace Corrige los errores de TypeScript en este archivo
```

#### 3. Generación de Código
```
@workspace Crea un nuevo componente para mostrar testimonios de usuarios
@workspace Genera un formulario con validación usando react-hook-form y zod
```

#### 4. Refactorización
```
@workspace Refactoriza este código para usar patrones modernos de React
@workspace Convierte este componente para usar TypeScript
```

#### 5. Documentación
```
@workspace Agrega comentarios JSDoc a esta función
@workspace Escribe un README para este componente
```

#### 6. Pruebas
```
@workspace Genera pruebas unitarias para este componente
@workspace Crea pruebas de integración para esta ruta de API
```

## 🎯 Mejores Prácticas

### 1. Sé Específico
❌ Mal: "Arregla este código"
✅ Bien: "Corrige el error de TypeScript en el componente Header donde el manejador onClick no tiene los tipos apropiados"

### 2. Proporciona Contexto
```
@workspace Estoy trabajando en el formulario de contacto en components/contact.tsx. 
Necesito agregar validación de email usando el esquema de zod. El formulario debe:
- Validar el formato del email
- Verificar campos requeridos
- Mostrar mensajes de error debajo de cada campo
```

### 3. Usa Referencias a Archivos
```
@workspace Mirando app/page.tsx, ¿cómo puedo mejorar el rendimiento 
del componente Globe?
```

### 4. Itera y Refina
- Comienza con una pregunta amplia
- Haz preguntas de seguimiento para refinar la solución
- Solicita explicaciones si algo no está claro

### 5. Revisa las Sugerencias
- Siempre revisa el código sugerido por el agente
- Prueba los cambios antes de hacer commit
- Asegúrate de que sigue las convenciones de tu proyecto

## 🔍 Características Avanzadas

### Contexto del Workspace

El agente `@workspace` tiene acceso a toda tu base de código y puede:
- Buscar en todos los archivos
- Entender la estructura del proyecto
- Seguir convenciones de nombres
- Referenciar código relacionado

Ejemplo:
```
@workspace ¿Cómo está implementado el sistema de temas en este proyecto?
```

### Conversaciones Multi-Turno

Puedes tener conversaciones extendidas con el agente:

```
Usuario: @workspace Crea un nuevo componente de característica
Agente: [Genera componente]
Usuario: Agrega tipos de TypeScript
Agente: [Agrega tipos]
Usuario: Ahora agrega pruebas unitarias
Agente: [Genera pruebas]
```

### Acciones de Código

Haz clic derecho en el código y selecciona:
- "Copilot: Explain This" (Explicar Esto)
- "Copilot: Fix This" (Arreglar Esto)
- "Copilot: Generate Tests" (Generar Pruebas)
- "Copilot: Generate Docs" (Generar Documentación)

## 💡 Consejos para Este Proyecto

### Trabajando con Next.js 15
```
@workspace Crea una nueva server action para manejar envíos de formularios 
en el formulario de contacto, compatible con Next.js 15 App Router
```

### Integración con TypeScript
```
@workspace Agrega tipos apropiados de TypeScript a este componente y asegúrate 
de que siga las convenciones de tipos del proyecto
```

### Estilos con Tailwind
```
@workspace Estiliza este componente usando la sintaxis de Tailwind CSS v4, 
manteniendo el sistema de diseño del proyecto
```

### Componentes de shadcn/ui
```
@workspace Crea un nuevo componente de diálogo usando shadcn/ui que coincida 
con los patrones de componentes existentes en este proyecto
```

## 🛠️ Solución de Problemas

### El Agente No Responde
1. Verifica tu conexión a internet
2. Verifica que la suscripción de GitHub Copilot esté activa
3. Reinicia tu IDE
4. Cierra sesión y vuelve a iniciar sesión en GitHub

### Sugerencias Pobres
1. Proporciona más contexto en tu prompt
2. Referencia archivos o funciones específicas
3. Divide solicitudes complejas en pasos más pequeños
4. Especifica las tecnologías/frameworks que se están usando

### Problemas de Rendimiento
1. Cierra archivos innecesarios
2. Reduce el tamaño del workspace si es muy grande
3. Usa agentes más específicos (@terminal, @vscode en lugar de @workspace)

## 📚 Recursos Adicionales

- [Documentación de GitHub Copilot](https://docs.github.com/es/copilot)
- [Guía de Chat de GitHub Copilot](https://docs.github.com/es/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide)
- [Documentación de Anthropic Claude](https://docs.anthropic.com/)

## 🎓 Ruta de Aprendizaje

1. **Semana 1**: Comienza con explicaciones simples de código
2. **Semana 2**: Úsalo para corrección de errores y depuración
3. **Semana 3**: Genera código y componentes nuevos
4. **Semana 4**: Refactorización y optimización avanzada

## 🔐 Privacidad y Seguridad

- El código enviado a Copilot se usa para proporcionar sugerencias
- Los clientes Enterprise pueden configurar políticas de retención de datos
- Nunca compartas credenciales o tokens sensibles
- Revisa las sugerencias antes de hacer commit

## 🤝 Obteniendo Ayuda

Si necesitas ayuda con los Agentes de GitHub Copilot:
1. Consulta la documentación oficial
2. Visita los Foros de la Comunidad de GitHub
3. Contacta al administrador de GitHub de tu organización
4. Envía comentarios a través del IDE

---

## 📖 Ejemplos Específicos para Este Proyecto

### Ejemplo 1: Mejorar el Componente Globe
```
@workspace Estoy mirando el componente Globe en app/page.tsx. 
¿Puedes explicar cómo funciona la animación y sugerir optimizaciones 
para mejorar el rendimiento en dispositivos móviles?
```

### Ejemplo 2: Agregar Validación al Formulario
```
@workspace En el formulario de contacto, necesito agregar validación 
usando zod para:
1. Email válido
2. Nombre (mínimo 2 caracteres)
3. Mensaje (mínimo 10 caracteres)
Muestra los errores en español
```

### Ejemplo 3: Crear un Nuevo Componente
```
@workspace Crea un componente de testimonios que:
- Use el patrón de componentes existente en este proyecto
- Incluya TypeScript types
- Use Tailwind CSS para estilos
- Incluya animaciones suaves
- Sea responsive
```

### Ejemplo 4: Mejorar el SEO
```
@workspace Revisa el archivo app/layout.tsx y sugiere mejoras para 
el SEO, incluyendo meta tags adicionales y structured data
```

### Ejemplo 5: Agregar Animaciones
```
@workspace Quiero agregar animaciones suaves al componente Header 
cuando el usuario hace scroll. ¿Puedes mostrarme cómo hacerlo usando 
motion o las herramientas disponibles en este proyecto?
```

## 🎬 Tutorial Rápido: Tu Primera Interacción

1. **Abre VS Code** en este proyecto
2. **Presiona** `Ctrl+Shift+I` (o `Cmd+Shift+I` en Mac)
3. **Escribe**: 
   ```
   @workspace ¿Puedes darme un resumen de la estructura de este proyecto?
   ```
4. **Lee la respuesta** y haz preguntas de seguimiento
5. **Prueba con tareas específicas**:
   ```
   @workspace Muéstrame cómo agregar un nuevo componente de botón
   ```

## ✨ Comandos Útiles

### Para Código
- `@workspace /explain` - Explicar código seleccionado
- `@workspace /fix` - Arreglar problemas
- `@workspace /tests` - Generar pruebas
- `@workspace /doc` - Generar documentación

### Para el Proyecto
- `@workspace ¿Cómo está estructurado este proyecto?`
- `@workspace ¿Qué dependencias usa este proyecto?`
- `@workspace ¿Cómo puedo agregar una nueva página?`
- `@workspace ¿Cuál es la convención de nombres para componentes?`

## 🚨 Importante

- **Siempre revisa** el código generado antes de usarlo
- **Prueba localmente** antes de hacer commit
- **Entiende** lo que el código hace, no solo lo copies
- **Adapta** las sugerencias a las convenciones de tu proyecto

---

**Recuerda**: Los Agentes de GitHub Copilot son herramientas para asistirte, no para reemplazarte. Siempre revisa, prueba y entiende el código antes de usarlo en producción.

**Última Actualización**: 31 de Octubre, 2025
