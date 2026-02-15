# Saudi National Day - Hero Section

A professional, fully responsive hero section for the Saudi National Day celebration website with slideshow functionality and modern design. This project includes **three different design variations** based on **DGA (Digital Government Authority)** templates.

## 📁 Project Structure

```
saudi-national-day-hero/
├── index.html          # Design 1 - Hero section with slideshow (DGA Template)
├── index-2.html       # Design 2 - Hero section (DGA Template)
├── index-3.html       # Design 3 - Hero section (DGA Template)
├── styles.css          # Main stylesheet (shared by all pages)
├── script.js           # Slideshow functionality (shared by all pages)
├── images/             # Image assets folder
│   ├── header-img-01/  # Images for Design 1
│   ├── header-img-02/  # Images for Design 2
│   └── header-img-03/  # Images for Design 3
└── README.md           # Project documentation
```

> **Note:** The `images` folder contains three subfolders (header-img-01, header-img-02, header-img-03), each with shared image assets used across all three templates.

## 🎨 Three Design Variations (DGA Templates)

This project includes three distinct hero section designs from the Digital Government Authority (DGA):

1. **Design 1 (index.html)** - Primary DGA design with auto-playing slideshow
2. **Design 2 (index-2.html)** - DGA layout with **custom inline styles**
3. **Design 3 (index-3.html)** - DGA layout with **custom inline styles**

### 📸 Image Assets

All three templates share image assets located in the `images` folder:
- **`images/header-img-01/`** - Contains images used in Design 1
- **`images/header-img-02/`** - Contains images used in Design 2  
- **`images/header-img-03/`** - Contains images used in Design 3

These image folders are shared across all templates and can be reused or swapped between designs.

> **Note:** All designs follow DGA standards and guidelines. Design 2 and Design 3 have their own unique styling embedded within their HTML files for specific visual variations, while still utilizing the shared `styles.css` for common elements.

## 🚀 Quick Start

### Option 1: Direct Browser Opening
1. Download all files from this project (including the `images` folder)
2. Keep all files in the same directory structure
3. Open any of the three HTML files in your web browser:
   - `index.html` - Design 1
   - `index-2.html` - Design 2
   - `index-3.html` - Design 3
4. Choose your preferred design or use them as templates for customization

### Option 2: Using VS Code (Recommended)
If you're opening this project in **Visual Studio Code**, we recommend using the **Live Server** extension for the best development experience:

1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code
2. Open the project folder in VS Code
3. Right-click on any HTML file (index.html, design-2.html, or design-3.html)
4. Select **"Open with Live Server"**
5. The page will open in your browser with auto-reload on file changes

**Benefits of Live Server:**
- ✅ Auto-refresh when you save changes
- ✅ Better handling of external CSS and JS files
- ✅ Local development server environment
- ✅ Faster development workflow

### Slideshow Timing

Modify the slide interval in `script.js`:

```javascript
const SLIDE_INTERVAL = 10000; // Change to desired milliseconds
```

### Hero Content

Edit the text content in any HTML file within the `.overlay-content` section.

### Custom Styles (Design 2 & 3)

Design 2 and Design 3 include custom inline styles within their `<style>` tags. These can be:
- Modified directly in the HTML file for quick changes
- Extracted to separate CSS files if preferred
- Used as inspiration for creating additional design variations

## 📱 Responsive Breakpoints

- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 👨‍💻 Development

This project was developed following DGA design standards and best practices for Saudi government websites.

## 📄 License

This code is provided as-is for educational and professional use.

## 🏛️ Credits

- **Design Templates**: Digital Government Authority (DGA) - Saudi Arabia
- **Standards Compliance**: Following DGA guidelines for government portals

## 🤝 Contributing

Feel free to use, modify, and share this code. If you make improvements, consider sharing them back with the community!

---

**Built with ❤️ for Saudi National Day 🇸🇦**  
*Based on DGA (Digital Government Authority) Templates*