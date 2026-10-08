import duoPhoto from "../../imports/WhatsApp_Image_2026-10-08_at_10.53.50.jpeg";
import keeperPhoto from "../../imports/WhatsApp_Image_2026-10-08_at_10.49.jpeg";
import teamPhoto from "../../imports/WhatsApp_Image_2026-10-08_at_10.53.5.jpeg";
import trioPhoto from "../../imports/WhatsApp_Image_2026-10-08_at_10.49.3.jpeg";
import { useState } from 'react';
import { Calendar, Clock, User, Search, Play, Image as ImageIcon, Video } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function NewsMedia() {
  const [searchTerm, setSearchTerm] = useState('');

  const newsArticles = [
    {
      id: 1,
      title: 'Gacharage FC Advances to Regional Finals After Thrilling Victory',
      excerpt: 'In a nail-biting semi-final match, Gacharage FC secured their place in the regional finals with a dramatic 3-2 victory against City United. The match, played in front of a packed Gacharage Grounds, showcased the team\'s resilience and fighting spirit.',
      content: 'Full article content would go here...',
      author: 'Sarah Johnson',
      date: '2024-10-05',
      category: 'Match Report',
      image: trioPhoto,
      featured: true
    },
    {
      id: 2,
      title: 'New Youth Academy Facility Opens to Great Fanfare',
      excerpt: 'Gacharage FC officially opened its state-of-the-art youth training facility this week, marking a significant milestone in the club\'s commitment to developing young talent.',
      content: 'Full article content would go here...',
      author: 'Mike Rodriguez',
      date: '2024-10-03',
      category: 'Club News',
      image: duoPhoto,
      featured: false
    },
    {
      id: 3,
      title: 'Community Outreach Program Launches in Local Schools',
      excerpt: 'Gacharage FC is proud to announce the launch of our comprehensive community outreach program, bringing football training and mentorship to underprivileged youth in our local area.',
      content: 'Full article content would go here...',
      author: 'Lisa Chen',
      date: '2024-10-01',
      category: 'Community',
      image: trioPhoto,
      featured: false
    },
    {
      id: 4,
      title: 'Transfer Window: Three New Signings Join Gacharage FC',
      excerpt: 'Gacharage FC has completed the signing of three promising players ahead of the new season, strengthening the squad in key positions.',
      content: 'Full article content would go here...',
      author: 'David Park',
      date: '2024-09-28',
      category: 'Transfers',
      image: keeperPhoto,
      featured: false
    },
    {
      id: 5,
      title: 'Women\'s Team Secures Championship Victory',
      excerpt: 'Gacharage FC Women\'s Team claimed their first championship title with a commanding 4-1 victory in the final against Riverside United.',
      content: 'Full article content would go here...',
      author: 'Emma Thompson',
      date: '2024-09-25',
      category: 'Match Report',
      image: duoPhoto,
      featured: false
    }
  ];

  const videos = [
    {
      id: 1,
      title: 'Match Highlights: Gacharage FC vs City United',
      duration: '3:45',
      date: '2024-10-05',
      thumbnail: teamPhoto
    },
    {
      id: 2,
      title: 'Training Session: Preparing for the Finals',
      duration: '5:20',
      date: '2024-10-04',
      thumbnail: duoPhoto
    },
    {
      id: 3,
      title: 'Behind the Scenes: Youth Academy Tour',
      duration: '7:15',
      date: '2024-10-03',
      thumbnail: trioPhoto
    },
    {
      id: 4,
      title: 'Player Interview: Marcus Johnson',
      duration: '4:30',
      date: '2024-10-01',
      thumbnail: keeperPhoto
    }
  ];

  const photoGallery = [
    {
      id: 1,
      title: 'Championship Celebration',
      date: '2024-10-05',
      image: trioPhoto
    },
    {
      id: 2,
      title: 'Stadium Atmosphere',
      date: '2024-10-05',
      image: teamPhoto
    },
    {
      id: 3,
      title: 'Youth Training',
      date: '2024-10-03',
      image: trioPhoto
    },
    {
      id: 4,
      title: 'Team Photo 2024',
      date: '2024-09-15',
      image: teamPhoto
    },
    {
      id: 5,
      title: 'New Facility Opening',
      date: '2024-09-01',
      image: teamPhoto
    },
    {
      id: 6,
      title: 'Women\'s Team Victory',
      date: '2024-09-25',
      image: duoPhoto
    }
  ];

  const filteredNews = newsArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Match Report': return 'bg-green-500';
      case 'Club News': return 'bg-blue-500';
      case 'Community': return 'bg-purple-500';
      case 'Transfers': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl mb-6">News & Media</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay updated with the latest Gacharage FC news, match highlights, and exclusive content
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary" />
            <Input
              type="search"
              placeholder="Search news and articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="news" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="photos">Photos</TabsTrigger>
            </TabsList>

            {/* News Tab */}
            <TabsContent value="news">
              {searchTerm === '' && featuredArticle && (
                <div className="mb-12">
                  <h2 className="text-2xl text-primary mb-6">Featured Story</h2>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <ImageWithFallback
                          src={featuredArticle.image}
                          alt={featuredArticle.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className={`text-white ${getCategoryColor(featuredArticle.category)}`}>
                            {featuredArticle.category}
                          </Badge>
                          <span className="text-sm text-secondary">Featured</span>
                        </div>
                        <h3 className="text-2xl text-primary mb-4">{featuredArticle.title}</h3>
                        <p className="text-secondary mb-4">{featuredArticle.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-secondary mb-4">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {featuredArticle.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(featuredArticle.date).toLocaleDateString()}
                          </div>
                        </div>
                        <Button>Read Full Article</Button>
                      </div>
                    </div>
                  </Card>
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-2xl text-primary mb-6">
                  {searchTerm ? `Search Results (${filteredNews.length})` : 'Latest News'}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(searchTerm ? filteredNews : regularArticles).map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative">
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className={`absolute top-4 left-4 text-white ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-secondary mb-4 line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-secondary mb-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos">
              <div className="text-center mb-8">
                <h2 className="text-3xl text-primary mb-4">Video Highlights</h2>
                <p className="text-secondary max-w-2xl mx-auto">
                  Watch match highlights, behind-the-scenes content, and exclusive interviews
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="relative">
                      <ImageWithFallback
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                        <div className="bg-accent rounded-full p-3 group-hover:scale-110 transition-transform">
                          <Play className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <Badge className="absolute top-4 right-4 bg-black/70 text-white">
                        <Video className="h-3 w-3 mr-1" />
                        {video.duration}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{video.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-1 text-sm text-secondary">
                        <Calendar className="h-4 w-4" />
                        {new Date(video.date).toLocaleDateString()}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Photos Tab */}
            <TabsContent value="photos">
              <div className="text-center mb-8">
                <h2 className="text-3xl text-primary mb-4">Photo Gallery</h2>
                <p className="text-secondary max-w-2xl mx-auto">
                  Browse our collection of memorable moments and behind-the-scenes photos
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photoGallery.map((photo) => (
                  <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="relative">
                      <ImageWithFallback
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-lg mb-1">{photo.title}</h3>
                          <div className="flex items-center gap-1 text-sm">
                            <Calendar className="h-3 w-3" />
                            {new Date(photo.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <Badge className="absolute top-4 right-4 bg-black/70 text-white">
                        <ImageIcon className="h-3 w-3 mr-1" />
                        Photo
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-primary mb-4">Follow Us</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Stay connected with Gacharage FC on social media for real-time updates and exclusive content
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-lg border">
              <h3 className="text-lg text-primary mb-2">Facebook</h3>
              <p className="text-2xl text-accent mb-2">25.2K</p>
              <p className="text-sm text-secondary">Followers</p>
            </div>
            <div className="p-6 rounded-lg border">
              <h3 className="text-lg text-primary mb-2">Twitter</h3>
              <p className="text-2xl text-accent mb-2">18.7K</p>
              <p className="text-sm text-secondary">Followers</p>
            </div>
            <div className="p-6 rounded-lg border">
              <h3 className="text-lg text-primary mb-2">Instagram</h3>
              <p className="text-2xl text-accent mb-2">32.1K</p>
              <p className="text-sm text-secondary">Followers</p>
            </div>
            <div className="p-6 rounded-lg border">
              <h3 className="text-lg text-primary mb-2">YouTube</h3>
              <p className="text-2xl text-accent mb-2">12.5K</p>
              <p className="text-sm text-secondary">Subscribers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}