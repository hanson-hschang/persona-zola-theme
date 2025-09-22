# Persona Zola Theme

Persona is a modern, responsive portfolio and blog theme for the Zola static site generator. It features Bootstrap components, AOS animations, and a clean design suitable for personal websites, portfolios, resumes, and blogs.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Prerequisites and Setup
- Install Zola static site generator (minimum version 0.20.0):
  ```bash
  wget https://github.com/getzola/zola/releases/download/v0.19.2/zola-v0.19.2-x86_64-unknown-linux-gnu.tar.gz -O /tmp/zola.tar.gz
  tar -xzf /tmp/zola.tar.gz -C /tmp
  sudo mv /tmp/zola /usr/local/bin/
  ```

### Build and Development Commands
- **NEVER CANCEL builds or commands** - they complete quickly but set appropriate timeouts
- Check the theme for errors: `zola check` -- takes ~10-20ms. Set timeout to 30+ seconds.
- Build the theme: `zola build` -- takes ~50ms. Set timeout to 60+ seconds.
- Serve development version: `zola serve --interface 0.0.0.0 --port 8000` -- starts immediately
- Clean build: Remove `public/` directory before building if needed

### Content Structure Requirements
This is a **theme repository**, not a complete site. To test functionality:

1. Create `content/` directory in repository root
2. Create `content/_index.md` with basic frontmatter:
   ```markdown
   +++
   +++
   
   # Welcome to Persona Theme
   ```

3. For additional sections, create structured content like:
   ```markdown
   +++
   title = "About"
   template = "plain.html"
   
   [extra]
   order = 1
   icon_class = "bi bi-person"
   template = "plain.html"
   +++
   
   Content goes here.
   ```

### Validation and Testing
- **CRITICAL**: Always test theme functionality after making changes by:
  1. Creating test content structure as described above
  2. Running `zola build` to ensure no template errors
  3. Running `zola serve` and testing navigation
  4. Verifying sections display correctly with proper metadata
- Always run `zola check` before committing changes
- Test both home page (all sections) and individual section pages
- Verify responsive design and navigation functionality

### Template and Content Requirements
**Key template requirements that must be satisfied:**
- Sections displayed in navigation need `extra.icon_class` (Bootstrap Icons)
- Sections need `extra.order` for display ordering
- Sections need `extra.template` matching template type (`"plain.html"` or `"category.html"`)
- Blog posts need `extra.excerpt` for post listing pages
- Sections with cards need `extra.thumbnail` for image display

### Theme Architecture
- `templates/`: Zola templates (base.html, index.html, etc.)
- `templates/macros/`: Reusable template components
- `templates/partials/`: Page sections (navigation, hero, contact, etc.)
- `static/assets/`: Theme CSS, JavaScript, and images
- `static/vendor/`: Third-party libraries (Bootstrap, AOS, etc.)
- `config.toml`: Theme configuration and settings

### Common Tasks
**Repository structure:**
```
.
├── .github/workflows/deploy.yml    # GitHub Pages deployment
├── config.toml                     # Site configuration
├── theme.toml                      # Theme metadata
├── static/                         # Static assets
│   ├── assets/                     # Theme assets (CSS, JS, images)
│   └── vendor/                     # Third-party libraries
└── templates/                      # Zola templates
    ├── base.html                   # Base template
    ├── index.html                  # Home page template
    ├── macros/                     # Template macros
    └── partials/                   # Template partials
```

**Key configuration files:**
- `config.toml`: Site-wide settings, metadata, and theme configuration
- `theme.toml`: Theme information and requirements
- `.github/workflows/deploy.yml`: Automated deployment to GitHub Pages

### Troubleshooting
**Common template errors:**
- `Variable 'subsection.extra.icon_class' not found`: Add `icon_class` to section frontmatter
- `Variable 'page.extra.excerpt' not found`: Add `excerpt` to page frontmatter  
- `Variable 'pos.extra.template' not found`: Add `template` to section extra metadata

**Build issues:**
- Empty builds (0 pages): Create `content/_index.md` file
- Template rendering errors: Check section frontmatter has required fields
- Missing assets: Verify `static/` directory structure is intact

**Development server issues:**
- "Can't watch `content` for changes": Create `content/` directory
- Navigation not working: Check sections have proper `extra.order` and `icon_class`

### Validation Scenarios
After making template or style changes, always validate by:

1. **Basic functionality test:**
   ```bash
   mkdir -p content
   echo "+++\n+++\n\n# Test" > content/_index.md
   zola build
   zola serve --interface 0.0.0.0 --port 8000
   ```

2. **Full theme test with sections:**
   - Create multiple content sections with proper frontmatter
   - Test navigation between sections
   - Verify responsive design
   - Check contact form display (if configured)

3. **Template validation:**
   - Ensure all macros render without errors
   - Test both single-page and multi-section layouts
   - Verify CSS and JavaScript assets load correctly
   - Test blog template with sample posts:
     ```bash
     mkdir -p content/blog
     echo "+++\ntitle = \"Blog\"\ntemplate = \"blog.html\"\n\n[extra]\norder = 2\nicon_class = \"bi bi-journal\"\ntemplate = \"category.html\"\n+++" > content/blog/_index.md
     echo "+++\ntitle = \"Test Post\"\ndate = 2023-01-01\n\n[extra]\nexcerpt = \"Sample post\"\n+++\n\nTest content" > content/blog/test.md
     zola build && zola serve --interface 0.0.0.0 --port 8000
     ```

### Deployment
The theme includes automated GitHub Pages deployment via `.github/workflows/deploy.yml`:
- Triggers on pushes to main branch
- Uses `shalzz/zola-deploy-action@master`
- Deploys to `gh-pages` branch
- **DO NOT** modify deployment workflow without testing

### Performance Notes
- Builds are extremely fast (~50ms for typical content)
- Theme includes optimized vendor libraries
- Static assets are properly organized for caching
- No build process required for CSS/JS (pre-built)