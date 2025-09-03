function Projects() {
  try {
    const projects = [
      {
        title: 'Multi-Cloud Infrastructure Platform',
        description: 'Designed and built a unified platform for managing resources across AWS, Azure, and GCP using Terraform and Kubernetes.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        technologies: ['Terraform', 'Kubernetes', 'AWS', 'Azure', 'GCP'],
        features: [
          'Cross-cloud resource provisioning',
          'Centralized monitoring dashboard',
          'Automated cost optimization'
        ]
      },
      {
        title: 'CI/CD Pipeline Automation',
        description: 'Implemented comprehensive CI/CD pipelines reducing deployment time from hours to minutes for multiple microservices.',
        image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        technologies: ['Jenkins', 'Docker', 'GitLab CI', 'Prometheus'],
        features: [
          'Automated testing and deployment',
          'Blue-green deployment strategy',
          'Real-time monitoring integration'
        ]
      },
      {
        title: 'Microservices Monitoring Stack',
        description: 'Built comprehensive observability platform for distributed systems with custom dashboards and alerting.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger'],
        features: [
          'Distributed tracing',
          'Custom metrics collection',
          'Intelligent alerting system'
        ]
      }
    ];

    return (
      <section id="projects" className="py-20 px-6 bg-[var(--secondary-color)]" data-name="projects" data-file="components/Projects.js">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center mb-12">Featured Projects</h2>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">{project.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-[var(--primary-color)] bg-opacity-10 text-[var(--primary-color)] rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-sm text-[var(--text-secondary)]">
                      <div className="icon-check text-[var(--accent-color)] mr-2 mt-0.5 text-xs"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-[var(--text-secondary)] mb-6">
              Want to see more projects or discuss collaboration?
            </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              <div className="icon-arrow-right text-lg mr-2 inline-block"></div>
              Let's Connect
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}