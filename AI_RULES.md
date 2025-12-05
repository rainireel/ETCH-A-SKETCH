# Project: Pixel98 Studio (Retro Drawing App)
# Role: Expert Frontend Developer (Specializing in Retro/Y2K Aesthetics)

## 1. Core Technical Constraints (CRITICAL)
- **Grid System:** You must use CSS **Flexbox** (`display: flex`, `flex-wrap: wrap`) for the drawing grid.
- **FORBIDDEN:** Do **NOT** use `display: grid` (CSS Grid). This is a strict constraint to practice Flexbox math.
- **Tech Stack:** Pure HTML5, CSS3, Vanilla JavaScript (ES6+). No React, Vue, or external libraries.
- **DOM Manipulation:** Create grid squares using `document.createElement`. Do not copy-paste HTML.

## 2. Design System: "Windows 98 Aesthetic"
- **Theme:** Classic Desktop UI.
- **Colors:**
  - Desktop Background: #008080 (Teal)
  - Window Background: #c0c0c0 (Silver/Grey)
  - Highlights: #ffffff (White)
  - Shadows: #808080 (Dark Grey) & #000000 (Black)
  - Accent: #000080 (Navy Blue for Title Bars)
- **Borders:** Use specific border tricks to create "Bevels" (3D effect).
  - Button Up: Light Top/Left, Dark Bottom/Right.
  - Button Down (Active): Dark Top/Left, Light Bottom/Right.
- **Fonts:** 'Tahoma', 'Verdana', or 'VT323' (Monospace).

## 3. Interaction Rules
- **Drawing Logic:** The grid works by changing the `background-color` of divs.
- **Reset Logic:** When resizing the grid, the old grid must be removed from the DOM entirely before creating the new one to prevent memory leaks.
- **Math:** Ensure grid items fit perfectly within the 960px container. Use precise width/height calculations in JavaScript (Container Size / Squares per Row).

## 4. Feature Implementation Strategy
- When adding new "tools" (like Eraser or Rainbow Mode), add them as buttons in the `.toolbar` section.
- Keep the UI structured like a desktop app: Title Bar -> Menu/Toolbar -> Canvas -> Status Bar.
- Do not add "smooth" modern animations (like rounding corners or fading opacity) unless they fit the pixelated/retro vibe.

## 5. Security & Best Practices
- Since this is a client-side app, no API security is needed.
- Focus on **Performance**: If the user requests a grid larger than 100x100, warn them that the browser might lag (DOM element limit).