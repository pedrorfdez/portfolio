import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Data Engineer Intern',
      company: 'Electronic Arts',
      period: '2025 - Present',
      location: 'Madrid, Spain',
      description:
        'Working on data pipelines, analytics, and data infrastructure to support game development and business intelligence initiatives.',
      technologies: [
        'Python',
        'SQL',
        'Apache Spark',
        'AWS',
        'Data Pipelines',
        'ETL',
        'Terraform',
        'Git/GitLab',
        'Terraform',
        'Jira',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Inetum',
      period: '2023 - 2023',
      location: 'Madrid, Spain',
      description:
        '.NET Developer and DB manager (SQL Server Management Studio) working on internal apps for a leading engineering and construction company (Técnicas Reunidas). Agile development using Azure and Jira.',
      technologies: ['.NET', 'JavaScript', 'MSSQL', 'Git', 'Jira'],
    },
    {
      title: 'Software Engineer',
      company: 'Freelance',
      period: '2020 - 2024',
      location: 'Remote',
      description:
        'Developed and maintained software applications, focusing on backend systems and full-stack development.',
      technologies: [
        'JavaScript',
        'Python',
        'React',
        'Angular',
        'Node.js',
        'Flask',
        'MySQL',
        'PostgreSQL',
        'Git',
      ],
    },
  ];

  return (
    <section
      id='experience'
      className='py-20 bg-gradient-to-br from-[#003554] to-[#051923]'
    >
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Professional <span className='text-[#00a6fb]'>Experience</span>
          </h2>
          <p className='text-xl text-white/80 max-w-3xl mx-auto'>
            My journey through the tech industry, from Software Engineering to
            Data Engineering
          </p>
        </div>

        <div className='space-y-8'>
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className='bg-white/5 border-white/10 backdrop-blur-sm'
            >
              <CardHeader>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                  <div>
                    <CardTitle className='text-2xl text-white mb-2'>
                      {exp.title}
                    </CardTitle>
                    <div className='flex items-center gap-2 text-[#00a6fb] mb-2'>
                      <Building size={18} />
                      <span className='text-lg font-semibold'>
                        {exp.company}
                      </span>
                    </div>
                  </div>
                  <div className='flex flex-col items-start md:items-end gap-2'>
                    <div className='flex items-center gap-2 text-white/70'>
                      <Calendar size={18} />
                      <span>{exp.period}</span>
                    </div>
                    <span className='text-white/70'>{exp.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-white/80 mb-6 text-lg'>{exp.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant='secondary'
                      className='bg-[#00a6fb]/20 text-[#00a6fb] border-[#00a6fb]/30'
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
