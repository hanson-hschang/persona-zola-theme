<div align="center">

# 🎭 Persona

[![GitHub stars](https://img.shields.io/github/stars/hanson-hschang/persona-zola-theme?style=flat-square&labelColor=202b2d&color=087e96)](https://github.com/hanson-hschang/persona-zola-theme/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/hanson-hschang/persona-zola-theme?style=flat-square&labelColor=202b2d&color=087e96)](https://github.com/hanson-hschang/persona-zola-theme/forks)
[![GitHub license](https://img.shields.io/github/license/hanson-hschang/persona-zola-theme?style=flat-square&labelColor=202b2d&color=087e96)](https://github.com/hanson-hschang/persona-zola-theme/blob/main/LICENSE)
[![Zola](https://img.shields.io/badge/Zola-0.20+-087e96?style=flat-square&labelColor=202b2d)](https://www.getzola.org/)

**A modern, responsive [Zola](https://www.getzola.org/) theme for portfolios, resumes, and personal blogs**

[Demo](https://hanson-hschang.github.io/persona-zola-theme/) • [Features](#-features) • [Installation](#-installation) • [Configuration](#-configuration)

![Persona Theme Screenshot](screenshot.png)

</div>

## ✨ Features

- 🎨 **Modern Design**: Clean, professional layout perfect for portfolios and resumes
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🚀 **Fast Performance**: Lightweight and optimized for speed
- 🎯 **SEO Ready**: Built-in SEO optimization and meta tags
- 🎭 **Portfolio Ready**: Showcase your work with elegant project sections
- 📝 **Blog Support**: Built-in blog functionality with tags and categories
- 🔧 **Highly Customizable**: Easy theme customization through configuration
- 🌓 **Theme Support**: Ready for light/dark theme implementations
- 🎬 **Animations**: Smooth animations with AOS (Animate On Scroll)
- 📧 **Contact Forms**: Integrated contact form support with Web3Forms
- 🏷️ **Taxonomies**: Full support for tags and categories
- 🔍 **Search Ready**: Built-in search index generation
- 🎓 **Academic Icons**: Support for academic and social media icons
- 🖼️ **Image Optimization**: Responsive image handling with shortcodes

## 🚀 Installation

### Option 1: Git Submodule (Recommended)

The easiest way to install the theme is to add it as a git submodule to your `themes` directory:

```bash
# Navigate to your Zola site directory
cd your-zola-site

# Add the theme as a submodule
git submodule add https://github.com/hanson-hschang/persona-zola-theme.git themes/persona

# Update the submodule
git submodule update --init --recursive
```

### Option 2: Direct Download

Alternatively, you can download the theme manually:

```bash
# Navigate to your themes directory
cd themes

# Clone the repository
git clone https://github.com/hanson-hschang/persona-zola-theme.git persona
```

### Option 3: Download ZIP

1. Download the [latest release](https://github.com/hanson-hschang/persona-zola-theme/releases) or clone the repository
2. Extract the files to `themes/persona` in your Zola site directory

## ⚙️ Configuration

### Basic Setup

1. **Enable the theme** in your `config.toml`:

```toml
theme = "persona"
```

2. **Copy the example configuration** from the theme's `config.toml` to get started quickly:

```bash
# Copy example content (optional)
cp themes/persona/content/_index.md content/

# Review and customize the configuration
cp themes/persona/config.toml config.toml.example
```

3. **Configure the required settings** in your `config.toml`:

```toml
# Basic site information
base_url = "https://yourdomain.com"
title = "Your Name - Portfolio"
description = "Your personal portfolio and blog"
author = "Your Name"

# Theme configuration
theme = "persona"

# Enable Sass compilation
compile_sass = true

# Enable search index
build_search_index = true

# Taxonomies
taxonomies = [
  { name = "tags", feed = true },
  { name = "categories", feed = true },
]

[markdown]
highlight_code = true
external_links_target_blank = true
external_links_no_follow = false
external_links_no_referrer = true

[extra]
[extra.persona]
# Note: title and subtitles are configured in content/_index.md
quote = "Your inspiring quote here"

# Social links
social_links = [
  { name = "GitHub", url = "https://github.com/yourusername", icon_class = "bi bi-github" },
  { name = "LinkedIn", url = "https://linkedin.com/in/yourprofile", icon_class = "bi bi-linkedin" },
  { name = "Twitter", url = "https://twitter.com/yourusername", icon_class = "bi bi-twitter" },
]

# Contact information
contact_infos = [
  { item = "Location", content = "Your City, Country", icon_class = "bi bi-geo-alt" },
  { item = "Email", content = "your.email@example.com", icon_class = "bi bi-envelope" },
  { item = "Phone", content = "+1 (555) 123-4567", icon_class = "bi bi-phone" },
]

# Web3Forms contact form (optional)
# Get your access key from https://web3forms.com/
# web3form_public_key = "YOUR-ACCESS-KEY-HERE"

# Footer customization
copyright = "&copy; 2024 Your Name. All Rights Reserved"
credits = "Powered by [Zola](https://www.getzola.org/), [Bootstrap](https://getbootstrap.com/), and [Web3Forms](https://web3forms.com/)"
```

4. **Create your home page** content in `content/_index.md`:

```markdown
+++
title = "Your Name"
template = "index.html"

[extra]
subtitles = "Developer, Designer, Creator"
+++
```

### Content Structure

Create your content structure following this pattern:

```
content/
├── _index.md          # Home page
├── about/
│   └── _index.md      # About section
├── portfolio/
│   ├── _index.md      # Portfolio overview
│   ├── project1.md    # Individual projects
│   └── project2.md
├── blog/
│   ├── _index.md      # Blog section
│   ├── post1.md       # Blog posts
│   └── post2.md
└── services/
    └── _index.md      # Additional sections
```

### Section Configuration

Each section can be configured with front matter. The theme supports three main section types:

**Plain sections** (for static content like About, Services, etc.):

```markdown
+++
title = "About Me"
template = "page.html"

[extra]
# Section-specific icon for navigation (Bootstrap Icons)
icon_class = "bi bi-person"
# Display order (lower numbers appear first)
order = 1
# Section type determines rendering approach
type = "plain"
+++

Your content here...
```

**Category sections** (for portfolios, projects, showcases):

```markdown
+++
title = "My Projects"
template = "section.html"

[extra]
icon_class = "bi bi-briefcase"
order = 2
type = "category"
+++

Showcase of my work and projects.
```

**Blog sections** (for blog posts and articles):

```markdown
+++
title = "Blog"
template = "section.html"

[extra]
icon_class = "bi bi-journal-text"
order = 3
type = "blog"
+++

My thoughts and articles.
```

## 🎨 Customization

### Styling

The theme uses Bootstrap and custom CSS. You can customize the appearance by:

1. **Modifying CSS variables** in `static/assets/css/base.css`
2. **Overriding styles** by creating your own CSS files
3. **Customizing colors** through the Bootstrap color scheme

### Templates

You can override any template by creating a file with the same name in your site's `templates` directory:

```
templates/
├── index.html         # Override home page
├── page.html          # Override plain pages (formerly plain.html)
├── section.html       # Override section pages (formerly category.html)
├── blog-post.html     # Override blog post pages
└── partials/
    ├── hero.html      # Override hero section
    ├── navigation.html # Override navigation
    ├── contact.html   # Override contact section
    └── footer.html    # Override footer
```

### Adding Custom Sections

To add a new section to your site:

1. Create a new directory in `content/`
2. Add an `_index.md` file with appropriate front matter
3. Configure the section order, icon, and type in the front matter

Example:

```markdown
+++
title = "Services"
template = "page.html"

[extra]
icon_class = "bi bi-gear"
order = 3
type = "plain"
+++

Description of your services...
```

## 🖼️ Images and Media

### Background Image

Replace the hero background image by adding your image to `static/assets/img/background.jpg`

### Favicons

Replace the default favicons in `static/assets/img/`:
- `favicon.ico`
- `apple-touch-icon.png`

### Project Thumbnails

For portfolio projects, add thumbnail images and reference them in your content:

```markdown
+++
title = "Project Name"

[extra]
thumbnail = "project-thumb.jpg"
+++
```

## 📝 Content Types

### Blog Posts

Create blog posts in the `content/blog/` directory:

```markdown
+++
title = "My First Post"
date = 2024-01-15
description = "A brief description of the post"
template = "blog-post.html"

[taxonomies]
tags = ["zola", "web-development"]
categories = ["tutorials"]

[extra]
excerpt = "This appears on the blog listing page"
+++

Your blog content here...
```

### Portfolio Projects

Create project pages with rich metadata:

```markdown
+++
title = "Project Name"
date = 2024-01-15
description = "Project description"
template = "page.html"

[extra]
thumbnail = "project-thumb.jpg"
live_url = "https://project-demo.com"
github_url = "https://github.com/user/project"
technologies = ["Rust", "JavaScript", "CSS"]
type = "plain"
+++

Detailed project description...
```

## 🔧 Advanced Configuration

### SEO Optimization

```toml
[extra.seo]
# Open Graph
og_title = "Your Name - Portfolio"
og_description = "Personal portfolio and blog"
og_image = "assets/img/og-image.jpg"

# Twitter Card
twitter_card = "summary_large_image"
twitter_creator = "@yourusername"
```

### Analytics

```toml
[extra.analytics]
# Google Analytics
google_analytics = "G-XXXXXXXXXX"

# Other analytics services
plausible_domain = "yourdomain.com"
```

### Performance

```toml
[extra.performance]
# Enable lazy loading for images
lazy_loading = true

# Minify HTML output
minify_html = true
```

## 🚀 Deployment

### GitHub Pages

1. Create a GitHub repository for your site
2. Add the theme as a submodule
3. Configure GitHub Actions for automatic deployment:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
      with:
        submodules: true
    - name: Setup Zola
      uses: taiki-e/install-action@zola
    - name: Build site
      run: zola build
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./public
```

### Netlify

1. Connect your repository to Netlify
2. Set build command: `zola build`
3. Set publish directory: `public`
4. Deploy automatically on git push

### Vercel

1. Import your repository to Vercel
2. Vercel will auto-detect Zola and configure deployment

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Development Setup

```bash
# Clone the repository
git clone https://github.com/hanson-hschang/persona-zola-theme.git
cd persona-zola-theme

# Install Zola (if not already installed)
# See: https://www.getzola.org/documentation/getting-started/installation/

# Create test content
mkdir content
echo '+++
title = "Test"
template = "index.html"
+++' > content/_index.md

# Serve locally
zola serve
```

### Guidelines

- Follow existing code style and conventions
- Test your changes across different screen sizes
- Update documentation for new features
- Write clear commit messages
- Ensure backwards compatibility

### Reporting Issues

Found a bug or have a feature request? Please:

1. Check existing [issues](https://github.com/hanson-hschang/persona-zola-theme/issues)
2. Create a new issue with detailed information
3. Include steps to reproduce for bugs
4. Provide context for feature requests

## 🆘 Troubleshooting

### Common Issues

**Theme not loading:**
- Ensure `theme = "persona"` is set in `config.toml`
- Check that the theme is in the correct directory: `themes/persona/`

**Styles not applying:**
- Verify `compile_sass = true` is set in `config.toml`
- Check that all required CSS files are present

**Navigation not working:**
- Ensure sections have proper front matter with `order` field
- Check that section templates are correctly specified

**Contact form not working:**
- Verify `web3form_public_key` is set in configuration
- Check Web3Forms documentation for setup

### Getting Help

- 📖 Read the [Zola documentation](https://www.getzola.org/documentation/)
- 💬 Join the [Zola Discord community](https://discord.gg/dNCk5jJ)
- 🐛 Report issues on [GitHub](https://github.com/hanson-hschang/persona-zola-theme/issues)

## 📄 License

This theme is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

**Persona** is built with and inspired by:

- [**Zola**](https://www.getzola.org/) - A fast static site generator
- [**Bootstrap**](https://getbootstrap.com/) - CSS framework for responsive design
- [**MyResume Template**](https://bootstrapmade.com/demo/MyResume/) - Original template inspiration by BootstrapMade
- [**Bootstrap Icons**](https://icons.getbootstrap.com/) - Icon library
- [**AOS (Animate On Scroll)**](https://michalsnik.github.io/aos/) - Animation library
- [**Web3Forms**](https://web3forms.com/) - Contact form service
- [**Academicons**](https://jpswalsh.github.io/academicons/) - Academic icons

## 🌟 Showcase

Using Persona for your site? We'd love to see it! [Open an issue](https://github.com/hanson-hschang/persona-zola-theme/issues) or submit a PR to add your site to our showcase.

---

<div align="center">

**[⭐ Star this repository](https://github.com/hanson-hschang/persona-zola-theme) if you find it helpful!**

*"There's the private persona and the public persona, and the two shall never meet."* — Liev Schreiber

</div>