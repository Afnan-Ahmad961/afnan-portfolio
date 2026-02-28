'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Let&apos;s discuss it.
          </p>
        </div>

        {/* Form Container with Border Frame */}
        <div className="relative">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary"></div>

          <div className="border-2 border-accent/80 rounded-lg p-8 md:p-12 bg-background/50 backdrop-blur-sm">
            {submitted && (
              <div className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg">
                <p className="text-accent font-medium">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label className="block text-xs font-bold tracking-widest text-foreground mb-3 uppercase">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 bg-muted border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                      errors.name
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-accent/30 focus:border-accent'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-bold tracking-widest text-foreground mb-3 uppercase">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 bg-muted border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-accent/30 focus:border-accent'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-xs font-bold tracking-widest text-foreground mb-3 uppercase">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 bg-muted border-2 border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-bold tracking-widest text-foreground mb-3 uppercase">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className={`w-full px-4 py-3 bg-muted border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-accent/30 focus:border-accent'
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-12 py-6 border-2 border-foreground text-foreground cursor-pointer hover:bg-primary/10 rounded-lg font-bold tracking-widest uppercase transition-all disabled:opacity-50"
                  variant="outline"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
