import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "Master's in Data Science",
      institution: 'Universidad Politécnica de Madrid',
      period: '2025 - 2026',
      location: 'Madrid, Spain',
      status: 'Ongoing',
      description:
        'Advanced studies in machine learning, statistical analysis, and data science methodologies.',
    },
    {
      degree: 'Computer Engineering Degree',
      institution: 'Universidad Politécnica de Madrid',
      period: '2020 - 2024',
      location: 'Madrid, Spain',
      status: 'Completed',
      description:
        'Comprehensive program covering software engineering, computer systems, algorithms, and data structures.',
    },
  ];

  return (
    <section id='education' className='py-20 bg-[#051923]'>
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            <span className='text-[#00a6fb]'>Education</span> & Learning
          </h2>
          <p className='text-xl text-white/80 max-w-3xl mx-auto'>
            Continuous learning and academic excellence at Universidad
            Politécnica de Madrid
          </p>
        </div>

        <div className='space-y-8'>
          {education.map((edu, index) => (
            <Card
              key={index}
              className='bg-white/5 border-white/10 backdrop-blur-sm'
            >
              <CardHeader>
                <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4'>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-3'>
                      <GraduationCap className='text-[#00a6fb]' size={24} />
                      <CardTitle className='text-2xl text-white'>
                        {edu.degree}
                      </CardTitle>
                    </div>
                    <h3 className='text-xl text-[#00a6fb] font-semibold mb-2'>
                      {edu.institution}
                    </h3>
                    <div className='flex flex-col sm:flex-row gap-4 text-white/70'>
                      <div className='flex items-center gap-2'>
                        <Calendar size={18} />
                        <span>{edu.period}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <MapPin size={18} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'Completed'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-[#00a6fb]/20 text-[#00a6fb] border border-[#00a6fb]/30'
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-white/80 text-lg'>{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
