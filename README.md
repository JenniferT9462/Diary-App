# Diary APP - Work in Progress

An app that features combining creativity, reflection, and personalization in one app—super engaging.

## Features

1. Authentication & Security

    * Passcode lock or login 
2. Diary Entries

    * Text entries with rich text formatting.
    * Image uploads (maybe with drag-and-drop support).
    * Drawing canvas (a simple sketchpad).
3. Mood Tracker & Calendar Integration

    * Selectable mood icons for each entry.
    * Calendar view to browse past entries.
4. Grid Journal Prompts - May Change

    - Pre-set sections:
        * "I am grateful for..."
        * "What would make today great?"
        * "Daily Affirmation"
        * "Three things that happened today"
        * "How could I make today better?"
5. Customization Options

    * Themes and backgrounds (light/dark mode, custom color palettes). Wallpapers...
    * Font choices and sizes.

## Tech Stack

- Frontend: React (or Next.js for SSR) + TailwindCSS/DaisyUI
- Drawing Tool: Fabric.js or React-Canvas-Draw
- Backend: Node.js + Express or Next.js API routes
- Database: MongoDB 
- Authentication: Magic Link/Auth0 + Passcode feature for extra security
- File Storage: Cloudinary or Firebase Storage for images

## File Structure

```bash
📁 diary-app
│
├── 📂 public/         # Static assets like images, fonts, etc.
│
├── 📂 src/
│ ├── 📂 components/    # Reusable UI components
│ │ ├── 📄 DiaryEntryForm.js
│ │ ├── 📄 DrawingCanvas.js
│ │ ├── 📄 MoodSelector.js
│ │ ├── 📄 CalendarView.js
│ │ ├── 📄 PasscodeLock.js
│ │ ├── 📄 ThemeSwitcher.js
│ │ └── 📄 GridJournalPrompts.js
│ │
│ ├── 📂 pages/     # Next.js pages (routes)
│ │ ├── 📄 index.js # Home page
│ │ └── 📂 diary/   # Diary-related pages
│ │ ├── 📄 new.js   # New entry page
│ │ └── 📄 [id].js  # Entry detail page
│ │
│ ├── 📄 settings.js    # Themes, passcode, preferences
│ │
│ ├── 📂 api/       # API routes for backend logic
│ │ ├── 📄 entries.js
│ │ ├── 📄 moods.js
│ │ └── 📄 passcode.js
│ │
│ ├── 📂 context/   # React context for global state
│ │ ├── 📄 ThemeContext.js
│ │ └── 📄 AuthContext.js
│ │
│ ├── 📂 styles/    # Global styles and custom themes
│ │ ├── 📄 globals.css
│ │ └── 📄 themes.css
│ │
│ ├── 📂 utils/     # Utility functions and helpers
│ │ ├── 📄 storage.js   # MongoDB helpers
│ │ └── 📄 dateUtils.js
│ │
│ ├── 📂 hooks/     # Custom React hooks
│ │ └── 📄 usePasscode.js
│ │
│ └── 📂 config/    # Configuration files 
│   └── 📄 index.js
│
├── 📄 .env.local           # Environment variables
├── 📄 tailwind.config.js   # TailwindCSS config
├── 📄 next.config.js       # Next.js configuration
├── 📄 package.json         # Project metadata and dependencies
└── 📄 README.md            # Project documentation
```