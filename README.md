# Diary APP - Work in Progress

An app that features combining creativity, reflection, and personalization in one app—super engaging.

## Features

1. Authentication & Security

    * Passcode lock or biometric security (if you want to explore mobile later).
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

    * Themes and backgrounds (light/dark mode, custom color palettes).
    * Font choices and sizes.

## Tech Stack

- Frontend: React (or Next.js for SSR) + TailwindCSS
- Drawing Tool: Fabric.js or React-Canvas-Draw
- Backend: Node.js + Express or Next.js API routes
- Database: MongoDB (or Upstash for faster key-value storage)
- Authentication: Magic Link (optional) + Passcode feature for extra security
- File Storage: Cloudinary or Firebase Storage for images

## File Structure

```bash
📁 diary-app
│
├── 📂 public/
│
├── 📂 src/
│ ├── 📂 components/
│ │ ├── 📄 DiaryEntryForm.js
│ │ ├── 📄 DrawingCanvas.js
│ │ ├── 📄 MoodSelector.js
│ │ ├── 📄 CalendarView.js
│ │ ├── 📄 PasscodeLock.js
│ │ ├── 📄 ThemeSwitcher.js
│ │ └── 📄 GridJournalPrompts.js
│ │
│ ├── 📂 pages/
│ │ ├── 📄 index.js # Home page
│ │ └── 📂 diary/
│ │ ├── 📄 new.js # New entry page
│ │ └── 📄 [id].js # Entry detail page
│ │
│ ├── 📄 settings.js
│ │
│ ├── 📂 api/
│ │ ├── 📄 entries.js
│ │ ├── 📄 moods.js
│ │ └── 📄 passcode.js
│ │
│ ├── 📂 context/
│ │ ├── 📄 ThemeContext.js
│ │ └── 📄 AuthContext.js
│ │
│ ├── 📂 styles/
│ │ ├── 📄 globals.css
│ │ └── 📄 themes.css
│ │
│ ├── 📂 utils/
│ │ ├── 📄 storage.js
│ │ └── 📄 dateUtils.js
│ │
│ ├── 📂 hooks/
│ │ └── 📄 usePasscode.js
│ │
│ └── 📂 config/
│
├── 📄 index.js
├── 📄 .env.local
├── 📄 tailwind.config.js
├── 📄 next.config.js
├── 📄 package.json
└── 📄 README.md
```