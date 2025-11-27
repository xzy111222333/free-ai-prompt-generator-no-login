<template>
  <div class="container-responsive py-8 space-y-8">
    <div class="max-w-4xl mx-auto">
      <div class="card-surface rounded-3xl border border-[var(--surface-border)]/80 p-8 lg:p-12 elegant-shadow">
        <div class="prose prose-lg max-w-none">
          <h1 class="text-4xl font-bold text-[var(--text-strong)] mb-8">Contact Us</h1>
          
          <p class="text-xl text-[var(--text-muted)] leading-relaxed mb-8">
            We'd love to hear from you! Whether you have questions, feedback, or suggestions for improving PromptRule, we're here to help.
          </p>

          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 class="text-2xl font-semibold text-[var(--text-strong)] mb-6">Get in Touch</h2>
              
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-teal)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-2">Email Support</h3>
                    <p class="text-base text-[var(--text-muted)] leading-relaxed mb-2">
                      For general inquiries, technical support, or feedback about PromptRule.
                    </p>
                    <a href="mailto:support@promptrule.com" class="text-[var(--accent-blue)] hover:underline font-medium">
                      support@promptrule.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-[var(--accent-green)] to-[var(--accent-wave-green)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-2">Feature Requests</h3>
                    <p class="text-base text-[var(--text-muted)] leading-relaxed mb-2">
                      Have an idea for a new feature or improvement? We'd love to hear it!
                    </p>
                    <a href="mailto:features@promptrule.com" class="text-[var(--accent-blue)] hover:underline font-medium">
                      features@promptrule.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-[var(--accent-pink)] to-[var(--accent-wave-pink)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-2">Business Inquiries</h3>
                    <p class="text-base text-[var(--text-muted)] leading-relaxed mb-2">
                      For partnerships, integrations, or business-related questions.
                    </p>
                    <a href="mailto:business@promptrule.com" class="text-[var(--accent-blue)] hover:underline font-medium">
                      business@promptrule.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 class="text-2xl font-semibold text-[var(--text-strong)] mb-6">Quick Contact Form</h2>
              
              <form class="space-y-4" @submit.prevent="handleSubmit">
                <div>
                  <label for="name" class="block text-sm font-medium text-[var(--text-muted)] mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name"
                    class="form-input text-sm"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-[var(--text-muted)] mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email"
                    class="form-input text-sm"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label for="subject" class="block text-sm font-medium text-[var(--text-muted)] mb-2">Subject</label>
                  <select 
                    id="subject" 
                    v-model="form.subject"
                    class="form-input text-sm"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feature">Feature Request</option>
                    <option value="bug">Bug Report</option>
                    <option value="business">Business Inquiry</option>
                  </select>
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-[var(--text-muted)] mb-2">Message</label>
                  <textarea 
                    id="message" 
                    v-model="form.message"
                    rows="5"
                    class="form-textarea text-sm"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  class="btn-primary hover-lift w-full"
                  :disabled="isSubmitting"
                >
                  <span v-if="!isSubmitting">Send Message</span>
                  <span v-else>Sending...</span>
                </button>

                <p v-if="submitMessage" class="text-sm text-center" :class="submitSuccess ? 'text-[var(--accent-green)]' : 'text-[var(--accent-pink)]'">
                  {{ submitMessage }}
                </p>
              </form>
            </div>
          </div>

          <div class="bg-[var(--surface-50)] rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-[var(--text-strong)] mb-4">Response Time</h3>
            <p class="text-base text-[var(--text-muted)] leading-relaxed mb-4">
              We typically respond to all inquiries within 24-48 hours during business days. For urgent technical issues, please include "URGENT" in your subject line.
            </p>
            <p class="text-sm text-[var(--text-muted)]">
              <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (UTC)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Set page meta
useHead({
  title: 'Contact PromptRule - Get Support & Share Feedback',
  meta: [
    {
      name: 'description',
      content: 'Contact PromptRule for support, feature requests, or business inquiries. We respond within 24-48 hours and are here to help you get the most from our AI prompt tools.'
    }
  ]
})

// Form state
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

// Handle form submission
const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Simulate form submission (replace with actual implementation)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Create mailto link as fallback
    const mailtoLink = `mailto:support@promptrule.com?subject=${encodeURIComponent(form.value.subject + ': ' + form.value.name)}&body=${encodeURIComponent(`Name: ${form.value.name}\nEmail: ${form.value.email}\n\nMessage:\n${form.value.message}`)}`
    
    if (typeof window !== 'undefined') {
      window.location.href = mailtoLink
    }
    
    submitMessage.value = 'Your default email client should open with the message pre-filled. If it doesn\'t, please email us directly at support@promptrule.com'
    submitSuccess.value = true
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    submitMessage.value = 'There was an error sending your message. Please try again or email us directly at support@promptrule.com'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}
</script>
