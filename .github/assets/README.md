# Assets del Proyecto

Esta carpeta contiene recursos visuales del proyecto para documentación.

## Imágenes Necesarias

### 1. Landing Page Hero
**Archivo:** `landing-hero.png`  
**Descripción:** Screenshot de la sección hero de la landing page  
**Dimensiones recomendadas:** 1920x1080 o similar  

### 2. GitHub Branch Protection (Opcional)
**Archivo:** `github-branch-protection.png`  
**Descripción:** Screenshot de la notificación de protección de rama  
**Uso:** Documentación interna  

## Cómo Agregar Imágenes

### Opción 1: Desde la Interfaz de GitHub

1. Ve a: https://github.com/mariomina/ai-engineering-lp/tree/main/.github/assets
2. Click en **Add file** → **Upload files**
3. Arrastra las imágenes o click en **choose your files**
4. Commit message: `docs: add project screenshots`
5. Click en **Commit changes**

### Opción 2: Desde Git Local

```bash
# 1. Copia las imágenes a esta carpeta
cp /ruta/a/tu/imagen.png .github/assets/landing-hero.png

# 2. Agrega al staging
git add .github/assets/

# 3. Commit
git commit -m "docs: add project screenshots"

# 4. Push
git push origin main
```

### Opción 3: Arrastrar y Soltar en VS Code

1. Abre esta carpeta en VS Code
2. Arrastra las imágenes desde tu explorador de archivos
3. Renombra si es necesario
4. Commit y push

## Formatos Recomendados

- **PNG** - Para screenshots con texto nítido
- **JPG** - Para fotos o imágenes grandes
- **WebP** - Para optimización de tamaño (opcional)

## Optimización de Imágenes

Para reducir el tamaño de las imágenes antes de subirlas:

### Herramientas Online:
- https://tinypng.com/ (PNG/JPG)
- https://squoosh.app/ (Múltiples formatos)

### Herramientas CLI:
```bash
# Instalar ImageMagick
# Windows: choco install imagemagick
# Mac: brew install imagemagick

# Redimensionar y optimizar
magick landing-hero.png -resize 1920x1080 -quality 85 landing-hero-optimized.png
```

## Uso en README

Una vez subidas las imágenes, se mostrarán automáticamente en el README.md:

```markdown
![Landing Page Hero](.github/assets/landing-hero.png)
```

---

**Nota:** Las imágenes en esta carpeta son parte de la documentación del proyecto y están incluidas en el repositorio Git.
