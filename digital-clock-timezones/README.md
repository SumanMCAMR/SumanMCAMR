# 🕐 Multi-Timezone Digital Clock

A modern, visually stunning digital clock application that displays real-time across multiple time zones with a beautiful gradient UI and smooth animations.

## ✨ Features

- 🌍 **40+ Timezones** - Support for timezones across the globe
- ⏰ **Real-Time Updates** - Live clock updating every second
- 🎨 **Beautiful UI** - Gradient backgrounds, smooth animations, and modern design
- 🔍 **Search Functionality** - Easily find and add timezones
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- 🌓 **Day Period Indicator** - Shows morning, afternoon, evening, or night
- 📊 **Timezone Information** - Displays UTC offset for each timezone
- 💾 **Dynamic Management** - Add and remove timezones on the fly
- ♿ **Accessible** - Semantic HTML and keyboard navigation support

## 🚀 Live Demo

View the live application: [Digital Clock Live](https://sumanmcamr.github.io/SumanMCAMR/digital-clock-timezones/)

## 📦 What's Included

```
digital-clock-timezones/
├── index.html       # Main HTML structure
├── styles.css       # Complete styling with animations
├── script.js        # JavaScript functionality
└── README.md        # Documentation
```

## 🎯 Supported Timezones

### Americas
- America/New_York
- America/Chicago
- America/Denver
- America/Los_Angeles
- America/Anchorage
- Pacific/Honolulu
- America/Toronto
- America/Mexico_City
- America/Sao_Paulo
- America/Panama
- America/Lima
- America/Argentina/Buenos_Aires

### Europe & Africa
- Europe/London
- Europe/Paris
- Europe/Berlin
- Europe/Moscow
- Europe/Istanbul
- Europe/Athens
- Europe/Amsterdam
- Europe/Madrid
- Africa/Cairo
- Africa/Johannesburg

### Asia & Middle East
- Asia/Dubai
- Asia/Kolkata
- Asia/Bangkok
- Asia/Hong_Kong
- Asia/Shanghai
- Asia/Tokyo
- Asia/Seoul
- Asia/Singapore
- Asia/Jakarta
- Asia/Ho_Chi_Minh
- Asia/Dhaka
- Asia/Karachi

### Australia & Pacific
- Australia/Sydney
- Australia/Melbourne
- Australia/Brisbane
- Australia/Perth
- Pacific/Auckland
- Pacific/Fiji
- Pacific/Tongatapu

## 🎮 How to Use

1. **View Default Clocks**
   - Open the application to see clocks for New York, London, and Tokyo

2. **Add a Timezone**
   - Use the search box to find a timezone
   - Click "Add Timezone" button or press Enter
   - The timezone will be added to the display

3. **Select from Dropdown**
   - Use the dropdown menu to select a timezone
   - Click to add it to the grid

4. **Remove a Timezone**
   - Click the red ❌ button on any clock card
   - The timezone will be removed from the display

5. **Reset to Defaults**
   - Click the "Reset" button to return to the default three timezones

## 🎨 UI Features

- **Gradient Background** - Smooth gradient from dark purple to blue
- **Card Design** - Each timezone has an animated card with hover effects
- **Smooth Animations** - Fade-in, scale, and slide animations
- **Dynamic Colors** - Gradient text for digital clock displays
- **Status Indicators** - UTC offset and day period for each timezone
- **Search Highlight** - Visual feedback on search and selection

## 💻 Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with gradients, animations, and flexbox/grid
- **Vanilla JavaScript** - No dependencies, lightweight and fast
- **Font Awesome** - Icon library for UI elements

## 🔧 Customization

### Change Default Timezones
Edit the `selectedTimezones` array in `script.js`:

```javascript
let selectedTimezones = ['America/New_York', 'Europe/London', 'Asia/Tokyo'];
```

### Modify Colors
Update the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... more colors ... */
}
```

### Change Update Interval
Modify the interval in `script.js`:

```javascript
setInterval(updateAllClocks, 1000); // 1000ms = 1 second
```

## 📱 Responsive Design

- **Desktop** - Multi-column grid layout
- **Tablet** - Adaptive grid with 2-3 columns
- **Mobile** - Single column layout for easy viewing

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- High contrast text and backgrounds
- ARIA-friendly design
- Font Awesome icons with proper labeling

## 🚀 Deployment

This application can be deployed anywhere:

1. **GitHub Pages** - Free hosting
2. **Netlify** - Easy deployment from GitHub
3. **Vercel** - Fast static site hosting
4. **Any Web Server** - Simple HTML/CSS/JS files

## 📝 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🎓 Learning Resources

- **JavaScript Timezones** - Uses `Intl.DateTimeFormat` API
- **CSS Animations** - Modern CSS keyframe animations
- **Responsive Design** - Mobile-first design approach
- **DOM Manipulation** - Dynamic element creation and updates

## 🐛 Known Issues

None at the moment! If you find any, please report them.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Improve documentation
- Add more timezones

## 📄 License

MIT License - Feel free to use this project for personal and commercial purposes.

## 👨‍💻 Author

Created by **SUMAN** - Full Stack Developer

---

⭐ If you find this project helpful, please star it!
