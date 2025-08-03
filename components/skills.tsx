import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, BarChart } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        'Python',
        'JavaScript',
        'TypeScript',
        'SQL',
        'Java',
        'C Language',
      ],
    },
    {
      title: 'Data Engineering',
      icon: Database,
      skills: [
        'Apache Spark & Spark Streaming',
        'ETL Pipelines',
        'Data Warehousing',
        'PostgreSQL',
        'Pandas',
        'Apache Kafka',
        'Apache Flume',
        'HDFS',
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS', 'Git', 'Terraform', 'Docker', 'CI/CD', 'Linux'],
    },
    {
      title: 'Data Science & ML',
      icon: BarChart,
      skills: ['Machine Learning', 'Deep Learning', 'PyTorch', 'Tensorboard'],
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-br from-[#006494] to-[#003554]'>
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Technical <span className='text-[#00a6fb]'>Skills</span>
          </h2>
          <p className='text-xl text-white/80 max-w-3xl mx-auto'>
            A comprehensive toolkit for modern software development and data
            engineering
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className='bg-white/5 border-white/10 backdrop-blur-sm'
            >
              <CardHeader>
                <CardTitle className='flex items-center gap-3 text-white text-xl'>
                  <category.icon className='text-[#00a6fb]' size={24} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex flex-wrap gap-2'>
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant='secondary'
                      className='bg-[#00a6fb]/20 text-white border-[#00a6fb]/30 hover:bg-[#00a6fb]/30 transition-colors'
                    >
                      {skill}
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
