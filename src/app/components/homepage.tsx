import duoPhoto from "../../imports/WhatsApp_Image_2026-10-08_at_10.53.50.jpeg";
import teamPhoto from "../../imports/WhatsApp_Image_2026-10-08_at_10.53.5.jpeg";
import trioPhoto from "../../imports/WhatsApp_Image_2026-10-08_at_10.49.3.jpeg";
import { useState, useEffect } from 'react';
import { Calendar, Trophy, Users, Clock, ArrowRight, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomepageProps {
  onPageChange: (page: string) => void;
}

export function Homepage({ onPageChange }: HomepageProps) {
  const [timeToMatch, setTimeToMatch] = useState({
    days: 5,
    hours: 14,
    minutes: 23,
    seconds: 45
  });

  // Mock countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeToMatch(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Calendar, label: 'Years Established', value: '72' },
    { icon: Users, label: 'Active Members', value: '450+' },
    { icon: Trophy, label: 'Championships', value: '15' },
    { icon: Star, label: 'Youth Teams', value: '8' },
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Gacharage FC Advances to Regional Finals',
      excerpt: 'Our senior team secured a thrilling 3-2 victory against City United in the semi-finals...',
      date: '2024-10-05',
      image: trioPhoto
    },
    {
      id: 2,
      title: 'New Youth Academy Opens',
      excerpt: 'We are excited to announce the opening of our state-of-the-art youth training facility...',
      date: '2024-10-03',
      image: duoPhoto
    },
    {
      id: 3,
      title: 'Community Outreach Program Launch',
      excerpt: 'Gacharage FC is proud to launch our new community program aimed at promoting sports in local schools...',
      date: '2024-10-01',
      image: teamPhoto
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={teamPhoto}
            alt="Football action"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl mb-6">
            GACHARAGE FC
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Champions on the Field, Leaders in the Community
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Since 1984, Gacharage FC has been building champions both on and off the field. 
            Join our legacy of excellence, teamwork, and community spirit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3"
              onClick={() => onPageChange('membership')}
            >
              Join Our Club
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
              onClick={() => onPageChange('fixtures')}
            >
              Match Tickets
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-accent" />
                </div>
                <div className="text-3xl text-primary mb-2">{stat.value}</div>
                <div className="text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Match Countdown */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Next Match</h2>
          <div className="bg-white/10 rounded-lg p-8 mb-8">
            <div className="mb-6">
              <h3 className="text-xl mb-2">Gacharage FC vs River City United</h3>
              <p className="opacity-90">Saturday, October 12, 2024 • 3:00 PM</p>
              <p className="opacity-90">Gacharage Grounds</p>
            </div>
            
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              <div className="bg-accent rounded-lg p-4">
                <div className="text-2xl">{timeToMatch.days}</div>
                <div className="text-sm">Days</div>
              </div>
              <div className="bg-accent rounded-lg p-4">
                <div className="text-2xl">{timeToMatch.hours}</div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="bg-accent rounded-lg p-4">
                <div className="text-2xl">{timeToMatch.minutes}</div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="bg-accent rounded-lg p-4">
                <div className="text-2xl">{timeToMatch.seconds}</div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white"
            onClick={() => onPageChange('fixtures')}
          >
            Get Tickets
          </Button>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-primary mb-4">Latest News</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Stay updated with the latest news, match results, and club announcements
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent">
                    {new Date(news.date).toLocaleDateString()}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary mb-4">{news.excerpt}</p>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onPageChange('news')}
            >
              View All News
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors Bar */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-lg text-secondary">Our Proud Sponsors</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-xl text-secondary">SportsTech Ltd</div>
            <div className="text-xl text-secondary">City Bank</div>
            <div className="text-xl text-secondary">Local Motors</div>
            <div className="text-xl text-secondary">Elite Sports</div>
            <div className="text-xl text-secondary">Champion Gear</div>
          </div>
        </div>
      </section>
    </div>
  );
}