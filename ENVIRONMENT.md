# Variables de Entorno

Este documento describe las variables de entorno necesarias para ejecutar el proyecto.

## Desarrollo Local

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# Gemini API Key (opcional - configurado para futuras integraciones)
GEMINI_API_KEY=tu_api_key_aqui
```

### Notas:
- Actualmente el proyecto **no requiere** la API de Gemini en runtime
- La configuración está preparada para futuras integraciones con IA
- El archivo `.env.local` está excluido del control de versiones por seguridad

## GitHub Actions (CI)

Si necesitas configurar secrets para CI/CD en GitHub:

1. Ve a: `Settings` → `Secrets and variables` → `Actions`
2. Agrega los siguientes secrets (si aplica):
   - `GEMINI_API_KEY` - Solo si se habilitan features con IA

## Vercel (Deployment)

Para desplegar en Vercel:

1. Conecta el repositorio en [vercel.com](https://vercel.com)
2. Configura las siguientes variables de entorno en el dashboard:
   - `GEMINI_API_KEY` (opcional)

### Build Settings en Vercel:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## Otras Plataformas de Deployment

### Netlify
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Render
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Environment Variables:** Configura en el dashboard

---

**Importante:** Nunca subas archivos `.env*` al repositorio. Todos están excluidos en `.gitignore`.
