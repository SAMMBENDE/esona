document.addEventListener('DOMContentLoaded', function () {
  // Only allow admin access
  const user = JSON.parse(localStorage.getItem('currentUser') || '{}')
  if (!user.email || user.email !== 'sam.mbende2@gmail.com') {
    alert('Access denied. Only admin can use this page.')
    window.location.href = 'index.html'
    return
  }

  const form = document.getElementById('admin-add-property-form')
  const successMsg = document.getElementById('admin-success-message')

  form.addEventListener('submit', function (e) {
    e.preventDefault()

    // Gather form data
    const newProperty = {
      id: Date.now(),
      title: document.getElementById('admin-title').value,
      location: document.getElementById('admin-location').value,
      type: document.getElementById('admin-type').value,
      price: parseInt(document.getElementById('admin-price').value),
      rating: 0,
      reviews: 0,
      guests: parseInt(document.getElementById('admin-guests').value),
      bedrooms: parseInt(document.getElementById('admin-bedrooms').value),
      bathrooms: parseInt(document.getElementById('admin-bathrooms').value),
      image: document.getElementById('admin-image').value,
      images: [document.getElementById('admin-image').value],
      amenities: [],
      description: document.getElementById('admin-description').value,
    }

    // Save to localStorage for demo purposes
    let properties = JSON.parse(localStorage.getItem('properties') || '[]')
    properties.push(newProperty)
    localStorage.setItem('properties', JSON.stringify(properties))

    successMsg.textContent = 'Property added successfully!'
    successMsg.style.display = 'block'
    form.reset()
    setTimeout(() => {
      successMsg.style.display = 'none'
    }, 3000)
  })
})
