function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState(null);

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => setSubmitStatus(null), 5000);
      }, 1000);
    };

    const contactInfo = [
      {
        icon: 'mail',
        title: 'Email',
        value: 'wasim.akram@email.com',
        link: 'mailto:wasim.akram@email.com'
      },
      {
        icon: 'phone',
        title: 'Phone',
        value: '+1 (555) 123-4567',
        link: 'tel:+15551234567'
      },
      {
        icon: 'map-pin',
        title: 'Location',
        value: 'San Francisco, CA',
        link: null
      }
    ];

    return (
      <section id="contact" className="py-20 px-6 bg-white" data-name="contact" data-file="components/Contact.js">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center mb-4">Get In Touch</h2>
          <p className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            Ready to discuss your next project or have questions about DevOps solutions? 
            I'd love to hear from you and explore how we can work together.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">Send a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="icon-check-circle text-green-600 mr-2"></div>
                    <p className="text-green-800">Message sent successfully! I'll get back to you soon.</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="icon-loader text-lg mr-2 inline-block animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <div className="icon-send text-lg mr-2 inline-block"></div>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center mr-4">
                      <div className={`icon-${info.icon} text-xl text-[var(--primary-color)]`}></div>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">{info.title}</p>
                      {info.link ? (
                        <a href={info.link} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[var(--text-secondary)]">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="card bg-[var(--secondary-color)]">
                <h4 className="font-semibold mb-4 text-[var(--text-primary)]">Let's Connect</h4>
                <p className="text-[var(--text-secondary)] mb-4">
                  Follow me on social media for updates on the latest DevOps trends, 
                  cloud technologies, and industry insights.
                </p>
                
                <div className="flex space-x-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors shadow-sm">
                    <div className="icon-github text-lg"></div>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors shadow-sm">
                    <div className="icon-linkedin text-lg"></div>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors shadow-sm">
                    <div className="icon-twitter text-lg"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <p className="text-[var(--text-secondary)]">
              © 2025 Wasim Akram. Built with passion for DevOps and cloud technologies.
            </p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}