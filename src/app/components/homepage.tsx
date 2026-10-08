import duoPhoto from "../../imports/WhatsApp_Image_2026-10-08_at_10.53.50.jpeg";
import teamPhoto from "../../imports/WhatsApp_Image_2026-10-08_at_10.53.5.jpeg";
import { useState, useEffect } from "react";
import { Calendar, Trophy, Users, Clock, ArrowRight, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomepageProps {
  onPageChange: (page: string) => void;
}

const NEXT_MATCH_DATE = new Date("2026-10-11T15:00:00");

const getTimeRemaining = (targetDate: Date) => {
  const difference = targetDate.getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export function Homepage({ onPageChange }: HomepageProps) {
  const [timeToMatch, setTimeToMatch] = useState(() =>
    getTimeRemaining(NEXT_MATCH_DATE),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeToMatch(getTimeRemaining(NEXT_MATCH_DATE));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Calendar, label: "Years Established", value: "42" },
    { icon: Users, label: "Active Members", value: "450+" },
    { icon: Trophy, label: "Championships", value: "15" },
    { icon: Star, label: "Youth Teams", value: "3" },
  ];

  const newsItems = [
    {
      id: 1,
      title: "Gacharage FC Promoted to the County League",
      excerpt:
        "Gacharage FC defeated Gatumbi FC in our last match to secure promotion to the county league.",
      date: "2026-10-08",
      image: duoPhoto,
    },
    {
      id: 2,
      title: "New Youth Academy Opens",
      excerpt:
        "We are excited to announce the opening of our state-of-the-art youth training facility...",
      date: "2024-10-03",
      image: duoPhoto,
    },
    {
      id: 3,
      title: "Community Outreach Program Launch",
      excerpt:
        "Gacharage FC is proud to launch our new community program aimed at promoting sports in local schools...",
      date: "2024-10-01",
      image: teamPhoto,
    },
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
          <h1 className="text-5xl md:text-7xl mb-6">GACHARAGE FC</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Champions on the Field, Leaders in the Community
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Since 1984, Gacharage FC has been building champions both on and off
            the field in Gacharage, Kinyona, Kigumo, Murang'a County. Join our
            legacy of excellence, teamwork, and community spirit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3"
            >
              <a
                href="https://wa.me/254707124292?text=Hi%2C%20I%27m%20interested%20in%20joining%20Gacharage%20FC."
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Our Club
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="border-white bg-white text-black hover:bg-white/90 hover:text-black px-8 py-3"
            >
              <a
                href="https://wa.me/254707124292?text=Hi%2C%20I%27d%20like%20to%20ask%20about%20match%20tickets%20and%20fare."
                target="_blank"
                rel="noopener noreferrer"
              >
                Match Tickets/Fare
              </a>
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
              <h3 className="text-xl mb-2">Mission FC vs Gacharage FC</h3>
              <p className="opacity-90">Sunday, October 11, 2026 • 3:00 PM</p>
              <p className="opacity-90">Away • Kangari Complex Stadium</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-md mx-auto">
              <div className="bg-accent rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl tabular-nums">
                  {timeToMatch.days}
                </div>
                <div className="text-sm">Days</div>
              </div>
              <div className="bg-accent rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl tabular-nums">
                  {timeToMatch.hours}
                </div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="bg-accent rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl tabular-nums">
                  {timeToMatch.minutes}
                </div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="bg-accent rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl tabular-nums">
                  {timeToMatch.seconds}
                </div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white"
          >
            <a
              href="https://wa.me/254707124292?text=Hi%2C%20I%27d%20like%20to%20ask%20about%20match%20tickets%20and%20fare."
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Tickets
            </a>
          </Button>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-primary mb-4">
              Latest News
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Stay updated with the latest news, match results, and club
              announcements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <Card
                key={news.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
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
              onClick={() => onPageChange("news")}
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
            <h3 className="text-lg text-secondary">
              Become a Gacharage FC Sponsor
            </h3>
            <p className="text-secondary mt-2">
              We are actively looking for sponsors to support the club and our
              players.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
