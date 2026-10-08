import duoPhoto from "../../imports/WhatsApp_Image_2026-10-08_at_10.53.50.jpeg";
import teamPhoto from "../../imports/WhatsApp_Image_2026-10-08_at_10.53.5.jpeg";
import trioPhoto from "../../imports/WhatsApp_Image_2026-10-08_at_10.49.3.jpeg";
import { Trophy, Users, Target, Heart, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutUs() {
  const timeline = [
    {
      year: '1984',
      title: 'Club Founded',
      description: 'Gacharage FC was established by a group of passionate local football enthusiasts.'
    },
    {
      year: '1991',
      title: 'First Championship',
      description: 'Won our first regional championship, marking the beginning of our legacy.'
    },
    {
      year: '1985',
      title: 'Stadium Built',
      description: 'Opened our home ground, soon to become the heart of the Gacharage community.'
    },
    {
      year: '1998',
      title: 'Youth Academy',
      description: 'Launched our youth development program to nurture future talent.'
    },
    {
      year: '2010',
      title: 'Women\'s Team',
      description: 'Established our women\'s football team, expanding our community.'
    },
    {
      year: '2024',
      title: 'Modern Era',
      description: 'Continuing to build champions with state-of-the-art facilities and programs.'
    }
  ];

  const values = [
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from training to community engagement.'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Success comes from working together, supporting each other on and off the field.'
    },
    {
      icon: Target,
      title: 'Dedication',
      description: 'Commitment to continuous improvement and reaching our full potential.'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'We are more than a club - we are a family that serves our local community.'
    }
  ];

  const management = [
    {
      name: 'Michael Rodriguez',
      position: 'Head Coach',
      experience: '15 years coaching experience',
      image: duoPhoto
    },
    {
      name: 'Sarah Thompson',
      position: 'Club President',
      experience: 'Former professional player',
      image: trioPhoto
    },
    {
      name: 'David Chen',
      position: 'Youth Academy Director',
      experience: 'UEFA Licensed Coach',
      image: duoPhoto
    }
  ];

  const achievements = [
    { title: 'Regional Championships', count: '15' },
    { title: 'Cup Victories', count: '8' },
    { title: 'Youth Development Awards', count: '3' },
    { title: 'Community Service Awards', count: '5' }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src={teamPhoto}
            alt="Stadium"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl mb-6">About Gacharage FC</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Over seven decades of excellence, community, and championship football. 
            Discover the story behind our legacy and the people who make it possible.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-secondary mb-6">
                Gacharage FC exists to develop exceptional footballers and outstanding individuals. 
                We provide a platform where talent meets opportunity, where community meets passion, 
                and where dreams become reality.
              </p>
              <p className="text-lg text-secondary">
                Through professional coaching, world-class facilities, and unwavering support, 
                we build champions who excel both on the field and in life.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback
                src={teamPhoto}
                alt="Stadium crowd"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <value.icon className="h-12 w-12 text-accent" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-primary mb-4">Our History</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              From humble beginnings to championship glory - explore the milestones that shaped Gacharage FC
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-accent"></div>
            
            {timeline.map((event, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="ml-8 md:ml-0">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-accent text-white px-3 py-1 rounded-full text-sm">
                          {event.year}
                        </div>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-secondary">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-primary mb-4">Leadership Team</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Meet the experienced professionals who guide our club to success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {management.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="relative mb-4">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 object-cover rounded-full mx-auto"
                    />
                  </div>
                  <h3 className="text-xl text-primary mb-2">{member.name}</h3>
                  <p className="text-accent mb-2">{member.position}</p>
                  <p className="text-sm text-secondary">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Our Achievements</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Celebrating decades of success and recognition
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl text-accent mb-2">{achievement.count}</div>
                <div className="text-lg">{achievement.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-primary mb-4">Our Facilities</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              State-of-the-art facilities designed to develop champions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ImageWithFallback
                src={teamPhoto}
                alt="Stadium facilities"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>15,000 capacity stadium with modern amenities</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>Professional training facilities and fitness center</span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-accent" />
                  <span>Youth academy with dedicated coaching areas</span>
                </li>
                <li className="flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-accent" />
                  <span>Sports medicine and rehabilitation center</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}