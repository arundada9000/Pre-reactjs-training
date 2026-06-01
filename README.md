# Pre-React Training Platform

Welcome to the **BMC IT Club's Pre-React Training Platform** - a lightweight, interactive, and responsive playground to master **HTML**, **CSS**, and **JavaScript** before learning React.

> No setup needed - just open in browser and start coding.

**Page:** [Website](https://easyvanilla.vercel.app)

---

## Features

- Live HTML, CSS & JS Code Editors
- Instant Code Preview
- Beginner-Friendly Lessons
- Learning Resources (Docs + YouTube Videos)
- Dark Mode Toggle
- Fully Responsive Design
- Smart Terminal Output Handling
- Dedicated References Page
- Mobile-specific Instructions

---

## Project Structure

```
├── index.html # Landing page / Home
├── pages # External links, tools, docs
| ├── practice-html.html # HTML lessons + editor
| ├── practice-css.html # CSS lessons + editor
| ├── practice-js.html # JavaScript lessons + editor
| ├── reference.html # Docs, videos and editor references
| ├── styles.css # styling for practice-html,css and js pages
| ├── script.js # scripts for practice-html,css and js pages
| ├── quiz.html # some question related to all the topics we covered
├── /images # BMC IT Club logo and assets
└── /styles.css # index page styles and animations
└── /script.js # index page logic
└── /test.html # To test new features (guinea pig )
└── /README.md # readme file
```

---

## Learning Modules

### HTML

- Basic tags & structure
- Semantic elements
- Forms & input types
- Lists, tables, links, images
  **Page:** [pages/practice-html.html](https://easyvanilla.vercel.app/pages/practice-html.html)

### CSS

- Selectors, Units, Colors
- Box Model, Display, Flexbox
- Grid Layouts
- Borders, Shadows, Overflow
- Pseudo-elements & pseudo-classes
- Responsive Design (media queries)
  **Page:** [pages/practice-css.html](https://easyvanilla.vercel.app/pages/practice-css.html)

### JavaScript

- Variables & Data Types
- Conditionals & Loops
- Functions
- Arrays & Methods (`map`, `filter`, `reduce`, `find`)
- Objects & Destructuring
- DOM Manipulation
- Event Handling (`click`, `input`, `submit`, etc.)
- ES6 Features
- Async: Promises & `async/await`
- Fetch API
- Event Loop
- Modules: `import` / `export`
  **Page:** [pages/practice-js.html](https://easyvanilla.vercel.app/pages/practice-js.html)

---

## Quiz

Test your understanding of the foundational concepts with topic-wise quizzes. Each quiz includes 20 multiple-choice questions for HTML, CSS, and JavaScript. This is designed to help reinforce knowledge and prepare for ReactJS development.

**Page:** [pages/quiz.html](https://easyvanilla.vercel.app/pages/quiz.html)

- 40 questions each for HTML, CSS, and JavaScript
- Multiple choice format with instant feedback
- Tracks score and review answers

## Reference Page

Explore the dedicated [Reference Page](https://easyvanilla.vercel.app/pages/reference.html) for deeper learning, including:

### HTML Resources

- [MDN HTML Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [YouTube Full Tutorial](https://www.youtube.com/watch?v=pQN-pnXPaVg)
- Built-in Live HTML Preview

### CSS Resources

- [MDN CSS Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [YouTube CSS Tutorial](https://www.youtube.com/watch?v=yfoY53QXEnI)
- Built-in CSS Playground

### JavaScript Resources

- [MDN JS Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript Crash Course](https://www.youtube.com/watch?v=W6NZfCO5SIk)
- JS Terminal Output Simulation

### Extra Tools

- [CodePen](https://codepen.io/pen)
- [JSFiddle](https://jsfiddle.net/)
- [Frontend Mentor Challenges](https://www.frontendmentor.io/challenges)

---

## Mobile Optimization

- Detects mobile devices
- Displays a message:  
  _"Touch any title to show preview"_
- Sticky Run Button for convenience
- Drawer-based layout with collapsible sidebar

---

##  Logo Animation

- Header includes **BMC IT Club** logo
- Logo has a **subtle pulse animation**
- Clicking the logo returns to the homepage (`index.html`)

```css
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.08);
    opacity: 0.9;
  }
}
```

## Built with vanilla html,css and js

### Contributions are always accepted. Feel free to suggest any feature, report bug or fork this website as you like .

# BMC IT Club - Let's Learn React

### Love from Arun Neupane
---

## License

This project is for educational and personal learning purposes only. Commercial use, public deployment, or any revenue-generating use requires explicit written permission from the author. See [LICENSE](LICENSE) for details.
