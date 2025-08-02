'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { submitContactForm } from '@/components/actions';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setSubmitStatus('success');
        // Reset form
        const form = document.querySelector('form') as HTMLFormElement;
        form?.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id='contact'
      className='py-20 bg-gradient-to-br from-[#003554] to-[#051923]'
    >
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Let&apos;s <span className='text-[#00a6fb]'>Connect</span>
          </h2>
          <p className='text-xl text-white/80 max-w-3xl mx-auto'>
            I&apos;m always interested in discussing new opportunities,
            collaborations, or just having a conversation about technology and
            data
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <div className='space-y-8'>
            <Card className='bg-white/5 border-white/10 backdrop-blur-sm'>
              <CardHeader>
                <CardTitle className='text-2xl text-white'>
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-[#00a6fb]/20 rounded-full flex items-center justify-center'>
                    <Mail className='text-[#00a6fb]' size={20} />
                  </div>
                  <div>
                    <p className='text-white font-medium'>Email</p>
                    <p className='text-white/70'>pfrascon24@gmail.com</p>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-[#00a6fb]/20 rounded-full flex items-center justify-center'>
                    <Phone className='text-[#00a6fb]' size={20} />
                  </div>
                  <div>
                    <p className='text-white font-medium'>Phone number</p>
                    <p className='text-white/70'>+34 651 45 94 93</p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-[#00a6fb]/20 rounded-full flex items-center justify-center'>
                    <MapPin className='text-[#00a6fb]' size={20} />
                  </div>
                  <div>
                    <p className='text-white font-medium'>Location</p>
                    <p className='text-white/70'>Madrid, Spain</p>
                  </div>
                </div>

                <div className='pt-6 border-t border-white/10'>
                  <p className='text-white font-medium mb-4'>Follow Me</p>
                  <div className='flex gap-4'>
                    <Button
                      variant='outline'
                      size='icon'
                      className='border-white/20 text-white hover:bg-[#00a6fb] hover:border-[#00a6fb] bg-transparent'
                    >
                      <Link
                        href='https://www.linkedin.com/in/pedrorfdez/'
                        className='flex items-center justify-center w-full h-full'
                        target='_blank'
                      >
                        <Linkedin size={20} />
                      </Link>
                    </Button>
                    <Button
                      variant='outline'
                      size='icon'
                      className='border-white/20 text-white hover:bg-[#00a6fb] hover:border-[#00a6fb] bg-transparent'
                    >
                      <Link
                        href='https://github.com/pedrorfdez'
                        className='flex items-center justify-center w-full h-full'
                        target='_blank'
                      >
                        <Github size={20} />
                      </Link>
                    </Button>
                    <Button
                      variant='outline'
                      size='icon'
                      className='border-white/20 text-white hover:bg-[#00a6fb] hover:border-[#00a6fb] hover:text-black bg-transparent'
                      asChild
                    >
                      <Link href='https://x.com/pedrorfdez' target='_blank'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          height='32'
                          width='32'
                          viewBox='0 0 640 640'
                        >
                          <path
                            fill='currentColor'
                            d='M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z'
                          />
                        </svg>
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className='bg-white/5 border-white/10 backdrop-blur-sm'>
            <CardHeader>
              <CardTitle className='text-2xl text-white'>
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form action={handleSubmit} className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-4'>
                  <div>
                    <Input
                      name='name'
                      placeholder='Your Name'
                      required
                      className='bg-white/10 border-white/20 text-white placeholder:text-white/50'
                    />
                  </div>
                  <div>
                    <Input
                      type='email'
                      name='email'
                      placeholder='Your Email'
                      required
                      className='bg-white/10 border-white/20 text-white placeholder:text-white/50'
                    />
                  </div>
                </div>

                <Input
                  name='subject'
                  placeholder='Subject'
                  required
                  className='bg-white/10 border-white/20 text-white placeholder:text-white/50'
                />

                <Textarea
                  name='message'
                  placeholder='Your Message'
                  rows={6}
                  required
                  className='bg-white/10 border-white/20 text-white placeholder:text-white/50'
                />

                {submitStatus === 'success' && (
                  <div className='p-4 bg-green-500/20 border border-green-500/30 rounded-md'>
                    <p className='text-green-300'>
                      ✅ Message sent successfully! I&apos;ll get back to you
                      soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className='p-4 bg-red-500/20 border border-red-500/30 rounded-md'>
                    <p className='text-red-300'>
                      ❌ Failed to send message. Please try again or email me
                      directly.
                    </p>
                  </div>
                )}

                <Button
                  type='submit'
                  size='lg'
                  disabled={isSubmitting}
                  className='w-full bg-[#00a6fb] hover:bg-[#0582ca] text-white disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
