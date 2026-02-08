# Configuración de GitHub

Este documento describe los pasos para configurar el repositorio en GitHub de forma profesional.

## 1. Protección de Ramas

Para proteger la rama principal y asegurar calidad del código:

### Pasos:

1. Ve a: `Settings` → `Branches` → `Branch protection rules`
2. Click en `Add rule`
3. En **Branch name pattern**, escribe: `main` (o `master` si usas esa rama)
4. Activa las siguientes opciones:

   ✅ **Require a pull request before merging**
   - Require approvals: `1` (mínimo)
   - Dismiss stale pull request approvals when new commits are pushed
   
   ✅ **Require status checks to pass before merging**
   - Require branches to be up to date before merging
   - Status checks que deben pasar:
     - `build (18.x)` - Build con Node 18
     - `build (20.x)` - Build con Node 20
   
   ✅ **Require conversation resolution before merging**
   
   ✅ **Do not allow bypassing the above settings**

5. Click en `Create` o `Save changes`

## 2. Configuración de Secrets

Para CI/CD y deployments:

### GitHub Actions Secrets:

1. Ve a: `Settings` → `Secrets and variables` → `Actions`
2. Click en `New repository secret`
3. Agrega (si aplica):
   - **Name:** `GEMINI_API_KEY`
   - **Value:** Tu API key de Gemini (opcional - solo para futuras integraciones)

## 3. Configuración de GitHub Pages (Opcional)

Si quieres habilitar GitHub Pages para preview:

1. Ve a: `Settings` → `Pages`
2. **Source:** Deploy from a branch
3. **Branch:** `gh-pages` (o crea una rama específica)
4. **Folder:** `/ (root)`
5. Click en `Save`

## 4. Configuración de Dependabot

Para mantener dependencias actualizadas:

1. Crea el archivo `.github/dependabot.yml`:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
```

2. Dependabot creará PRs automáticos para actualizar dependencias

## 5. Labels Recomendados

Crea los siguientes labels para organizar issues y PRs:

| Label | Color | Descripción |
|-------|-------|-------------|
| `bug` | `#d73a4a` | Algo no funciona correctamente |
| `enhancement` | `#a2eeef` | Nueva feature o mejora |
| `documentation` | `#0075ca` | Mejoras en documentación |
| `dependencies` | `#0366d6` | Actualización de dependencias |
| `ci/cd` | `#fbca04` | Cambios en CI/CD |
| `wontfix` | `#ffffff` | No se trabajará en esto |
| `duplicate` | `#cfd3d7` | Issue o PR duplicado |
| `good first issue` | `#7057ff` | Bueno para nuevos contribuidores |

## 6. Plantillas de Issues y PRs (Opcional)

### Issue Template:

Crea `.github/ISSUE_TEMPLATE/bug_report.md`:

```markdown
---
name: Bug Report
about: Reportar un error
title: '[BUG] '
labels: bug
---

**Descripción del bug**
Descripción clara del problema.

**Pasos para reproducir**
1. Ir a '...'
2. Click en '...'
3. Ver error

**Comportamiento esperado**
Qué debería pasar.

**Screenshots**
Si aplica, agrega capturas.

**Entorno:**
- OS: [e.g. Windows 11]
- Browser: [e.g. Chrome 120]
- Node version: [e.g. 20.10.0]
```

### Pull Request Template:

Crea `.github/PULL_REQUEST_TEMPLATE.md`:

```markdown
## Descripción

Breve descripción de los cambios.

## Tipo de cambio

- [ ] Bug fix
- [ ] Nueva feature
- [ ] Breaking change
- [ ] Documentación

## Checklist

- [ ] El código compila sin errores
- [ ] He probado los cambios localmente
- [ ] He actualizado la documentación si es necesario
- [ ] Los tests pasan (si existen)

## Screenshots (si aplica)

Agrega capturas de pantalla si hay cambios visuales.
```

## 7. Integración con Vercel

Para deploys automáticos:

1. Ve a [vercel.com](https://vercel.com)
2. Click en `Add New` → `Project`
3. Importa el repositorio `mariomina/ai-engineering-lp`
4. Configura:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Agrega variables de entorno (ver `ENVIRONMENT.md`)
6. Click en `Deploy`

### Preview Deployments:

Vercel automáticamente creará preview deployments para cada PR.

## 8. Badges para README

Agrega estos badges al README.md:

```markdown
![CI](https://github.com/mariomina/ai-engineering-lp/workflows/CI/badge.svg)
![License](https://img.shields.io/badge/license-Proprietary-red)
![Node](https://img.shields.io/badge/node-18%20%7C%2020-brightgreen)
![Vite](https://img.shields.io/badge/vite-6.2.0-646CFF)
```

---

**Nota:** Algunos de estos pasos requieren permisos de administrador del repositorio.
