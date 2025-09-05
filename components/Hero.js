function Hero() {
  try {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
      setIsVisible(true);
    }, []);

    return (
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6" data-name="hero" data-file="components/Hero.js">
        <div className="container mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <img
                src="https://images.stockcake.com/public/0/e/f/0efe4dee-4db8-473f-971b-82b4ba376f9a_large/classic-animated-character-stockcake.jpg"
                alt="Wasim Akram"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-xl"
              />
              
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-gradient">Wasim Akram</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-6">
                DevOps Engineer & Cloud Architect
              </p>
              
              <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
                Passionate about automating infrastructure, building CI/CD pipelines, and scaling applications in the cloud. 
                I help teams deliver software faster and more reliably.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                <div className="icon-folder text-lg mr-2 inline-block"></div>
                View My Work
              </button>
              
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                <div className="icon-mail text-lg mr-2 inline-block"></div>
                Get In Touch
              </button>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors duration-200">
                <div className="icon-github text-2xl"></div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors duration-200">
                <div className="icon-linkedin text-2xl"></div>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors duration-200">
                <div className="icon-twitter text-2xl"></div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}