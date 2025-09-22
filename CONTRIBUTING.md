# Contributing to Persona

Thank you for your interest in contributing to the Persona Zola theme! We welcome contributions from the community and appreciate your help in making this theme better.

## 🚀 Getting Started

### Prerequisites

- [Zola](https://www.getzola.org/documentation/getting-started/installation/) 0.20.0 or later
- Git
- A text editor or IDE

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/persona-zola-theme.git
   cd persona-zola-theme
   ```

3. **Create a test site** to develop with:
   ```bash
   # Create basic content for testing
   mkdir -p content
   echo '+++
   title = "Test Site"
   template = "index.html"
   +++
   
   This is a test site for theme development.' > content/_index.md
   ```

4. **Start the development server**:
   ```bash
   zola serve
   ```

5. **Make your changes** and test them locally

## 🎯 How to Contribute

### Reporting Issues

- **Search existing issues** first to avoid duplicates
- **Use issue templates** when available
- **Provide detailed information**:
  - Zola version
  - Operating system
  - Steps to reproduce
  - Expected vs actual behavior
  - Screenshots (if applicable)

### Suggesting Features

- **Check existing feature requests** first
- **Describe the use case** clearly
- **Explain why** the feature would be valuable
- **Consider backwards compatibility**

### Code Contributions

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**:
   - Follow existing code style
   - Test thoroughly across different screen sizes
   - Update documentation if needed

3. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add amazing new feature"
   ```

4. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request** on GitHub

## 📋 Guidelines

### Code Style

- **HTML**: Use semantic HTML5 elements
- **CSS**: Follow BEM naming convention where applicable
- **Templates**: Use clear, descriptive variable names
- **Comments**: Add comments for complex logic
- **Indentation**: Use 2 spaces for HTML/CSS, follow existing patterns

### Template Guidelines

- **Responsive Design**: Ensure all changes work on mobile, tablet, and desktop
- **Accessibility**: Follow web accessibility guidelines (WCAG 2.1)
- **Performance**: Optimize for speed and minimal resource usage
- **Browser Support**: Test in modern browsers (Chrome, Firefox, Safari, Edge)

### CSS Guidelines

- **Mobile First**: Write CSS with mobile-first approach
- **CSS Variables**: Use CSS custom properties for theme colors
- **Bootstrap**: Leverage Bootstrap classes when possible
- **Optimization**: Minimize custom CSS, prefer existing utilities

### Documentation

- **Update README.md** if you add new features
- **Add code comments** for complex functionality
- **Include examples** in configuration sections
- **Test documentation** to ensure accuracy

## 🧪 Testing

### Manual Testing

Before submitting a PR, please test:

1. **Different screen sizes** (mobile, tablet, desktop)
2. **Multiple browsers** (Chrome, Firefox, Safari)
3. **Theme building** with `zola build`
4. **Development server** with `zola serve`
5. **Configuration options** work as expected

### Test Content

Create diverse test content to verify your changes:

```markdown
# Example test content structure
content/
├── _index.md           # Home page
├── about/
│   └── _index.md       # Plain template
├── portfolio/
│   ├── _index.md       # Category template
│   └── project1.md
├── blog/
│   ├── _index.md       # Blog section
│   └── post1.md        # Blog post
└── services/
    └── _index.md       # Custom section
```

## 🎨 Design Guidelines

### Visual Consistency

- **Follow existing design patterns**
- **Maintain visual hierarchy**
- **Use consistent spacing** (Bootstrap spacing utilities)
- **Respect brand colors** and typography

### Responsiveness

- **Test on real devices** when possible
- **Use Bootstrap breakpoints**:
  - `xs`: <576px
  - `sm`: ≥576px
  - `md`: ≥768px
  - `lg`: ≥992px
  - `xl`: ≥1200px

### Accessibility

- **Use semantic HTML** elements
- **Provide alt text** for images
- **Ensure keyboard navigation** works
- **Maintain color contrast** ratios
- **Test with screen readers** when possible

## 📝 Commit Message Guidelines

Use conventional commit format:

```
type(scope): short description

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(navigation): add mobile menu toggle animation
fix(hero): resolve background image not loading on mobile
docs(readme): update installation instructions
style(css): improve code formatting and organization
```

## 🔄 Pull Request Process

### Before Submitting

- [ ] Test changes locally
- [ ] Update documentation if needed
- [ ] Follow commit message guidelines
- [ ] Ensure backwards compatibility
- [ ] Check for console errors

### PR Description

Include in your PR description:

1. **What changes were made**
2. **Why the changes were necessary**
3. **How to test the changes**
4. **Screenshots** (for visual changes)
5. **Breaking changes** (if any)

### Review Process

- Maintainers will review PRs as time permits
- You may be asked to make changes
- Once approved, your PR will be merged
- Your contribution will be credited

## 🎯 Areas for Contribution

We especially welcome contributions in these areas:

### High Priority

- **Bug fixes** and stability improvements
- **Performance optimizations**
- **Accessibility improvements**
- **Mobile responsiveness** enhancements
- **Documentation** improvements

### Medium Priority

- **New templates** for different content types
- **Additional configuration options**
- **Code organization** and refactoring
- **SEO improvements**
- **Analytics integrations**

### Low Priority

- **Visual enhancements**
- **Animation improvements**
- **Additional shortcodes**
- **Theme variants**
- **Integration examples**

## 🆘 Getting Help

If you need help contributing:

- **Read the [Zola documentation](https://www.getzola.org/documentation/)**
- **Check existing issues** and discussions
- **Join the [Zola Discord](https://discord.gg/dNCk5jJ)** community
- **Open a discussion** on GitHub

## 📜 Code of Conduct

Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## 🎉 Recognition

Contributors are recognized in several ways:

- **GitHub contributors** list
- **Changelog** mentions for significant contributions
- **Social media** shoutouts for major features
- **Showcase** section for sites using contributed features

Thank you for contributing to Persona! 🎭