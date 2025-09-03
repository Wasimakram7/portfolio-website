function Experience() {
  try {
    const experiences = [
      {
        title: 'Senior DevOps Engineer',
        company: 'TechCorp Solutions',
        period: '2022 - Present',
        description: 'Leading DevOps initiatives for a team of 15+ developers. Designed and implemented cloud infrastructure serving 1M+ users.',
        achievements: [
          'Reduced deployment time by 75% through CI/CD automation',
          'Implemented monitoring stack reducing MTTR by 60%',
          'Migrated legacy applications to Kubernetes cluster'
        ]
      },
      {
        title: 'DevOps Engineer',
        company: 'StartupFlow Inc.',
        period: '2020 - 2022',
        description: 'Built scalable infrastructure and deployment pipelines for fast-growing startup environment.',
        achievements: [
          'Designed AWS infrastructure supporting 10x user growth',
          'Implemented Infrastructure as Code reducing provisioning time by 80%',
          'Set up comprehensive monitoring and alerting systems'
        ]
      },
      {
        title: 'Systems Administrator',
        company: 'DataSystems Ltd.',
        period: '2019 - 2020',
        description: 'Managed on-premise infrastructure and began transition to cloud technologies.',
        achievements: [
          'Maintained 99.9% uptime for critical business applications',
          'Automated routine tasks saving 20+ hours weekly',
          'Led migration from physical to virtualized infrastructure'
        ]
      }
    ];

    return (
      <section id="experience" className="py-20 px-6 bg-white" data-name="experience" data-file="components/Experience.js">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title text-center mb-12">Professional Experience</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[var(--primary-color)] opacity-20"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--primary-color)] rounded-full border-4 border-white shadow-lg"></div>
                
                <div className={`card ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--text-primary)]">{exp.title}</h3>
                      <p className="text-lg text-[var(--primary-color)] font-medium">{exp.company}</p>
                    </div>
                    <span className="bg-[var(--primary-color)] bg-opacity-10 text-[var(--primary-color)] px-3 py-1 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-[var(--text-secondary)] mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-[var(--text-secondary)]">
                        <div className="icon-arrow-right text-[var(--accent-color)] mr-2 mt-0.5 text-sm"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Experience component error:', error);
    return null;
  }
}