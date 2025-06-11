<div align="center">
  <h1>🧠 AIQuizHub</h1>
  <p>Una plataforma de cuestionarios potenciada por Inteligencia Artificial para mejorar la experiencia educativa.</p>
  <p>Desarrollado con tecnologías modernas para una interfaz intuitiva, evaluaciones inteligentes y gestión eficaz.</p>

  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="Next.js" width="50" style="margin: 0 10px;"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="50" style="margin: 0 10px;"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="Docker" width="50" style="margin: 0 10px;"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="MySQL" width="50" style="margin: 0 10px;"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="TailwindCSS" width="50" style="margin: 0 10px;"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/344px-Google_Gemini_logo.svg.png?20240222040508" alt="Google Gemini logo" width="200" style="margin: 0 10px;"/>
</div>

---

## 🚀 Descripción del Proyecto

**AIQuizHub** es una plataforma educativa donde estudiantes pueden resolver cuestionarios generados y evaluados automáticamente por inteligencia artificial. Los instructores pueden crear, administrar y publicar quizzes, mientras que los estudiantes pueden ver su progreso y resultados.

---

## 🧠 Inteligencia Artificial

Este proyecto utiliza **Gemini (Google Generative AI)** para:
- Generar preguntas tipo test, verdadero/falso y respuesta corta.
- Evaluar automáticamente respuestas abiertas y de código.

---

## 🛠 Tecnologías Usadas

- **Next.js 15** — Framework para React con soporte para SSR y App Router.
- **TypeScript** — Tipado estático para mayor robustez.
- **Tailwind CSS 4** — Estilos modernos, responsivos y personalizados.
- **MySQL** — Base de datos relacional, gestionada en contenedor Docker.
- **Docker & Docker Compose** — Entorno reproducible para desarrollo y despliegue.
- **Redux Toolkit** — Manejo de estado global eficiente.
- **Gemini AI API** — Generación y evaluación de contenido educativo.

---

## 🔐 Configuración del Archivo `.env`

Antes de iniciar el proyecto, asegúrate de crear un archivo `.env` en la raíz con las variables necesarias para que la aplicación funcione correctamente.

Ejemplo de estructura del archivo `.env` (no compartas este archivo públicamente):

```env
DB_HOST=localhost
DB_USER=tu_usuario_mysql
DB_PASSWORD=tu_contraseña_mysql
DB_NAME=nombre_de_tu_base_de_datos

JWT_SECRET=una_clave_secreta_segura

NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000

GEMINI_API_KEY=tu_clave_de_api_de_gemini
```
- 💡 Asegúrate de que tu archivo .env esté incluido en el .gitignore para evitar subirlo al repositorio.

---

## 🧪 Características Principales

- Registro y login con autenticación JWT.
- Roles separados para **estudiantes** y **profesores**.
- CRUD completo de cuestionarios.
- Generación de preguntas con Gemini AI.
- Evaluación automática y calificación por IA.
- Dashboard personalizado para cada rol.
- Evaluación por IA de respuestas tipo texto o código.
- Interfaz demo pública sin necesidad de login.

---

## 🐳 Docker (MySQL + phpMyAdmin)

```yaml
services:
  db:
    image: mysql:8.0
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: aiquizhub
      MYSQL_USER: aiquizuser
      MYSQL_PASSWORD: tu_contraseña
    ports:
      - "3306:3306"
    volumes:
      - db_data:/var/lib/mysql

  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    restart: always
    ports:
      - "8080:80"
    environment:
      PMA_HOST: db
      MYSQL_ROOT_PASSWORD: rootpassword
    depends_on:
      - db

volumes:
  db_data:
```

---

## 🧑‍💻 Comenzar a Desarrollar

```bash
# Instalar dependencias
npm install

# Correr el servidor de desarrollo
npm run dev

# Visita en tu navegador:
http://localhost:3000
```

> Usa `docker-compose up` para levantar la base de datos y phpMyAdmin.

---

## 📁 Estructura del Proyecto (Frontend)

```
frontend/
├── components/               # Componentes compartidos
├── public/                   # Archivos estáticos
├── src/
│   ├── app/                  # Rutas y páginas de la App
│   ├── hooks/                # Hooks personalizados
│   ├── lib/                  # Lógica de utilidad (DB, helpers)
│   ├── store/                # Redux Toolkit slices
│   └── utils/                # Funciones comunes (hash, JWT)
```

---


## 📦 Despliegue

Recomendado: **Vercel** (Next.js)

```bash
# Crear build optimizado
npm run build

# Iniciar la app
npm start
```

---

## 🤝 Contribuciones

¡Contribuciones, sugerencias o issues son bienvenidas!

1. Haz un fork del proyecto.
2. Crea una nueva rama.
3. Haz tus cambios.
4. Abre un Pull Request.

---

## 📄 Licencia

MIT

---

<div align="center">
  Hecho por Yamil Morales y Jose Perez Ingeniería en Computación - UTM
</div>
