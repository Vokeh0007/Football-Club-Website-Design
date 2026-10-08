import trioPhoto from "../../imports/WhatsApp_Image_2026-10-08_at_10.49.3.jpeg";
import { useState } from 'react';
import { Check, Star, Users, Trophy, Calendar, Clock, MapPin, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Membership() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    experience: '',
    membershipType: '',
    message: ''
  });

  const membershipPlans = [
    {
      id: 'youth',
      name: 'Youth Membership',
      price: '$25',
      period: '/month',
      description: 'Perfect for young players aged 6-18',
      features: [
        'Access to youth training sessions',
        'Professional coaching',
        'Equipment provided',
        'Match participation',
        'Skills development program',
        'Parent updates and reports'
      ],
      popular: false,
      color: 'border-primary'
    },
    {
      id: 'adult',
      name: 'Adult Membership',
      price: '$45',
      period: '/month',
      description: 'For adult players and recreational football',
      features: [
        'Access to adult training sessions',
        'Match participation',
        'Fitness programs',
        'Social events',
        'Club facilities access',
        'Member discounts'
      ],
      popular: true,
      color: 'border-accent'
    },
    {
      id: 'supporter',
      name: 'Supporter Membership',
      price: '$15',
      period: '/month',
      description: 'Support the club without playing',
      features: [
        'Season ticket discounts',
        'Exclusive events access',
        'Monthly newsletter',
        'Club merchandise discounts',
        'Priority booking',
        'Voting rights'
      ],
      popular: false,
      color: 'border-secondary'
    },
    {
      id: 'family',
      name: 'Family Package',
      price: '$80',
      period: '/month',
      description: 'Special rates for families',
      features: [
        'Up to 4 family members',
        'Youth and adult training',
        'Family events',
        'Flexible scheduling',
        'Group discounts',
        'Family locker access'
      ],
      popular: false,
      color: 'border-primary'
    }
  ];

  const benefits = [
    {
      icon: Trophy,
      title: 'Professional Coaching',
      description: 'Learn from experienced coaches with professional qualifications'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join a supportive community of players and families'
    },
    {
      icon: Calendar,
      title: 'Regular Training',
      description: 'Structured training sessions throughout the week'
    },
    {
      icon: Star,
      title: 'Skill Development',
      description: 'Comprehensive programs for all skill levels'
    }
  ];

  const trainingSchedule = [
    {
      day: 'Monday',
      sessions: [
        { time: '16:00-17:00', group: 'Youth U8-U10', location: 'Training Field A' },
        { time: '18:00-19:30', group: 'Adult Recreational', location: 'Main Field' }
      ]
    },
    {
      day: 'Tuesday',
      sessions: [
        { time: '16:00-17:00', group: 'Youth U12-U14', location: 'Training Field B' },
        { time: '19:00-20:30', group: 'Women\'s Team', location: 'Main Field' }
      ]
    },
    {
      day: 'Wednesday',
      sessions: [
        { time: '16:00-17:00', group: 'Youth U16-U18', location: 'Training Field A' },
        { time: '18:00-19:30', group: 'Senior Team', location: 'Main Field' }
      ]
    },
    {
      day: 'Thursday',
      sessions: [
        { time: '16:00-17:00', group: 'Youth Skills', location: 'Training Field B' },
        { time: '18:00-19:30', group: 'Adult Recreational', location: 'Main Field' }
      ]
    },
    {
      day: 'Friday',
      sessions: [
        { time: '18:00-19:30', group: 'Open Training', location: 'Main Field' }
      ]
    },
    {
      day: 'Saturday',
      sessions: [
        { time: '09:00-10:30', group: 'Youth Academy', location: 'Training Fields' },
        { time: '15:00-17:00', group: 'Match Day', location: 'Gacharage Grounds' }
      ]
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src={trioPhoto}
            alt="Youth training"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl mb-6">Join Gacharage FC</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Become part of our football family. Whether you're a beginner or experienced player, 
            we have the perfect membership option for you.
          </p>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-primary mb-4">Why Join Gacharage FC?</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Experience the benefits of being part of our football community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="h-12 w-12 text-accent" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-primary mb-4">Membership Options</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Choose the membership plan that best fits your needs and goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipPlans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  plan.popular ? 'ring-2 ring-accent' : ''
                } ${selectedPlan === plan.id ? 'ring-2 ring-primary' : ''} ${plan.color}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl text-accent">{plan.price}</span>
                    <span className="text-secondary">{plan.period}</span>
                  </div>
                  <p className="text-sm text-secondary mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      selectedPlan === plan.id ? 'bg-accent hover:bg-accent/90' : ''
                    }`}
                    variant={selectedPlan === plan.id ? 'default' : 'outline'}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-primary mb-4">Training Schedule</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Our weekly training schedule accommodates all age groups and skill levels
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                Weekly Training Sessions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {trainingSchedule.map((day) => (
                  <div key={day.day}>
                    <h3 className="text-lg text-primary mb-3">{day.day}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {day.sessions.map((session, index) => (
                        <div key={index} className="bg-background rounded-lg p-4 border">
                          <div className="flex items-center gap-2 text-accent mb-2">
                            <Clock className="h-4 w-4" />
                            <span>{session.time}</span>
                          </div>
                          <div className="text-primary mb-1">{session.group}</div>
                          <div className="flex items-center gap-2 text-sm text-secondary">
                            <MapPin className="h-3 w-3" />
                            <span>{session.location}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-primary mb-4">Register Your Interest</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Fill out the form below and we'll contact you to complete your membership registration
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent" />
                Membership Application
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="membershipType">Preferred Membership</Label>
                    <Select onValueChange={(value) => handleInputChange('membershipType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select membership type" />
                      </SelectTrigger>
                      <SelectContent>
                        {membershipPlans.map((plan) => (
                          <SelectItem key={plan.id} value={plan.id}>
                            {plan.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience">Football Experience</Label>
                  <Select onValueChange={(value) => handleInputChange('experience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="professional">Professional/Semi-Pro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your goals, any questions, or special requirements..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                  />
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-primary mb-4">Have Questions?</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Our team is here to help you choose the right membership option
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg text-primary mb-2">Call Us</h3>
              <p className="text-accent mb-1">+254 700 1234567</p>
              <p className="text-sm text-secondary">Mon-Fri 9AM-6PM</p>
            </div>
            <div>
              <h3 className="text-lg text-primary mb-2">Email Us</h3>
              <p className="text-accent mb-1">membership@gacharagefc.com</p>
              <p className="text-sm text-secondary">We reply within 24 hours</p>
            </div>
            <div>
              <h3 className="text-lg text-primary mb-2">Visit Us</h3>
              <p className="text-accent mb-1">Gacharage Grounds</p>
              <p className="text-sm text-secondary">Gacharage, Murang'a County</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}