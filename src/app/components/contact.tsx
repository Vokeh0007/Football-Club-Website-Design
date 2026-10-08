import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    department: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Gacharage Grounds', 'Gacharage', 'Murang\'a County, Kenya'],
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+254 700 1234567', '+254 700 1234568'],
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@gacharagefc.com', 'membership@gacharagefc.com'],
      color: 'text-accent'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM', 'Sun: Closed'],
      color: 'text-purple-500'
    }
  ];

  const departments = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'membership', label: 'Membership' },
    { value: 'youth', label: 'Youth Academy' },
    { value: 'tickets', label: 'Tickets & Events' },
    { value: 'media', label: 'Media & Press' },
    { value: 'sponsorship', label: 'Sponsorship' },
    { value: 'facilities', label: 'Facilities Rental' }
  ];

  const teamContacts = [
    {
      name: 'Sarah Thompson',
      position: 'Club President',
      email: 'president@gacharagefc.com',
      phone: '+254 700 1234567'
    },
    {
      name: 'Michael Rodriguez',
      position: 'Head Coach',
      email: 'coach@gacharagefc.com',
      phone: '+254 700 1234568'
    },
    {
      name: 'David Chen',
      position: 'Youth Academy Director',
      email: 'youth@gacharagefc.com',
      phone: '+254 700 1234569'
    },
    {
      name: 'Lisa Anderson',
      position: 'Membership Coordinator',
      email: 'membership@gacharagefc.com',
      phone: '+254 700 1234570'
    }
  ];

  const socialMedia = [
    { icon: Facebook, name: 'Facebook', handle: '@GacharageFC', followers: '25.2K' },
    { icon: Twitter, name: 'Twitter', handle: '@GacharageFC', followers: '18.7K' },
    { icon: Instagram, name: 'Instagram', handle: '@gacharage_fc', followers: '32.1K' },
    { icon: Youtube, name: 'YouTube', handle: 'Gacharage FC', followers: '12.5K' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      department: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with Gacharage FC. We're here to answer your questions and help you get involved.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <info.icon className={`h-12 w-12 ${info.color}`} />
                  </div>
                  <CardTitle>{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-secondary">{detail}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-accent" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
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

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="department">Department</Label>
                      <Select onValueChange={(value) => handleInputChange('department', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept.value} value={dept.value}>
                              {dept.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="min-h-32"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Find Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Gacharage Grounds, Murang'a County</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-background rounded-lg">
                    <h4 className="text-primary mb-2">Directions</h4>
                    <p className="text-sm text-secondary">
                      Gacharage Grounds is easily accessible by public transport and car. 
                      Free parking is available on match days and during training sessions.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-accent">Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-secondary mb-4">
                    For urgent matters during training sessions or matches:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-accent" />
                      <span>Emergency: +254 700 9111234</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-accent" />
                      <span>emergency@gacharagefc.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-primary mb-4">Key Contacts</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Reach out directly to our team members for specific inquiries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamContacts.map((contact, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <h3 className="text-lg text-primary mb-1">{contact.name}</h3>
                  <p className="text-accent mb-4">{contact.position}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="h-3 w-3 text-secondary" />
                      <span className="text-secondary">{contact.email}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="h-3 w-3 text-secondary" />
                      <span className="text-secondary">{contact.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-primary mb-4">Follow Us</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Stay connected with Gacharage FC on social media for updates, news, and behind-the-scenes content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMedia.map((platform, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <platform.icon className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="text-lg text-primary mb-2">{platform.name}</h3>
                  <p className="text-secondary mb-2">{platform.handle}</p>
                  <p className="text-sm text-accent">{platform.followers} followers</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-secondary">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg text-primary mb-2">What are your training times?</h3>
                <p className="text-secondary">
                  We offer training sessions throughout the week for all age groups. 
                  Visit our Membership page for the complete schedule.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg text-primary mb-2">How do I register for membership?</h3>
                <p className="text-secondary">
                  You can register through our Membership page or visit our office during business hours. 
                  We'll guide you through the process and answer any questions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg text-primary mb-2">Do you offer trial sessions?</h3>
                <p className="text-secondary">
                  Yes! We offer free trial sessions for new members. Contact us to schedule your trial 
                  and experience what Gacharage FC has to offer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg text-primary mb-2">What equipment do I need?</h3>
                <p className="text-secondary">
                  Basic equipment includes football boots, shin pads, and appropriate clothing. 
                  Our youth academy provides balls and training equipment during sessions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}