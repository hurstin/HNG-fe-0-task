document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  // Form validation rules
  const validationRules = {
    'full-name': {
      required: true,
      minLength: 2,
      pattern: /^[A-Za-z\s]{2,}$/,
      errorMessage: 'Please enter a valid full name (minimum 2 characters)',
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: 'Please enter a valid email address',
    },
    subject: {
      required: true,
      minLength: 3,
      errorMessage: 'Please enter a subject (minimum 3 characters)',
    },
    message: {
      required: true,
      minLength: 10,
      errorMessage: 'Please enter a message with at least 10 characters',
    },
  };

  // Real-time validation
  contactForm.addEventListener('input', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      validateField(e.target);
    }
  });

  // Form submission
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;
    const fields = contactForm.querySelectorAll('input, textarea');

    fields.forEach((field) => {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    if (isValid) {
      // Simulate form submission
      successMessage.hidden = false;
      contactForm.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.hidden = true;
      }, 5000);
    }
  });

  function validateField(field) {
    const fieldId = field.id;
    const rules = validationRules[fieldId];
    const errorElement = document.getElementById(`${fieldId}-error`);

    if (!rules) return true;

    let isValid = true;
    let errorMessage = '';

    // Required field validation
    if (rules.required && !field.value.trim()) {
      isValid = false;
      errorMessage = 'This field is required';
    }
    // Pattern validation
    else if (rules.pattern && !rules.pattern.test(field.value)) {
      isValid = false;
      errorMessage = rules.errorMessage;
    }
    // Minimum length validation
    else if (rules.minLength && field.value.length < rules.minLength) {
      isValid = false;
      errorMessage = rules.errorMessage;
    }

    // Update field state
    if (isValid) {
      field.setAttribute('aria-invalid', 'false');
      field.classList.remove('error');
      errorElement.textContent = '';
    } else {
      field.setAttribute('aria-invalid', 'true');
      field.classList.add('error');
      errorElement.textContent = errorMessage;
    }

    return isValid;
  }

  // Enhanced keyboard navigation
  contactForm.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
    }
  });
});
