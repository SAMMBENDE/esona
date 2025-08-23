# Esona - Premium Vacation Rentals

A modern, responsive real estate web application for Airbnb-style vacation rentals built with HTML, CSS, and JavaScript.

## 🌟 Features

### Core Functionality
- **Property Listings**: Browse beautiful vacation rental properties
- **Advanced Search**: Search by location, dates, and guest count
- **Smart Filters**: Filter by property type (apartments, houses, villas, cabins, beachfront)
- **Sorting Options**: Sort by price, rating, or newest listings
- **Property Details**: Detailed modal views with image galleries and amenities
- **Booking System**: Complete booking form with date selection and guest information
- **Favorites**: Save favorite properties to local storage

### User Experience
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, Airbnb-inspired interface with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Real-time Updates**: Instant search results and filter updates
- **Accessibility**: Keyboard navigation and screen reader friendly

### Technical Features
- **Performance Optimized**: Lazy loading, efficient DOM manipulation
- **Local Storage**: Persistent favorites across sessions
- **Error Handling**: Graceful handling of missing images and data
- **Cross-browser Compatible**: Works on all modern browsers

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required - runs entirely in the browser!

### Installation
1. Download or clone the project files
2. Open `index.html` in your web browser
3. Start exploring properties!

### File Structure
```
esona/
│
├── index.html          # Main HTML file
├── style.css           # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── README.md          # Documentation
├── audio/             # Audio assets (future use)
├── images/            # Image assets
└── video/             # Video assets (future use)
```

## 🎨 Design Features

### Visual Elements
- **Modern Color Scheme**: Professional red (#ff385c) and neutral tones
- **Typography**: Inter font family for clean, readable text
- **Grid Layout**: CSS Grid for responsive property cards
- **Card Design**: Elevated cards with hover effects and shadows
- **Modal Windows**: Elegant overlays for property details and booking

### Responsive Breakpoints
- **Desktop**: 1200px+ (full grid layout)
- **Tablet**: 768px - 1199px (adapted grid)
- **Mobile**: 480px - 767px (stacked layout)
- **Small Mobile**: <480px (single column)

## 💡 Usage Guide

### Searching Properties
1. Use the search bar to enter your destination
2. Select check-in and check-out dates
3. Choose number of guests
4. Click the search button

### Filtering and Sorting
- Click filter buttons to show specific property types
- Use the sort dropdown to order results by price, rating, or date
- Filters and sorting work together for refined results

### Viewing Property Details
- Click any property card to open detailed view
- Browse through multiple property images
- Review amenities, ratings, and descriptions
- Click "Book" to start the reservation process

### Making a Booking
1. Click "Book" on any property
2. Fill out the booking form with your information
3. Select your dates and guest count
4. Review the total cost
5. Submit to confirm your booking

### Managing Favorites
- Click the heart icon on any property card
- Favorites are saved locally and persist between sessions
- Heart icon fills in red when property is favorited

## 🛠 Customization

### Adding New Properties
Edit the `properties` array in `script.js`:

```javascript
{
    id: 7,
    title: "Your Property Title",
    location: "City, State/Country",
    type: "apartment", // apartment, house, villa, cabin, beachfront
    price: 200,
    rating: 4.8,
    reviews: 120,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    image: "main-image-url",
    images: ["image1-url", "image2-url", ...],
    amenities: ["WiFi", "Kitchen", ...],
    description: "Property description..."
}
```

### Styling Changes
- Modify colors in `style.css` by changing CSS custom properties
- Adjust the main brand color by updating `#ff385c` throughout the CSS
- Customize fonts by changing the `font-family` declarations

### Functionality Enhancements
- Add payment processing integration
- Implement user authentication
- Connect to a backend database
- Add map integration for property locations

## 📱 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🔧 Technical Details

### Dependencies
- **Font Awesome**: 6.0.0 (icons)
- **Google Fonts**: Inter font family
- **No JavaScript frameworks**: Pure vanilla JavaScript for maximum performance

### Performance Features
- **Optimized Images**: Responsive image loading with fallbacks
- **Efficient DOM**: Minimal DOM manipulation for smooth performance
- **CSS Animations**: Hardware-accelerated animations using transform and opacity
- **Lazy Loading**: Images load as needed to improve initial page load

### Data Structure
Properties are stored as JavaScript objects with the following schema:
- Basic info (id, title, location, type)
- Pricing and capacity (price, guests, bedrooms, bathrooms)
- Social proof (rating, reviews)
- Media (main image, image gallery)
- Features (amenities array, description)

## 🎯 Future Enhancements

### Planned Features
- **Interactive Maps**: Property location visualization
- **Advanced Filters**: Price range, amenities, property features
- **User Accounts**: Registration, login, booking history
- **Reviews System**: Guest reviews and host responses
- **Payment Integration**: Secure payment processing
- **Calendar Integration**: Real-time availability checking
- **Multi-language Support**: Internationalization
- **Dark Mode**: Alternative color scheme option

### Backend Integration
- **Database**: Property and booking data persistence
- **API**: RESTful API for property management
- **Authentication**: User session management
- **Email**: Booking confirmations and notifications
- **Analytics**: Usage tracking and insights

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

**Esona** - Making vacation rental booking simple and beautiful.
