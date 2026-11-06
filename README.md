# Donnola – German A1

Learning web app for the Goethe-Zertifikat A1 (Start Deutsch 1). UI in English, content in German. No build, no server:
open `index.html` by double-click or host it as static files (GitHub Pages). Progress is stored in the browser (localStorage).

## Files
- `index.html`, `style.css`, `app.js` – app (lessons, Leitner cards, weak-spot quizzes, dictation, writing, speaking, Goethe-format Modelltests with timers)
- `data-lessons-1.js`, `data-lessons-2.js` – 13 lessons (grammar in English, vocabulary, exercises, reading, listening, writing, speaking)
- `data-exams.js` – 3 Modelltests in the exact Goethe structure (Hören 3 parts, Lesen 3 parts, Schreiben form + message, Sprechen 3 parts) and the exam info page
- `manifest.json` – web app manifest
- `assets/donnola.svg` – logo (weasel); inlined in the header, the home page reuses it
- `icon-512.png`, `icon-192.png`, `apple-touch-icon.png` (180 px), `favicon.ico` (16/32/48) – rendered from the logo on #F7F5F1 with 14 % margin, square corners

## Content
13 lessons, 959 unique words (1026 entries incl. repeats; covers the official Goethe A1 word list), 262 grammar items, 13 reading texts, 13 listening dialogues, 88 dictation sentences, 13 writing and 13 speaking tasks, 3 Modelltests.
Lessons: 1 greetings & spelling · 2 numbers, jobs, forms · 3 articles & plural · 4 family & possessives · 5 verbs & word order · 6 food & accusative · 7 town, directions & dative · 8 time, dates, separable verbs, appointments · 9 free time, modal verbs, weather · 10 shopping, clothes, ads · 11 home, travel, announcements, formal email · 12 Perfekt · 13 health & imperative.

## Scoring in the Modelltests
Each part is scaled to 25 points (Goethe), pass mark 60/100. Schreiben Teil 1 checks the 5 form fields exactly (umlauts may be typed as ae/oe/ue), Teil 2 checks content points and length. Sprechen is self-rated (3 + 6 + 6 points).

## Notes for development
- Vocabulary key = the German entry (stable). Words repeated in later lessons count once (first lesson).
- Listening uses `speechSynthesis` with a German voice (de-DE preferred); the home page shows a voice picker and a warning if none is installed.
- Personal data in model answers: Momoko Tanaka, from Tokyo, lives in St. Gallen, husband Eliseo. Age (34), job (Grafikerin), address and phone numbers are placeholders – adjust in the data files.
