// Sample property data
const properties = [
  {
    id: 1,
    title: 'Luxury Beachfront Villa',
    location: 'Malibu, California',
    type: 'villa',
    price: 450,
    rating: 4.9,
    reviews: 127,
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=300&h=200&fit=crop',
    ],
    amenities: [
      'Ocean view',
      'Private pool',
      'WiFi',
      'Kitchen',
      'Air conditioning',
      'Hot tub',
      'Beach access',
      'Parking',
    ],
    description:
      'Experience luxury living in this stunning beachfront villa with panoramic ocean views, private pool, and direct beach access.',
  },
  {
    id: 2,
    title: 'Modern Downtown Apartment',
    location: 'New York, NY',
    type: 'apartment',
    price: 180,
    rating: 4.7,
    reviews: 89,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&h=200&fit=crop',
    ],
    amenities: [
      'City view',
      'WiFi',
      'Kitchen',
      'Air conditioning',
      'Gym access',
      'Elevator',
      '24/7 security',
      'Near subway',
    ],
    description:
      'Stylish apartment in the heart of Manhattan with modern amenities and easy access to all NYC attractions.',
  },
  {
    id: 3,
    title: 'Cozy Mountain Cabin',
    location: 'Aspen, Colorado',
    type: 'cabin',
    price: 220,
    rating: 4.8,
    reviews: 156,
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=300&h=200&fit=crop',
    ],
    amenities: [
      'Mountain view',
      'Fireplace',
      'WiFi',
      'Kitchen',
      'Heating',
      'Hot tub',
      'Ski storage',
      'Parking',
    ],
    description:
      'Perfect mountain retreat with stunning views, cozy fireplace, and easy access to world-class skiing.',
  },
  {
    id: 4,
    title: 'Charming City House',
    location: 'San Francisco, CA',
    type: 'house',
    price: 320,
    rating: 4.6,
    reviews: 93,
    guests: 5,
    bedrooms: 3,
    bathrooms: 2,
    image:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1562182384-08115de5ee97?w=300&h=200&fit=crop',
    ],
    amenities: [
      'City view',
      'Garden',
      'WiFi',
      'Kitchen',
      'Air conditioning',
      'Parking',
      'Near public transport',
      'Pet friendly',
    ],
    description:
      'Victorian-style house in the heart of San Francisco with modern amenities and classic charm.',
  },
  {
    id: 5,
    title: 'Tropical Beachfront Bungalow',
    location: 'Maui, Hawaii',
    type: 'beachfront',
    price: 380,
    rating: 4.9,
    reviews: 201,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    image:
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1562790351-d273a961e0e9?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop',
    ],
    amenities: [
      'Ocean view',
      'Beach access',
      'WiFi',
      'Kitchen',
      'Air conditioning',
      'Snorkeling gear',
      'Surfboard',
      'Parking',
    ],
    description:
      'Paradise found! Stunning beachfront bungalow with direct beach access and all the amenities for a perfect tropical getaway.',
  },
  {
    id: 6,
    title: 'Urban Loft Apartment',
    location: 'Chicago, IL',
    type: 'apartment',
    price: 160,
    rating: 4.5,
    reviews: 67,
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&h=200&fit=crop',
    ],
    amenities: [
      'City view',
      'High ceilings',
      'WiFi',
      'Kitchen',
      'Air conditioning',
      'Elevator',
      'Near restaurants',
      'Public transport',
    ],
    description:
      'Stylish loft in downtown Chicago with exposed brick walls, high ceilings, and modern amenities.',
  },
]

let currentProperties = [...properties]
let favorites = JSON.parse(localStorage.getItem('favorites')) || []

// DOM Elements
const propertiesGrid = document.getElementById('properties-grid')
const filterButtons = document.querySelectorAll('.filter-btn')
const sortSelect = document.getElementById('sort-select')
const propertyModal = document.getElementById('property-modal')
const bookingModal = document.getElementById('booking-modal')
const modalBody = document.getElementById('modal-body')

// Initialize the app
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM Content Loaded - Starting app initialization')

  // Immediately hide loading screen
  const loadingScreen = document.getElementById('loading-screen')
  if (loadingScreen) {
    console.log('Hiding loading screen immediately')
    loadingScreen.style.display = 'none'
  }

  loadProperties()
  setupEventListeners()
  setDefaultDates()

  // Fallback: Ensure loading screen is hidden
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen')
    if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
      loadingScreen.classList.add('hidden')
      setTimeout(() => {
        loadingScreen.style.display = 'none'
      }, 500)
    }
  }, 3000)
})

function setDefaultDates() {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const checkinInput = document.getElementById('checkin-input')
  const checkoutInput = document.getElementById('checkout-input')

  if (checkinInput) checkinInput.value = today.toISOString().split('T')[0]
  if (checkoutInput) checkoutInput.value = tomorrow.toISOString().split('T')[0]
}

function setupEventListeners() {
  // Filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'))
      button.classList.add('active')
      filterProperties(button.dataset.type)
    })
  })

  // Sort dropdown
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      sortProperties(sortSelect.value)
    })
  }

  // Modal close buttons
  document.querySelectorAll('.close-modal').forEach((closeBtn) => {
    closeBtn.addEventListener('click', closeModal)
  })

  // Click outside modal to close
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal()
    }
  })

  // Booking form
  const bookingForm = document.getElementById('booking-form')
  if (bookingForm) {
    bookingForm.addEventListener('submit', handleBooking)
  }
}

function loadProperties() {
  console.log('Loading properties...')
  propertiesGrid.innerHTML =
    '<div class="loading"><div class="spinner"></div></div>'

  setTimeout(() => {
    console.log(
      'Displaying properties:',
      currentProperties.length,
      'properties'
    )
    displayProperties(currentProperties)
  }, 500)
}

function displayProperties(propertiesToShow) {
  propertiesGrid.innerHTML = ''

  if (propertiesToShow.length === 0) {
    propertiesGrid.innerHTML =
      '<div class="text-center"><h3>No properties found</h3><p>Try adjusting your filters or search criteria.</p></div>'
    return
  }

  propertiesToShow.forEach((property) => {
    const propertyCard = createPropertyCard(property)
    propertiesGrid.appendChild(propertyCard)
  })
}

function createPropertyCard(property) {
  const isLiked = favorites.includes(property.id)

  const card = document.createElement('div')
  card.className = 'property-card fade-in'
  card.innerHTML = `
        <div class="property-image">
            <img src="${property.image}" alt="${
    property.title
  }" onerror="this.src='https://via.placeholder.com/300x200?text=Property+Image'">
            <div class="property-badge">${property.type}</div>
            <button class="favorite-btn ${
              isLiked ? 'liked' : ''
            }" onclick="toggleFavorite(${property.id})">
                <i class="fas fa-heart"></i>
            </button>
        </div>
        <div class="property-info">
            <div class="property-location">${property.location}</div>
            <h3 class="property-title">${property.title}</h3>
            <div class="property-details">${property.guests} guests • ${
    property.bedrooms
  } bedrooms • ${property.bathrooms} bathrooms</div>
            <div class="property-rating">
                <div class="rating-stars">
                    ${'★'.repeat(Math.floor(property.rating))}${'☆'.repeat(
    5 - Math.floor(property.rating)
  )}
                </div>
                <span class="rating-text">${property.rating} (${
    property.reviews
  } reviews)</span>
            </div>
            <div class="property-price">
                <span class="price-amount">$${property.price}</span>
                <span class="price-period">night</span>
            </div>
        </div>
    `

  card.addEventListener('click', (e) => {
    if (!e.target.closest('.favorite-btn')) {
      showPropertyDetails(property)
    }
  })

  return card
}

function filterProperties(type) {
  if (type === 'all') {
    currentProperties = [...properties]
  } else {
    currentProperties = properties.filter((property) => property.type === type)
  }
  displayProperties(currentProperties)
}

function sortProperties(criteria) {
  switch (criteria) {
    case 'price-asc':
      currentProperties.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      currentProperties.sort((a, b) => b.price - a.price)
      break
    case 'rating':
      currentProperties.sort((a, b) => b.rating - a.rating)
      break
    case 'newest':
      currentProperties.sort((a, b) => b.id - a.id)
      break
  }
  displayProperties(currentProperties)
}

function searchProperties() {
  const location = document.getElementById('location-input').value.toLowerCase()
  const checkin = document.getElementById('checkin-input').value
  const checkout = document.getElementById('checkout-input').value
  const guests = parseInt(document.getElementById('guests-input').value)

  let filtered = properties

  if (location) {
    filtered = filtered.filter(
      (property) =>
        property.location.toLowerCase().includes(location) ||
        property.title.toLowerCase().includes(location)
    )
  }

  if (guests) {
    filtered = filtered.filter((property) => property.guests >= guests)
  }

  currentProperties = filtered
  displayProperties(currentProperties)

  // Show a message if search was performed
  if (location || guests) {
    const searchMessage = document.createElement('div')
    searchMessage.className = 'search-message'
    searchMessage.style.cssText =
      'background: #e8f5e8; padding: 1rem; border-radius: 8px; margin-bottom: 2rem; text-align: center;'
    searchMessage.innerHTML = `<i class="fas fa-search"></i> Found ${filtered.length} properties matching your search`
    propertiesGrid.parentNode.insertBefore(searchMessage, propertiesGrid)

    setTimeout(() => {
      searchMessage.remove()
    }, 3000)
  }
}

function toggleFavorite(propertyId) {
  const index = favorites.indexOf(propertyId)
  if (index > -1) {
    favorites.splice(index, 1)
  } else {
    favorites.push(propertyId)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))

  // Update the UI
  const favoriteBtn = document.querySelector(
    `[onclick="toggleFavorite(${propertyId})"]`
  )
  if (favoriteBtn) {
    favoriteBtn.classList.toggle('liked')
  }
}

function showPropertyDetails(property) {
  modalBody.innerHTML = `
        <div class="modal-property-images">
            ${property.images
              .map(
                (img) =>
                  `<img src="${img}" alt="${property.title}" onerror="this.src='https://via.placeholder.com/300x200?text=Property+Image'">`
              )
              .join('')}
        </div>
        
        <div class="modal-property-header">
            <div>
                <h2 class="modal-property-title">${property.title}</h2>
                <p class="modal-property-location">${property.location}</p>
                <div class="property-rating">
                    <div class="rating-stars">
                        ${'★'.repeat(Math.floor(property.rating))}${'☆'.repeat(
    5 - Math.floor(property.rating)
  )}
                    </div>
                    <span class="rating-text">${property.rating} (${
    property.reviews
  } reviews)</span>
                </div>
            </div>
            <button class="modal-book-btn" onclick="showBookingModal(${
              property.id
            })">
                Book for $${property.price}/night
            </button>
        </div>
        
        <div class="modal-property-features">
            <div class="feature-section">
                <h3>Property Details</h3>
                <ul class="feature-list">
                    <li><i class="fas fa-users"></i> ${
                      property.guests
                    } guests</li>
                    <li><i class="fas fa-bed"></i> ${
                      property.bedrooms
                    } bedrooms</li>
                    <li><i class="fas fa-bath"></i> ${
                      property.bathrooms
                    } bathrooms</li>
                    <li><i class="fas fa-home"></i> ${property.type}</li>
                </ul>
            </div>
            
            <div class="feature-section">
                <h3>Amenities</h3>
                <ul class="feature-list">
                    ${property.amenities
                      .map(
                        (amenity) =>
                          `<li><i class="fas fa-check"></i> ${amenity}</li>`
                      )
                      .join('')}
                </ul>
            </div>
        </div>
        
        <div class="feature-section">
            <h3>About this place</h3>
            <p>${property.description}</p>
        </div>
    `

  propertyModal.style.display = 'block'
  document.body.style.overflow = 'hidden'
}

function showBookingModal(propertyId) {
  const property = properties.find((p) => p.id === propertyId)
  const totalCostElement = document.getElementById('total-cost')

  if (totalCostElement) {
    totalCostElement.textContent = `$${property.price}`
  }

  closeModal()
  bookingModal.style.display = 'block'
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  propertyModal.style.display = 'none'
  bookingModal.style.display = 'none'
  document.body.style.overflow = 'auto'
}

function handleBooking(e) {
  e.preventDefault()

  // Show success message
  const successMessage = document.createElement('div')
  successMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #28a745;
        color: white;
        padding: 2rem;
        border-radius: 8px;
        z-index: 3000;
        text-align: center;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    `
  successMessage.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 2rem; margin-bottom: 1rem; display: block;"></i>
        <h3>Booking Confirmed!</h3>
        <p>Thank you for your booking. You will receive a confirmation email shortly.</p>
    `

  document.body.appendChild(successMessage)
  closeModal()

  setTimeout(() => {
    successMessage.remove()
  }, 3000)

  // Reset form
  e.target.reset()
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const href = this.getAttribute('href')
    if (href && href.length > 1) {
      // skip if href is just '#'
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  })
})

// Add scroll effect to header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header')
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.95)'
    header.style.backdropFilter = 'blur(10px)'
  } else {
    header.style.background = '#fff'
    header.style.backdropFilter = 'none'
  }
})

// Lazy loading for images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove('lazy')
        imageObserver.unobserve(img)
      }
    })
  })

  document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]')
    lazyImages.forEach((img) => imageObserver.observe(img))
  })
}

// Authentication System
class AuthManager {
  constructor() {
    this.currentUser = null
    this.init()
  }

  init() {
    // Check for existing session
    this.checkSession()
    this.setupEventListeners()
    this.setupPasswordStrength()
    this.setupTwoFactorInputs()
  }

  checkSession() {
    const userData = localStorage.getItem('currentUser')
    const sessionToken = localStorage.getItem('sessionToken')

    if (userData && sessionToken) {
      this.currentUser = JSON.parse(userData)
      this.updateUIForLoggedInUser()
      this.validateSession()
    }
  }

  async validateSession() {
    // Simulate session validation with server
    try {
      const isValid = await this.simulateSessionValidation()
      if (!isValid) {
        this.logout()
      }
    } catch (error) {
      console.error('Session validation error:', error)
    }
  }

  async simulateSessionValidation() {
    // Simulate API call - replace with actual endpoint
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 500)
    })
  }

  setupEventListeners() {
    // User menu toggle
    const userMenuBtn = document.getElementById('user-menu-btn')
    const userDropdown = document.getElementById('user-dropdown')

    if (userMenuBtn && userDropdown) {
      userMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        userDropdown.classList.toggle('show')
      })

      document.addEventListener('click', () => {
        userDropdown.classList.remove('show')
      })

      userDropdown.addEventListener('click', (e) => {
        e.stopPropagation()
      })
    }

    // Form submissions
    const loginForm = document.getElementById('login-form')
    const registerForm = document.getElementById('register-form')
    const forgotPasswordForm = document.getElementById('forgot-password-form')
    const twoFactorForm = document.getElementById('two-factor-form')

    if (loginForm) {
      loginForm.addEventListener('submit', (e) => this.handleLogin(e))
    }
    if (registerForm) {
      registerForm.addEventListener('submit', (e) => this.handleRegister(e))
    }
    if (forgotPasswordForm) {
      forgotPasswordForm.addEventListener('submit', (e) =>
        this.handleForgotPassword(e)
      )
    }
    if (twoFactorForm) {
      twoFactorForm.addEventListener('submit', (e) => this.handleTwoFactor(e))
    }
  }

  setupPasswordStrength() {
    const passwordInput = document.getElementById('register-password')
    if (passwordInput) {
      passwordInput.addEventListener('input', (e) => {
        this.updatePasswordStrength(e.target.value)
      })
    }
  }

  updatePasswordStrength(password) {
    const strengthBar = document.querySelector('.strength-fill')
    const strengthText = document.querySelector('.strength-text')

    if (!strengthBar || !strengthText) return

    let strength = 0
    let text = 'Very weak'

    // Check password criteria
    if (password.length >= 8) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/\d/.test(password)) strength++
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++

    // Update UI based on strength
    strengthBar.className = 'strength-fill'

    if (strength <= 1) {
      strengthBar.classList.add('weak')
      text = 'Very weak'
    } else if (strength === 2) {
      strengthBar.classList.add('weak')
      text = 'Weak'
    } else if (strength === 3) {
      strengthBar.classList.add('fair')
      text = 'Fair'
    } else if (strength === 4) {
      strengthBar.classList.add('good')
      text = 'Good'
    } else if (strength === 5) {
      strengthBar.classList.add('strong')
      text = 'Strong'
    }

    strengthText.textContent = text
  }

  setupTwoFactorInputs() {
    const codeInputs = document.querySelectorAll('.code-input')

    codeInputs.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        const value = e.target.value

        if (value && index < codeInputs.length - 1) {
          codeInputs[index + 1].focus()
        }

        if (value) {
          input.classList.add('filled')
        } else {
          input.classList.remove('filled')
        }
      })

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
          codeInputs[index - 1].focus()
        }
      })
    })
  }

  async handleLogin(e) {
    e.preventDefault()
    const submitBtn = e.target.querySelector('.auth-submit-btn')
    const btnText = submitBtn.querySelector('.btn-text')
    const btnLoader = submitBtn.querySelector('.btn-loader')

    try {
      this.setLoading(submitBtn, btnText, btnLoader, true)

      const email = document.getElementById('login-email').value
      const password = document.getElementById('login-password').value
      const rememberMe = document.getElementById('remember-me').checked

      // Simulate login API call
      const result = await this.simulateLogin(email, password)

      if (result.requiresTwoFactor) {
        this.showTwoFactorAuth()
        return
      }

      if (result.success) {
        this.handleLoginSuccess(result.user, rememberMe)
      } else {
        this.showError('Invalid email or password')
      }
    } catch (error) {
      this.showError('Login failed. Please try again.')
      console.error('Login error:', error)
    } finally {
      this.setLoading(submitBtn, btnText, btnLoader, false)
    }
  }

  async handleRegister(e) {
    e.preventDefault()
    const submitBtn = e.target.querySelector('.auth-submit-btn')
    const btnText = submitBtn.querySelector('.btn-text')
    const btnLoader = submitBtn.querySelector('.btn-loader')

    try {
      this.setLoading(submitBtn, btnText, btnLoader, true)

      const firstName = document.getElementById('register-firstname').value
      const lastName = document.getElementById('register-lastname').value
      const email = document.getElementById('register-email').value
      const phone = document.getElementById('register-phone').value
      const password = document.getElementById('register-password').value
      const confirmPassword = document.getElementById(
        'register-confirm-password'
      ).value
      const agreeTerms = document.getElementById('agree-terms').checked
      const marketingEmails =
        document.getElementById('marketing-emails').checked

      // Validation
      if (password !== confirmPassword) {
        this.showError('Passwords do not match')
        return
      }

      if (!agreeTerms) {
        this.showError('Please agree to the Terms of Service')
        return
      }

      // Simulate registration API call
      const result = await this.simulateRegister({
        firstName,
        lastName,
        email,
        phone,
        password,
        marketingEmails,
      })

      if (result.success) {
        this.showEmailVerification(email)
      } else {
        this.showError(result.message || 'Registration failed')
      }
    } catch (error) {
      this.showError('Registration failed. Please try again.')
      console.error('Registration error:', error)
    } finally {
      this.setLoading(submitBtn, btnText, btnLoader, false)
    }
  }

  async handleForgotPassword(e) {
    e.preventDefault()
    const submitBtn = e.target.querySelector('.auth-submit-btn')
    const btnText = submitBtn.querySelector('.btn-text')
    const btnLoader = submitBtn.querySelector('.btn-loader')

    try {
      this.setLoading(submitBtn, btnText, btnLoader, true)

      const email = document.getElementById('forgot-email').value

      // Simulate forgot password API call
      const result = await this.simulateForgotPassword(email)

      if (result.success) {
        this.showSuccess('Reset link sent to your email')
        setTimeout(() => {
          closeModal()
        }, 2000)
      } else {
        this.showError('Email not found')
      }
    } catch (error) {
      this.showError('Failed to send reset link. Please try again.')
      console.error('Forgot password error:', error)
    } finally {
      this.setLoading(submitBtn, btnText, btnLoader, false)
    }
  }

  async handleTwoFactor(e) {
    e.preventDefault()
    const submitBtn = e.target.querySelector('.auth-submit-btn')

    try {
      submitBtn.disabled = true

      const codeInputs = document.querySelectorAll('.code-input')
      const code = Array.from(codeInputs)
        .map((input) => input.value)
        .join('')

      if (code.length !== 6) {
        this.showError('Please enter the complete 6-digit code')
        return
      }

      // Simulate 2FA verification
      const result = await this.simulateTwoFactorVerification(code)

      if (result.success) {
        this.handleLoginSuccess(result.user, false)
      } else {
        this.showError('Invalid verification code')
      }
    } catch (error) {
      this.showError('Verification failed. Please try again.')
      console.error('Two-factor error:', error)
    } finally {
      submitBtn.disabled = false
    }
  }

  async simulateLogin(email, password) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Demo users for testing
    const demoUsers = [
      {
        email: 'demo@esona.com',
        password: 'demo123',
        user: {
          id: 1,
          firstName: 'Demo',
          lastName: 'User',
          email: 'demo@esona.com',
          phone: '+1234567890',
        },
      },
      {
        email: 'sam.mbende2@gmail.com',
        password: 'admin123',
        user: {
          id: 2,
          firstName: 'Sam',
          lastName: 'Mbende',
          email: 'sam.mbende2@gmail.com',
          phone: '+1234567890',
        },
      },
    ]

    const user = demoUsers.find(
      (u) => u.email === email && u.password === password
    )

    if (user) {
      return {
        success: true,
        user: user.user,
        requiresTwoFactor: email === 'admin@esona.com', // Demo 2FA for admin
      }
    }

    return { success: false }
  }

  async simulateRegister(userData) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Check if email already exists (demo)
    if (userData.email === 'existing@esona.com') {
      return { success: false, message: 'Email already exists' }
    }

    return { success: true }
  }

  async simulateForgotPassword(email) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simulate success for valid email formats
    return { success: email.includes('@') }
  }

  async simulateTwoFactorVerification(code) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    if (code === '123456') {
      return {
        success: true,
        user: {
          id: 2,
          firstName: 'Admin',
          lastName: 'User',
          email: 'admin@esona.com',
          phone: '+1234567890',
        },
      }
    }

    return { success: false }
  }

  handleLoginSuccess(user, rememberMe) {
    this.currentUser = user

    // Store session data
    localStorage.setItem('currentUser', JSON.stringify(user))
    localStorage.setItem('sessionToken', this.generateSessionToken())

    if (rememberMe) {
      localStorage.setItem('rememberUser', 'true')
    }

    this.updateUIForLoggedInUser()
    closeModal()
    this.showSuccess(`Welcome back, ${user.firstName}!`)
  }

  generateSessionToken() {
    return (
      'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now()
    )
  }

  updateUIForLoggedInUser() {
    const authButtons = document.getElementById('auth-buttons')
    const userInfo = document.getElementById('user-info')
    const userMenuItems = document.getElementById('user-menu-items')
    const userName = document.getElementById('user-name')
    const userEmail = document.getElementById('user-email')

    if (authButtons) authButtons.style.display = 'none'
    if (userInfo) userInfo.style.display = 'block'
    if (userMenuItems) userMenuItems.style.display = 'block'

    if (userName && this.currentUser) {
      userName.textContent = `${this.currentUser.firstName} ${this.currentUser.lastName}`
    }
    if (userEmail && this.currentUser) {
      userEmail.textContent = this.currentUser.email
    }
  }

  logout() {
    this.currentUser = null
    localStorage.removeItem('currentUser')
    localStorage.removeItem('sessionToken')
    localStorage.removeItem('rememberUser')

    // Update UI
    const authButtons = document.getElementById('auth-buttons')
    const userInfo = document.getElementById('user-info')
    const userMenuItems = document.getElementById('user-menu-items')

    if (authButtons) authButtons.style.display = 'flex'
    if (userInfo) userInfo.style.display = 'none'
    if (userMenuItems) userMenuItems.style.display = 'none'

    this.showSuccess('You have been logged out successfully')
  }

  showTwoFactorAuth() {
    const loginForm = document.querySelector('#login-form')
    const twoFactorSection = document.getElementById('two-factor-section')

    if (loginForm) loginForm.style.display = 'none'
    if (twoFactorSection) twoFactorSection.style.display = 'block'
  }

  showEmailVerification(email) {
    const verificationEmail = document.getElementById('verification-email')
    if (verificationEmail) {
      verificationEmail.textContent = email
    }

    closeModal()
    document.getElementById('email-verification-modal').style.display = 'block'
    document.body.style.overflow = 'hidden'
  }

  setLoading(button, textElement, loaderElement, isLoading) {
    button.disabled = isLoading
    if (textElement) textElement.style.display = isLoading ? 'none' : 'inline'
    if (loaderElement)
      loaderElement.style.display = isLoading ? 'inline' : 'none'
  }

  showError(message) {
    this.showMessage(message, 'error')
  }

  showSuccess(message) {
    this.showMessage(message, 'success')
  }

  showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll(
      '.error-message, .success-message'
    )
    existingMessages.forEach((msg) => msg.remove())

    // Create new message
    const messageDiv = document.createElement('div')
    messageDiv.className = `${type}-message`
    messageDiv.textContent = message

    // Add to active modal or create floating message
    const activeModal = document.querySelector(
      '.modal[style*="block"] .auth-form'
    )
    if (activeModal) {
      activeModal.insertBefore(messageDiv, activeModal.firstChild)
    } else {
      // Create floating message
      messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 3000;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        max-width: 350px;
      `
      document.body.appendChild(messageDiv)
    }

    // Auto remove after 5 seconds
    setTimeout(() => {
      messageDiv.remove()
    }, 5000)
  }
}

// Initialize Authentication Manager
const authManager = new AuthManager()

// Global authentication functions
function showLoginModal() {
  document.getElementById('login-modal').style.display = 'block'
  document.body.style.overflow = 'hidden'
}

function showRegisterModal() {
  document.getElementById('register-modal').style.display = 'block'
  document.body.style.overflow = 'hidden'
}

function showForgotPassword() {
  closeModal()
  document.getElementById('forgot-password-modal').style.display = 'block'
  document.body.style.overflow = 'hidden'
}

function switchToRegister() {
  closeModal()
  showRegisterModal()
}

function switchToLogin() {
  closeModal()
  showLoginModal()
}

function togglePassword(inputId) {
  const input = document.getElementById(inputId)
  const icon = input.nextElementSibling.nextElementSibling.querySelector('i')

  if (input.type === 'password') {
    input.type = 'text'
    icon.className = 'fas fa-eye-slash'
  } else {
    input.type = 'password'
    icon.className = 'fas fa-eye'
  }
}

function logout() {
  authManager.logout()
}

function resendCode() {
  authManager.showSuccess('Verification code resent')
}

function resendVerification() {
  authManager.showSuccess('Verification email resent')
}

// Social Authentication (placeholder functions)
function loginWithGoogle() {
  authManager.showMessage('Google OAuth integration would go here', 'success')
}

function registerWithGoogle() {
  authManager.showMessage('Google OAuth integration would go here', 'success')
}

function loginWithFacebook() {
  authManager.showMessage('Facebook OAuth integration would go here', 'success')
}

function registerWithFacebook() {
  authManager.showMessage('Facebook OAuth integration would go here', 'success')
}

function loginWithApple() {
  authManager.showMessage('Apple Sign-In integration would go here', 'success')
}

function registerWithApple() {
  authManager.showMessage('Apple Sign-In integration would go here', 'success')
}

// Modern Engagement Features Manager
class EngagementManager {
  constructor() {
    this.init()
  }

  init() {
    this.setupLoadingScreen()
    this.setupNotifications()
    this.setupPWA()
    this.setupChat()
    this.setupKeyboardShortcuts()
    this.setupCommandPalette()
    this.setupFloatingActionButtons()
    this.setupAdvancedFilters()
    this.setupVoiceSearch()
    this.setupSmartSearch()
    this.setupTutorial()
    this.setupRecommendations()
    this.setupWishlist()
    this.setupComparison()

    // Ensure tutorial overlay is hidden on startup
    const tutorialOverlay = document.getElementById('tutorial-overlay')
    if (tutorialOverlay) {
      tutorialOverlay.classList.add('hidden')
      tutorialOverlay.style.display = 'none'
    }

    // Ensure command palette is hidden on startup
    const commandPalette = document.getElementById('command-palette')
    if (commandPalette) {
      commandPalette.classList.add('hidden')
      commandPalette.style.display = 'none'
    }

    // Reset command palette state
    this.commandPaletteOpen = false

    this.checkFirstVisit()
  }

  setupLoadingScreen() {
    // Hide loading screen once DOM is fully loaded
    const loadingScreen = document.getElementById('loading-screen')
    if (loadingScreen) {
      // Add a shorter delay to show the loading animation briefly
      setTimeout(() => {
        loadingScreen.classList.add('hidden')
        // Remove completely after transition
        setTimeout(() => {
          loadingScreen.style.display = 'none'
        }, 500)
      }, 1000)
    }
  }

  setupNotifications() {
    this.notificationQueue = []
    this.processNotificationQueue()
  }

  showNotification(title, message, type = 'info', duration = 5000) {
    const toast = document.createElement('div')
    toast.className = `toast ${type}`

    const iconMap = {
      success: 'fa-check-circle',
      error: 'fa-exclamation-circle',
      warning: 'fa-exclamation-triangle',
      info: 'fa-info-circle',
    }

    toast.innerHTML = `
      <div class="toast-icon">
        <i class="fas ${iconMap[type]}"></i>
      </div>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
      </div>
      <button class="toast-close" onclick="this.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
    `

    const container = document.getElementById('toast-container')
    container.appendChild(toast)

    // Auto remove after duration
    setTimeout(() => {
      if (toast.parentElement) {
        toast.remove()
      }
    }, duration)

    return toast
  }

  processNotificationQueue() {
    // Process any queued notifications
    if (this.notificationQueue.length > 0) {
      const notification = this.notificationQueue.shift()
      this.showNotification(
        notification.title,
        notification.message,
        notification.type
      )
      setTimeout(() => this.processNotificationQueue(), 500)
    }
  }

  setupPWA() {
    let deferredPrompt

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      deferredPrompt = e

      // Show custom install prompt after delay
      setTimeout(() => {
        this.showPWAInstallPrompt(deferredPrompt)
      }, 30000) // Show after 30 seconds
    })

    window.addEventListener('appinstalled', () => {
      this.showNotification(
        'App Installed!',
        'Esona has been installed successfully',
        'success'
      )
    })
  }

  showPWAInstallPrompt(deferredPrompt) {
    const prompt = document.getElementById('pwa-install-prompt')
    const installBtn = prompt.querySelector('.pwa-install-btn')
    const dismissBtn = prompt.querySelector('.pwa-dismiss-btn')

    prompt.classList.remove('hidden')

    installBtn.onclick = async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice

        if (outcome === 'accepted') {
          this.showNotification(
            'Installing...',
            'Esona app is being installed',
            'info'
          )
        }

        deferredPrompt = null
      }
      prompt.classList.add('hidden')
    }

    dismissBtn.onclick = () => {
      prompt.classList.add('hidden')
      localStorage.setItem('pwa-dismissed', Date.now().toString())
    }
  }

  setupChat() {
    const chatToggle = document.getElementById('chat-toggle')
    const chatWindow = document.getElementById('chat-window')
    const chatClose = document.getElementById('chat-close')
    const chatInput = document.getElementById('chat-input')
    const chatSend = document.getElementById('chat-send')
    const chatMessages = document.getElementById('chat-messages')

    let chatOpen = false

    chatToggle.addEventListener('click', () => {
      chatOpen = !chatOpen
      chatWindow.style.display = chatOpen ? 'flex' : 'none'

      if (chatOpen) {
        this.hideChatBadge()
        chatInput.focus()
      }
    })

    chatClose.addEventListener('click', () => {
      chatOpen = false
      chatWindow.style.display = 'none'
    })

    const sendMessage = () => {
      const message = chatInput.value.trim()
      if (message) {
        this.addChatMessage(message, 'user')
        chatInput.value = ''

        // Simulate bot response
        setTimeout(() => {
          this.handleBotResponse(message)
        }, 1000)
      }
    }

    chatSend.addEventListener('click', sendMessage)
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage()
      }
    })

    // Show initial notification
    setTimeout(() => {
      if (!chatOpen) {
        this.showChatBadge()
      }
    }, 10000)
  }

  addChatMessage(content, sender) {
    const messagesContainer = document.getElementById('chat-messages')
    const messageDiv = document.createElement('div')
    messageDiv.className = `chat-message ${sender}-message`

    const now = new Date()
    const timeString = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })

    messageDiv.innerHTML = `
      <div class="message-content">${content}</div>
      <div class="message-time">${timeString}</div>
    `

    messagesContainer.appendChild(messageDiv)
    messagesContainer.scrollTop = messagesContainer.scrollHeight
  }

  handleBotResponse(userMessage) {
    const responses = {
      help: "I'm here to help! You can ask me about properties, bookings, or any questions about Esona.",
      property:
        'I can help you find the perfect property! What type of accommodation are you looking for?',
      booking:
        'To make a booking, simply click on any property you like and then click the "Book" button. I\'ll guide you through the process!',
      pricing:
        'Our properties range from $50 to $1000 per night. You can use our filters to find properties within your budget.',
      default:
        'Thanks for your message! A member of our team will get back to you shortly. Is there anything else I can help you with?',
    }

    let response = responses.default
    const message = userMessage.toLowerCase()

    for (const [key, value] of Object.entries(responses)) {
      if (message.includes(key)) {
        response = value
        break
      }
    }

    this.addChatMessage(response, 'bot')
  }

  showChatBadge() {
    const badge = document.getElementById('chat-badge')
    if (badge) {
      badge.style.display = 'flex'
    }
  }

  hideChatBadge() {
    const badge = document.getElementById('chat-badge')
    if (badge) {
      badge.style.display = 'none'
    }
  }

  setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + F - Focus search
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault()
        const searchInput = document.getElementById('location-input')
        if (searchInput) {
          searchInput.focus()
        }
      }

      // Ctrl/Cmd + K - Open command palette
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        this.toggleCommandPalette()
      }

      // Escape - Close modals/panels
      if (e.key === 'Escape') {
        this.closeAllModals()
      }

      // ? - Show shortcuts
      if (e.key === '?' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault()
        this.showKeyboardShortcuts()
      }

      // H - Go home (scroll to top)
      if (
        e.key === 'h' &&
        !e.ctrlKey &&
        !e.metaKey &&
        e.target.tagName !== 'INPUT'
      ) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }

      // F - Toggle favorites view
      if (
        e.key === 'f' &&
        !e.ctrlKey &&
        !e.metaKey &&
        e.target.tagName !== 'INPUT'
      ) {
        this.showWishlist()
      }
    })
  }

  setupCommandPalette() {
    this.commandPaletteOpen = false
    const palette = document.getElementById('command-palette')
    const input = document.getElementById('command-input')
    const results = document.getElementById('command-results')

    if (input) {
      input.addEventListener('input', (e) => {
        this.filterCommands(e.target.value)
      })

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.executeSelectedCommand()
        } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault()
          this.navigateCommands(e.key === 'ArrowDown' ? 1 : -1)
        }
      })
    }
  }

  toggleCommandPalette() {
    const palette = document.getElementById('command-palette')
    const input = document.getElementById('command-input')

    this.commandPaletteOpen = !this.commandPaletteOpen

    if (this.commandPaletteOpen) {
      palette.classList.remove('hidden')
      palette.style.display = '' // Remove any inline display style
      input.focus()
      document.body.style.overflow = 'hidden'
    } else {
      palette.classList.add('hidden')
      document.body.style.overflow = 'auto'
    }
  }

  filterCommands(query) {
    const commands = [
      { icon: 'fa-search', text: 'Search Properties', action: 'search' },
      { icon: 'fa-heart', text: 'View Favorites', action: 'favorites' },
      { icon: 'fa-user', text: 'User Profile', action: 'profile' },
      { icon: 'fa-question-circle', text: 'Help Center', action: 'help' },
      { icon: 'fa-cog', text: 'Settings', action: 'settings' },
      { icon: 'fa-microphone', text: 'Voice Search', action: 'voice' },
      { icon: 'fa-sliders-h', text: 'Advanced Filters', action: 'filters' },
    ]

    const filtered = commands.filter((cmd) =>
      cmd.text.toLowerCase().includes(query.toLowerCase())
    )

    this.displayCommands(filtered)
  }

  displayCommands(commands) {
    const results = document.getElementById('command-results')
    results.innerHTML = `
      <div class="command-group">
        <div class="command-group-title">Commands</div>
        ${commands
          .map(
            (cmd, index) => `
          <div class="command-item ${
            index === 0 ? 'selected' : ''
          }" data-action="${cmd.action}">
            <i class="fas ${cmd.icon}"></i>
            <span>${cmd.text}</span>
          </div>
        `
          )
          .join('')}
      </div>
    `
  }

  executeSelectedCommand() {
    const selected = document.querySelector('.command-item.selected')
    if (selected) {
      const action = selected.dataset.action
      this.handleCommand(action)
      this.toggleCommandPalette()
    }
  }

  handleCommand(action) {
    switch (action) {
      case 'search':
        document.getElementById('location-input').focus()
        break
      case 'favorites':
        this.showWishlist()
        break
      case 'voice':
        this.showVoiceSearch()
        break
      case 'filters':
        this.toggleAdvancedFilters()
        break
      case 'help':
        this.showNotification('Help', 'Opening help center...', 'info')
        break
      default:
        this.showNotification('Command', `Executing ${action}...`, 'info')
    }
  }

  setupFloatingActionButtons() {
    const fabMain = document.getElementById('fab-main')
    const fabMenu = document.getElementById('fab-menu')
    let fabOpen = false

    fabMain.addEventListener('click', () => {
      fabOpen = !fabOpen
      fabMain.classList.toggle('active', fabOpen)
      fabMenu.classList.toggle('show', fabOpen)
    })

    // Close FAB menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.fab-container') && fabOpen) {
        fabOpen = false
        fabMain.classList.remove('active')
        fabMenu.classList.remove('show')
      }
    })
  }

  setupAdvancedFilters() {
    this.advancedFiltersOpen = false
    this.setupPriceRange()
  }

  toggleAdvancedFilters() {
    const panel = document.getElementById('advanced-filters')
    this.advancedFiltersOpen = !this.advancedFiltersOpen

    if (this.advancedFiltersOpen) {
      panel.classList.add('show')
    } else {
      panel.classList.remove('show')
    }
  }

  setupPriceRange() {
    const minRange = document.getElementById('price-min')
    const maxRange = document.getElementById('price-max')
    const minVal = document.getElementById('price-min-val')
    const maxVal = document.getElementById('price-max-val')

    if (minRange && maxRange) {
      const updateValues = () => {
        const min = parseInt(minRange.value)
        const max = parseInt(maxRange.value)

        if (min >= max) {
          minRange.value = max - 10
        }

        minVal.textContent = minRange.value
        maxVal.textContent = maxRange.value
      }

      minRange.addEventListener('input', updateValues)
      maxRange.addEventListener('input', updateValues)
    }
  }

  setupVoiceSearch() {
    this.voiceSearchActive = false
    this.recognition = null

    if ('webkitSpeechRecognition' in window) {
      this.recognition = new webkitSpeechRecognition()
      this.recognition.continuous = false
      this.recognition.interimResults = false
      this.recognition.lang = 'en-US'

      this.recognition.onstart = () => {
        this.voiceSearchActive = true
        const btn = document.getElementById('voice-btn')
        const status = document.getElementById('voice-status')
        const animation = document.getElementById('voice-animation')

        if (btn) btn.classList.add('listening')
        if (status) status.textContent = 'Listening...'
        if (animation) animation.style.display = 'flex'
      }

      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript
        this.processVoiceCommand(transcript)
      }

      this.recognition.onerror = () => {
        this.showNotification(
          'Voice Search',
          'Sorry, could not understand. Please try again.',
          'error'
        )
        this.stopVoiceSearch()
      }

      this.recognition.onend = () => {
        this.stopVoiceSearch()
      }
    }
  }

  showVoiceSearch() {
    const modal = document.getElementById('voice-search-modal')
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'

    const btn = document.getElementById('voice-btn')
    btn.onclick = () => {
      if (this.voiceSearchActive) {
        this.stopVoiceSearch()
      } else {
        this.startVoiceSearch()
      }
    }
  }

  startVoiceSearch() {
    if (this.recognition) {
      this.recognition.start()
    } else {
      this.showNotification(
        'Voice Search',
        'Voice search is not supported in your browser',
        'warning'
      )
    }
  }

  stopVoiceSearch() {
    this.voiceSearchActive = false
    const btn = document.getElementById('voice-btn')
    const status = document.getElementById('voice-status')
    const animation = document.getElementById('voice-animation')

    if (btn) btn.classList.remove('listening')
    if (status) status.textContent = 'Tap to speak'
    if (animation) animation.style.display = 'none'
  }

  processVoiceCommand(transcript) {
    const results = document.getElementById('voice-results')
    results.innerHTML = `<p>You said: "${transcript}"</p>`

    // Process the command
    const locationInput = document.getElementById('location-input')
    if (locationInput) {
      locationInput.value = transcript
      searchProperties()
    }

    setTimeout(() => {
      closeModal()
      this.showNotification(
        'Voice Search',
        `Searching for: ${transcript}`,
        'success'
      )
    }, 2000)
  }

  setupSmartSearch() {
    const locationInput = document.getElementById('location-input')
    if (locationInput) {
      locationInput.addEventListener('focus', () => {
        this.showSearchSuggestions()
      })

      locationInput.addEventListener('input', (e) => {
        if (e.target.value.length > 2) {
          this.updateSearchSuggestions(e.target.value)
        }
      })

      document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-field')) {
          this.hideSearchSuggestions()
        }
      })
    }
  }

  showSearchSuggestions() {
    const suggestions = document.getElementById('search-suggestions')
    const popularDestinations = [
      { name: 'New York, NY', type: 'City', properties: 1250 },
      { name: 'Los Angeles, CA', type: 'City', properties: 890 },
      { name: 'Miami, FL', type: 'City', properties: 567 },
      { name: 'San Francisco, CA', type: 'City', properties: 432 },
      { name: 'Chicago, IL', type: 'City', properties: 678 },
      { name: 'Las Vegas, NV', type: 'City', properties: 345 },
    ]

    const suggestionsList = document.getElementById('suggestions-list')
    suggestionsList.innerHTML = popularDestinations
      .map(
        (dest) => `
      <div class="suggestion-item" onclick="selectSuggestion('${dest.name}')">
        <div class="suggestion-icon">
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <div class="suggestion-info">
          <div class="suggestion-title">${dest.name}</div>
          <div class="suggestion-subtitle">${dest.properties} properties</div>
        </div>
      </div>
    `
      )
      .join('')

    suggestions.classList.remove('hidden')
  }

  hideSearchSuggestions() {
    const suggestions = document.getElementById('search-suggestions')
    suggestions.classList.add('hidden')
  }

  setupTutorial() {
    this.tutorialSteps = [
      {
        title: 'Welcome to Esona!',
        text: "Let's take a quick tour to help you get started with finding your perfect stay.",
        target: null,
      },
      {
        title: 'Search for Properties',
        text: 'Use the search bar to find properties by location, dates, and guest count.',
        target: '.search-bar',
      },
      {
        title: 'Filter Your Results',
        text: 'Use these filters to narrow down properties by type and preferences.',
        target: '.filters',
      },
      {
        title: 'Property Details',
        text: 'Click on any property card to view detailed information and photos.',
        target: '.property-card',
      },
      {
        title: 'Quick Actions',
        text: 'Use the floating action button for quick access to advanced features.',
        target: '.fab-container',
      },
    ]

    this.currentTutorialStep = 0
  }

  startTutorial() {
    const overlay = document.getElementById('tutorial-overlay')
    overlay.classList.remove('hidden')
    this.currentTutorialStep = 0
    this.showTutorialStep()
  }

  showTutorialStep() {
    const step = this.tutorialSteps[this.currentTutorialStep]
    const title = document.getElementById('tutorial-title')
    const text = document.getElementById('tutorial-text')
    const indicators = document.getElementById('tutorial-indicators')
    const prevBtn = document.querySelector('.tutorial-prev')
    const nextBtn = document.querySelector('.tutorial-next')

    title.textContent = step.title
    text.textContent = step.text

    // Update indicators
    indicators.innerHTML = this.tutorialSteps
      .map(
        (_, index) =>
          `<div class="tutorial-dot ${
            index === this.currentTutorialStep ? 'active' : ''
          }" onclick="engagementManager.goToTutorialStep(${index})"></div>`
      )
      .join('')

    // Update buttons
    prevBtn.disabled = this.currentTutorialStep === 0
    nextBtn.textContent =
      this.currentTutorialStep === this.tutorialSteps.length - 1
        ? 'Finish'
        : 'Next'

    // Highlight target element
    this.highlightTutorialTarget(step.target)
  }

  highlightTutorialTarget(selector) {
    const spotlight = document.getElementById('tutorial-spotlight')

    if (selector) {
      const element = document.querySelector(selector)
      if (element) {
        const rect = element.getBoundingClientRect()
        spotlight.style.left = rect.left - 10 + 'px'
        spotlight.style.top = rect.top - 10 + 'px'
        spotlight.style.width = rect.width + 20 + 'px'
        spotlight.style.height = rect.height + 20 + 'px'
        spotlight.style.display = 'block'
      }
    } else {
      spotlight.style.display = 'none'
    }
  }

  nextTutorialStep() {
    if (this.currentTutorialStep < this.tutorialSteps.length - 1) {
      this.currentTutorialStep++
      this.showTutorialStep()
    } else {
      this.finishTutorial()
    }
  }

  previousTutorialStep() {
    if (this.currentTutorialStep > 0) {
      this.currentTutorialStep--
      this.showTutorialStep()
    }
  }

  goToTutorialStep(step) {
    this.currentTutorialStep = step
    this.showTutorialStep()
  }

  finishTutorial() {
    const overlay = document.getElementById('tutorial-overlay')
    overlay.classList.add('hidden')
    localStorage.setItem('tutorial-completed', 'true')
    this.showNotification(
      'Tutorial Complete!',
      "You're all set to explore Esona",
      'success'
    )
  }

  skipTutorial() {
    this.finishTutorial()
  }

  setupRecommendations() {
    // Load AI-powered recommendations based on user behavior
    setTimeout(() => {
      this.loadRecommendations()
    }, 3000)
  }

  loadRecommendations() {
    const section = document.getElementById('recommendations-section')
    const grid = document.getElementById('recommendations-grid')

    // Simulate personalized recommendations
    const recommendations = properties.slice(0, 3).map((property) => ({
      ...property,
      reason: this.getRecommendationReason(),
    }))

    if (recommendations.length > 0) {
      grid.innerHTML = recommendations
        .map(
          (property) => `
        <div class="property-card recommendation-card" onclick="showPropertyDetails(${JSON.stringify(
          property
        ).replace(/"/g, '&quot;')})">
          <div class="property-image">
            <img src="${property.image}" alt="${property.title}">
            <div class="property-badge">Recommended</div>
          </div>
          <div class="property-info">
            <div class="property-location">${property.location}</div>
            <h3 class="property-title">${property.title}</h3>
            <div class="recommendation-reason">${property.reason}</div>
            <div class="property-price">
              <span class="price-amount">$${property.price}</span>
              <span class="price-period">night</span>
            </div>
          </div>
        </div>
      `
        )
        .join('')

      section.classList.remove('hidden')
    }
  }

  getRecommendationReason() {
    const reasons = [
      'Based on your recent searches',
      'Similar to properties you liked',
      'Popular in your price range',
      'Trending in your area',
      'Perfect for your travel dates',
    ]
    return reasons[Math.floor(Math.random() * reasons.length)]
  }

  setupWishlist() {
    this.wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || []
  }

  showWishlist() {
    const modal = document.getElementById('wishlist-modal')
    const content = document.getElementById('wishlist-content')

    if (this.wishlistItems.length === 0) {
      content.innerHTML = `
        <div class="empty-state">
          <i class="fas fa-heart" style="font-size: 3rem; color: #ddd; margin-bottom: 1rem;"></i>
          <h3>Your wishlist is empty</h3>
          <p>Start adding properties to your wishlist by clicking the heart icon</p>
        </div>
      `
    } else {
      content.innerHTML = this.wishlistItems
        .map(
          (property) => `
        <div class="wishlist-item">
          <img src="${property.image}" alt="${property.title}">
          <div class="wishlist-info">
            <h4>${property.title}</h4>
            <p>${property.location}</p>
            <span class="price">$${property.price}/night</span>
          </div>
          <button onclick="engagementManager.removeFromWishlist(${property.id})" class="remove-btn">
            <i class="fas fa-times"></i>
          </button>
        </div>
      `
        )
        .join('')
    }

    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
  }

  addToWishlist(property) {
    if (!this.wishlistItems.find((item) => item.id === property.id)) {
      this.wishlistItems.push(property)
      localStorage.setItem('wishlist', JSON.stringify(this.wishlistItems))
      this.showNotification(
        'Added to Wishlist',
        `${property.title} has been saved`,
        'success'
      )
    }
  }

  removeFromWishlist(propertyId) {
    this.wishlistItems = this.wishlistItems.filter(
      (item) => item.id !== propertyId
    )
    localStorage.setItem('wishlist', JSON.stringify(this.wishlistItems))
    this.showWishlist() // Refresh the display
    this.showNotification('Removed', 'Property removed from wishlist', 'info')
  }

  setupComparison() {
    this.comparisonItems = []
  }

  addToComparison(property) {
    if (this.comparisonItems.length >= 3) {
      this.showNotification(
        'Comparison Limit',
        'You can compare up to 3 properties',
        'warning'
      )
      return
    }

    if (!this.comparisonItems.find((item) => item.id === property.id)) {
      this.comparisonItems.push(property)
      this.showNotification(
        'Added to Comparison',
        `${property.title} added for comparison`,
        'success'
      )
    }
  }

  showComparison() {
    if (this.comparisonItems.length === 0) {
      this.showNotification(
        'Empty Comparison',
        'Add properties to compare them',
        'info'
      )
      return
    }

    const modal = document.getElementById('comparison-modal')
    const table = document.getElementById('comparison-table')

    const comparisonData = [
      { label: 'Property', key: 'title' },
      { label: 'Location', key: 'location' },
      { label: 'Price/night', key: 'price', format: (val) => `$${val}` },
      { label: 'Guests', key: 'guests' },
      { label: 'Bedrooms', key: 'bedrooms' },
      { label: 'Bathrooms', key: 'bathrooms' },
      { label: 'Rating', key: 'rating', format: (val) => `⭐ ${val}` },
    ]

    table.innerHTML = comparisonData
      .map(
        (row) => `
      <div class="comparison-row">
        <div class="comparison-label">${row.label}</div>
        ${this.comparisonItems
          .map(
            (property) => `
          <div class="comparison-cell">
            ${row.format ? row.format(property[row.key]) : property[row.key]}
          </div>
        `
          )
          .join('')}
      </div>
    `
      )
      .join('')

    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
  }

  checkFirstVisit() {
    const hasVisited = localStorage.getItem('has-visited')
    const tutorialCompleted = localStorage.getItem('tutorial-completed')

    if (!hasVisited) {
      localStorage.setItem('has-visited', 'true')

      // Show welcome message
      setTimeout(() => {
        this.showNotification(
          'Welcome to Esona!',
          'Discover amazing vacation rentals worldwide',
          'success',
          8000
        )
      }, 3000)

      // Skip automatic tutorial for now to avoid blocking interface
      // Tutorial can be started manually from the help menu
      console.log('First visit detected, but skipping auto-tutorial')
    }
  }

  closeAllModals() {
    const modals = document.querySelectorAll('.modal')
    modals.forEach((modal) => {
      modal.style.display = 'none'
    })

    const overlays = document.querySelectorAll(
      '.command-palette, .tutorial-overlay, .advanced-filters'
    )
    overlays.forEach((overlay) => {
      overlay.classList.add('hidden')
      overlay.classList.remove('show')
    })

    document.body.style.overflow = 'auto'
    this.commandPaletteOpen = false
    this.advancedFiltersOpen = false
  }

  showKeyboardShortcuts() {
    const modal = document.getElementById('shortcuts-modal')
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
  }
}

// Initialize Engagement Manager
const engagementManager = new EngagementManager()

// Clear any blocking tutorial state for development
localStorage.removeItem('has-visited')
localStorage.removeItem('tutorial-completed')

// Force hide loading screen immediately
setTimeout(() => {
  const loadingScreen = document.getElementById('loading-screen')
  if (loadingScreen) {
    loadingScreen.classList.add('hidden')
    setTimeout(() => {
      loadingScreen.style.display = 'none'
    }, 500)
  }
}, 100)

// Global functions for engagement features
function sendQuickMessage(message) {
  engagementManager.addChatMessage(message, 'user')
  setTimeout(() => {
    engagementManager.handleBotResponse(message)
  }, 1000)
}

function selectSuggestion(location) {
  const locationInput = document.getElementById('location-input')
  if (locationInput) {
    locationInput.value = location
    engagementManager.hideSearchSuggestions()
    searchProperties()
  }
}

function showVoiceSearch() {
  engagementManager.showVoiceSearch()
}

function showWishlist() {
  engagementManager.showWishlist()
}

function showComparison() {
  engagementManager.showComparison()
}

function clearComparison() {
  engagementManager.comparisonItems = []
  engagementManager.showNotification(
    'Comparison Cleared',
    'All properties removed from comparison',
    'info'
  )
  closeModal()
}

function toggleAdvancedFilters() {
  engagementManager.toggleAdvancedFilters()
}

function resetFilters() {
  // Reset all filter inputs
  document.getElementById('price-min').value = 0
  document.getElementById('price-max').value = 1000
  document.getElementById('price-min-val').textContent = '0'
  document.getElementById('price-max-val').textContent = '1000'

  // Reset checkboxes
  document
    .querySelectorAll('.amenities-grid input[type="checkbox"]')
    .forEach((cb) => {
      cb.checked = false
    })

  document.getElementById('instant-book').checked = false

  engagementManager.showNotification(
    'Filters Reset',
    'All filters have been cleared',
    'info'
  )
}

function applyAdvancedFilters() {
  const minPrice = document.getElementById('price-min').value
  const maxPrice = document.getElementById('price-max').value
  const selectedAmenities = Array.from(
    document.querySelectorAll('.amenities-grid input:checked')
  ).map((cb) => cb.value)
  const instantBook = document.getElementById('instant-book').checked

  // Apply filters to current properties
  let filtered = [...properties]

  filtered = filtered.filter(
    (property) => property.price >= minPrice && property.price <= maxPrice
  )

  currentProperties = filtered
  displayProperties(currentProperties)

  engagementManager.toggleAdvancedFilters()
  engagementManager.showNotification(
    'Filters Applied',
    `Found ${filtered.length} properties`,
    'success'
  )
}

function startTutorial() {
  engagementManager.startTutorial()
}

function nextTutorialStep() {
  engagementManager.nextTutorialStep()
}

function previousTutorialStep() {
  engagementManager.previousTutorialStep()
}

function skipTutorial() {
  engagementManager.skipTutorial()
}

function clearRecentSearches() {
  localStorage.removeItem('recentSearches')
  engagementManager.showNotification(
    'Searches Cleared',
    'Recent searches have been cleared',
    'info'
  )
}

// --- ADMIN ADD PROPERTY FEATURE ---

// Show "Add Property" link only for admin
function updateAdminUI() {
  const addPropertyLink = document.getElementById('add-property-link')
  if (
    authManager.currentUser &&
    authManager.currentUser.email === 'sam.mbende2@gmail.com'
  ) {
    addPropertyLink.style.display = 'block'
  } else {
    addPropertyLink.style.display = 'none'
  }
}

// Call updateAdminUI after login/logout
// (Removed duplicate declaration of originalUpdateUI)
authManager.updateUIForLoggedInUser = function () {
  originalUpdateUI()
  updateAdminUI()
}

// Show Add Property Modal
function showAddPropertyModal() {
  document.getElementById('add-property-modal').style.display = 'block'
  document.body.style.overflow = 'hidden'
}

// Handle Add Property Form Submission
document.addEventListener('DOMContentLoaded', function () {
  const addPropertyForm = document.getElementById('add-property-form')
  if (addPropertyForm) {
    addPropertyForm.addEventListener('submit', function (e) {
      e.preventDefault()
      // Only allow admin
      if (
        !authManager.currentUser ||
        authManager.currentUser.email !== 'sam.mbende2@gmail.com'
      ) {
        alert('Only admin can add properties.')
        return
      }
      // Gather form data
      const newProperty = {
        id: properties.length + 1,
        title: document.getElementById('new-title').value,
        location: document.getElementById('new-location').value,
        type: document.getElementById('new-type').value,
        price: parseInt(document.getElementById('new-price').value),
        rating: 0,
        reviews: 0,
        guests: parseInt(document.getElementById('new-guests').value),
        bedrooms: parseInt(document.getElementById('new-bedrooms').value),
        bathrooms: parseInt(document.getElementById('new-bathrooms').value),
        image: document.getElementById('new-image').value,
        images: [document.getElementById('new-image').value],
        amenities: [],
        description: document.getElementById('new-description').value,
      }
      properties.push(newProperty)
      currentProperties = [...properties]
      displayProperties(currentProperties)
      closeModal()
      addPropertyForm.reset()
      engagementManager.showNotification(
        'Property Added',
        'New property has been added successfully!',
        'success'
      )
    })
  }
})
function updateAdminUI() {
  const addPropertyLink = document.getElementById('add-property-link')
  if (
    authManager.currentUser &&
    authManager.currentUser.email === 'sam.mbende2@gmail.com'
  ) {
    addPropertyLink.style.display = 'block'
  } else {
    addPropertyLink.style.display = 'none'
  }
}

// Ensure updateAdminUI runs after login/logout
// (Removed duplicate declaration of originalUpdateUI)
authManager.updateUIForLoggedInUser = function () {
  originalUpdateUI()
  updateAdminUI()
}

// Also run on DOMContentLoaded in case user is already logged in
document.addEventListener('DOMContentLoaded', updateAdminUI)

function closeModal() {
  document.querySelectorAll('.modal').forEach((modal) => {
    modal.style.display = 'none'
  })
  document.body.style.overflow = 'auto'
}
