# Elif İrem Külcü - Personal Portfolio

A minimal, responsive personal portfolio built with Vite + React for Elif İrem Külcü, a mobile engineer specializing in Flutter and AI-powered applications.

## Features

- **Single Page Application (SPA)** with smooth scrolling navigation
- **Responsive Design** optimized for mobile and desktop
- **React Bits Integration** featuring:
  - Text Cursor animation in Hero section
  - Spotlight Card effects for project displays
- **Modern UI** with Inter font and clean design
- **Interactive Elements** with hover effects and smooth transitions

## Sections

1. **Hero** - Animated text cursor with rotating titles
2. **Projects** - Showcase of 6 mobile applications with technology badges
3. **About** - Skills and experience overview
4. **Contact** - Email and LinkedIn links with resume download
5. **Footer** - Copyright information

## Technologies Used

- **Frontend**: React 18, Vite
- **Styling**: CSS3 with custom animations
- **Fonts**: Inter (Google Fonts)
- **Components**: Custom React Bits implementations

## Project Structure

```
src/
├── components/
│   ├── TextCursor.jsx      # Animated text typing effect
│   └── SpotlightCard.jsx   # Project cards with spotlight effect
├── styles/
│   └── reactbits.css       # Component-specific styles
├── App.jsx                 # Main application component
├── App.css                 # Main application styles
├── main.jsx               # Application entry point
└── index.css              # Global styles
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Customization

### Adding New Projects
Edit the `projects` array in `src/App.jsx`:

```javascript
{
  emoji: "🎯",
  title: "Project Name",
  description: "Project description",
  technologies: ["Tech1", "Tech2"],
  links: [
    { text: "GitHub", url: "https://github.com/..." },
    { text: "Demo", url: "https://demo.com" }
  ]
}
```

### Updating Personal Information
- **Name**: Update in `src/App.jsx` hero section
- **Contact**: Update email and LinkedIn in contact section
- **About**: Modify the description and skills list

### Styling
- **Colors**: Modify CSS variables in `src/App.css`
- **Layout**: Adjust max-width and padding in `.container` class
- **Animations**: Customize timing in component files

## React Bits Components

### TextCursor
- **Source**: [React Bits - Text Cursor](https://reactbits.dev/text-animations/text-cursor)
- **Usage**: Displays rotating text with typing animation
- **Customization**: Modify `texts` array in component

### SpotlightCard
- **Source**: [React Bits - Spotlight Card](https://reactbits.dev/cards/spotlight-card)
- **Usage**: Project cards with mouse-following spotlight effect
- **Props**: `title`, `description`, `technologies`, `links`, `emoji`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Elif İrem Külcü's personal portfolio use.

---

Built with ❤️ using Vite + React
