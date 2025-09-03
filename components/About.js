function About() {
  try {
    return (
      <section id="about" className="py-20 px-6 bg-white" data-name="about" data-file="components/About.js">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)]">
                Building the Future of Infrastructure
              </h3>
              
              <div className="space-y-4 text-[var(--text-secondary)]">
                <p>
                  With over 5 years of experience in DevOps and cloud infrastructure, I specialize in designing 
                  and implementing scalable, reliable systems that power modern applications.
                </p>
                
                <p>
                  My journey began as a systems administrator, and I've evolved into a full-stack DevOps engineer 
                  who bridges the gap between development and operations teams.
                </p>
                
                <p>
                  I'm passionate about automation, continuous improvement, and helping teams deliver value 
                  to customers faster while maintaining the highest standards of security and reliability.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">What I Do</h4>
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-center">
                    <div className="icon-check-circle text-[var(--accent-color)] mr-3 text-lg"></div>
                    Cloud Infrastructure Design & Implementation
                  </li>
                  <li className="flex items-center">
                    <div className="icon-check-circle text-[var(--accent-color)] mr-3 text-lg"></div>
                    CI/CD Pipeline Development
                  </li>
                  <li className="flex items-center">
                    <div className="icon-check-circle text-[var(--accent-color)] mr-3 text-lg"></div>
                    Container Orchestration with Kubernetes
                  </li>
                  <li className="flex items-center">
                    <div className="icon-check-circle text-[var(--accent-color)] mr-3 text-lg"></div>
                    Infrastructure as Code (IaC)
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="icon-trophy text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">5+ Years</h4>
                    <p className="text-[var(--text-secondary)]">DevOps Experience</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="icon-cloud text-xl text-[var(--accent-color)]"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">AWS Certified</h4>
                    <p className="text-[var(--text-secondary)]">Solutions Architect</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="icon-users text-xl text-purple-600"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">50+ Projects</h4>
                    <p className="text-[var(--text-secondary)]">Successfully Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}