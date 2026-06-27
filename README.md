# Airbnb Homepage Clone

A meticulously crafted, pixel-perfect clone of the Airbnb homepage built with modern web technologies. This project faithfully recreates the complex UI/UX of Airbnb, featuring interactive components, smooth scroll transitions, and fully responsive layouts.

# Deploy Link 
https://shrutir09.github.io/Airbnb-clone/

## ✨ Features

- **Interactive Navigation Bar**: 
  - Smoothly transitions from a large, detailed search bar to a compact, sticky pill-shaped navbar upon scrolling.
  - Interactive dropdown for the **User Profile / Menu** icon, including hover states and dividers.

- **Advanced Search Component**:
  - **Where Tab**: Interactive popup featuring suggested destinations with custom icons and styling.
  - **When Tab**: Dual-calendar layout design for date picking, complete with flexible date pills.
  - **Who Tab**: Interactive guest counter with working `+` and `-` state toggles for Adults, Children, Infants, and Pets.

- **Responsive Listing Carousels**:
  - Horizontal scrolling carousels for various destination categories (Varanasi, Goa, Darjeeling, etc.).
  - Responsive cards featuring high-quality images, heart favorite buttons, and conditional "Guest favourite" badges.
  - Interactive "See all" overlapping photo card at the end of each carousel.

- **Inspiration Section**:
  - A responsive 6-column grid at the footer displaying categories like "Arts & culture".
  - Scrollable tab navigation.

- **Fully Responsive**:
  - Perfectly adapts to Mobile, Tablet, and Desktop screen sizes utilizing Tailwind CSS utilities.

## 🛠️ Tech Stack

- **[React](https://reactjs.org/)**: UI Library
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI styling
- **[Lucide React](https://lucide.dev/)**: Beautiful, consistent icon set
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have Node.js and npm installed.
- [Node.js](https://nodejs.org/en/download/)

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd airbnb-clone
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit the local URL provided by Vite (usually `http://localhost:5173`).

## 📁 Project Structure

```text
src/
├── components/
│   ├── home/
│   │   ├── ListingCard.jsx     # Individual property card component
│   │   ├── ListingGrid.jsx     # Horizontal carousels container
│   │   └── Inspiration.jsx     # Footer inspiration destinations grid
│   └── layout/
│       ├── Navbar.jsx          # Complex interactive navbar & search component
│       └── Footer.jsx          # Page footer
├── data/
│   └── sectionsData.js         # Mock data for destinations and listings
├── App.jsx                     # Main application layout
├── index.css                   # Global Tailwind styles
└── main.jsx                    # React entry point
```

## 🎨 Design Notes

Special attention was given to:
- Exact font sizing, tracking, and leading to mimic Airbnb's typography.
- Subtle shadows, borders, and hover effects that give the UI a premium feel.
- Custom scrollbar hiding (`no-scrollbar`) for clean horizontal swiping on touch devices and trackpads.
- Complex z-indexing and absolute positioning to handle the overlapping search dropdowns gracefully.
