<div align="center">

# Persona [Zola](https://www.getzola.org/) Theme

![code-size](https://img.shields.io/github/languages/code-size/hanson-hschang/persona-zola-theme)
![repo-size](https://img.shields.io/github/repo-size/hanson-hschang/persona-zola-theme)
![GitHub Issues](https://img.shields.io/github/issues/hanson-hschang/persona-zola-theme)
![GitHub Created At](https://img.shields.io/github/created-at/hanson-hschang/persona-zola-theme)
![activity](https://img.shields.io/github/last-commit/hanson-hschang/persona-zola-theme)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fhanson-hschang.github.io%2Fpersona-zola-theme)
![GitHub Release](https://img.shields.io/github/v/release/hanson-hschang/persona-zola-theme)

**A modern, responsive and lightweight theme for portfolios, resumes, and personal blogs**

![Persona Theme Screenshot](screenshot.png)

[Demo](https://hanson-hschang.github.io/persona-zola-theme/) • [Features](#-features) • [Showcase](#-showcase) • [Installation](#-installation) • [Configuration](#-configuration) • [Troubleshooting](#-troubleshooting) • [Credits](#-credits)

</div>

## ✨ Features

- 🎨 **Modern Design**: Clean and professional layout easy for customization
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡️ **Fast Performance**: Lightweight and optimized for speed
- 📋 **Resume/CV Section**: Dedicated section for your resume or CV
- 🎭 **Portfolio Showcase**: Showcase your work with elegant project sections
- 📝 **Blog Support**: Built-in blog functionality with tags and categories
- 📧 **Contact Forms**: Integrated contact form support with Web3Forms
- 🔍 **Search Ready**: Built-in search index generation

## 🌟 Showcase

Using [Persona](https://hanson-hschang.github.io/persona-zola-theme/) for your site? 
We'd love to see it! 
Submit a PR to add your site to our showcase.

- [Hanson.HSChang](https://hanson-hschang.github.io/) - Personal website of Dr. Chang, Heng-Sheng
- [Your Site Here](#) - Add your site!


## 🚀 Installation

The easiest way to install the theme is to add it as a git submodule to your `themes` directory:

```bash
# Navigate to your Zola site directory
cd your-zola-site

# Add the theme as a submodule
git submodule add https://github.com/hanson-hschang/persona-zola-theme.git themes/persona
```

To update the theme:

```bash
# Update the submodule
git submodule update --init --recursive
```

## ⚙️ Configuration

### Basic Setup

1. **Copy the configuration and landing page content** from the theme to get started quickly:

    ```bash
    # Copy the landing page content
    cp themes/persona/content/_index.md content/

    # Copy the configuration
    cp themes/persona/config.toml config.toml.example
    ```

2. **Enable the theme** in your `config.toml` by adding at the beginning of the file:

    ```toml
    theme = "persona"
    ```

3. **Customization** 

  - site settings in your `config.toml`:

    ```toml
    # The URL this site will be built for
    base_url = "https://yourdomain.com"

    # The basic site information
    title = "Your Name - Portfolio"
    author = "Your Name"
    description = "Your personal resume, portfolio and blog"

    [extra]

    [extra.persona]
    # Note: landing page title and subtitles are configured in content/_index.md

    # Social links
    social_links = [
      { name = "GitHub", url = "https://github.com/yourusername", icon_class = "bi bi-github" },
      { name = "LinkedIn", url = "https://linkedin.com/in/yourprofile", icon_class = "bi bi-linkedin" },
      { name = "Twitter-X", url = "https://x.com/yourusername", icon_class = "bi bi-twitter-x" },
    ]

    # Contact information
    contact_infos = [
      { item = "Name", content = "Your Name", icon_class = "bi bi-person" },
      { item = "Location", content = "Your City, Country", icon_class = "bi bi-geo-alt" },
      { item = "Email", content = "your.email@example.com", icon_class = "bi bi-envelope" },
      { item = "Phone", content = "+1 (555) 123-4567", icon_class = "bi bi-phone" },
    ]
    ```

  - home page content in `content/_index.md`:

    ```markdown
    +++
    title = "Your Name"
    template = "index.html"
    [extra]
    subtitles = "Item 1, Item 2, Item 3"
    +++
    ```

  - background image as `static/assets/img/background.jpg`
  - favicon as `static/assets/img/favicon.ico`
  - apple touch icon as `static/assets/img/apple-touch-icon.png`

### Section Configuration

Each section can be configured with front matter. 
The theme supports three main section types:
- **Plain sections** (for static text content like about)
- **Category sections** (for portfolios, projects, showcases)
- **Blog sections** (for blog posts and articles)

Here is how to set them up:

```markdown
+++
title = "Title of the Section"
[extra]
# Section-specific icon for navigation (Bootstrap Icons)
icon_class = "bi bi-person"
# Display order (lower numbers appear first)
order = 1
# Section type determines rendering approach
type = "type"  # "plain", "category", or "blog"
+++
```

## 🆘 Troubleshooting

### Common Issues

- **Theme not loading:**
  - Ensure `theme = "persona"` is set in `config.toml`
  - Check that the theme is in the correct directory: `themes/persona/

- **Navigation not working:**
  - Ensure sections have proper front matter with `order` field
  - Check that section metadata `extra.type` is correctly specified

- **Contact form not working:**
  - Verify `web3form_public_key` is set in configuration
  - Check [Web3Forms documentation](https://docs.web3forms.com/) for setup

### Getting Help
- 📖 Read the [Zola documentation](https://www.getzola.org/documentation/)
- 🐛 Report issues or request features on [GitHub](https://github.com/hanson-hschang/persona-zola-theme/issues)


## 🙏 Credits

[**Persona**](https://github.com/hanson-hschang/persona-zola-theme) is built with and inspired by:

- [**Zola**](https://www.getzola.org/) - A fast static site generator
- [**Bootstrap**](https://getbootstrap.com/) - CSS framework for responsive design
- [**Web3Forms**](https://web3forms.com/) - Contact form service
- [**Bootstrap Icons**](https://icons.getbootstrap.com/) - Icon library
- [**Academicons**](https://jpswalsh.github.io/academicons/) - Academic icons
- [**AOS (Animate On Scroll)**](https://michalsnik.github.io/aos/) - Animation library
- [**BootstrapMade Templates**](https://bootstrapmade.com/) - [MyResume](https://bootstrapmade.com/demo/MyResume) • [Active](https://bootstrapmade.com/demo/Active) • [UpConstruction](https://bootstrapmade.com/demo/UpConstruction)


---

<div align="center">

**[⭐ Star this repository](https://github.com/hanson-hschang/persona-zola-theme) if you find it helpful!**

</div>