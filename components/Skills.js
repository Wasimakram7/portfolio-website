function Skills() {
  try {
    const skillCategories = [
      {
        title: 'Cloud Platforms',
        icon: 'cloud',
        skills: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean']
      },
      {
        title: 'Containers & Orchestration',
        icon: 'package',
        skills: ['Docker', 'Kubernetes', 'Docker Compose', 'Helm']
      },
      {
        title: 'CI/CD & Automation',
        icon: 'git-branch',
        skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'CircleCI']
      },
      {
        title: 'Infrastructure as Code',
        icon: 'file-code',
        skills: ['Terraform', 'CloudFormation', 'Ansible', 'Pulumi']
      },
      {
        title: 'Monitoring & Logging',
        icon: 'bar-chart-3',
        skills: ['Prometheus', 'Grafana', 'ELK Stack', 'DataDog']
      },
      {
        title: 'Programming & Scripting',
        icon: 'terminal',
        skills: ['Python', 'Bash', 'Go', 'YAML', 'JSON']
      }
    ];

    return (
      <section id="skills" className="py-20 px-6 bg-[var(--secondary-color)]" data-name="skills" data-file="components/Skills.js">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center mb-12">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                    <div className={`icon-${category.icon} text-xl text-blue-600`}></div>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-[var(--text-primary)]">Certifications</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="icon-award text-2xl text-orange-600"></div>
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">AWS Solutions Architect</h4>
                <p className="text-[var(--text-secondary)]">Associate Level</p>
              </div>
              
              <div className="card">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="icon-shield text-2xl text-[var(--primary-color)]"></div>
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">CKA</h4>
                <p className="text-[var(--text-secondary)]">Certified Kubernetes Administrator</p>
              </div>
              
              <div className="card">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="icon-check-circle text-2xl text-[var(--accent-color)]"></div>
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">HashiCorp Terraform</h4>
                <p className="text-[var(--text-secondary)]">Associate Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}