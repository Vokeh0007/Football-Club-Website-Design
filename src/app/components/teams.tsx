import duoPhoto from "../../imports/WhatsApp_Image_2026-10-08_at_10.53.50.jpeg";
import keeperPhoto from "../../imports/WhatsApp_Image_2026-10-08_at_10.49.jpeg";
import teamPhoto from "../../imports/WhatsApp_Image_2026-10-08_at_10.53.5.jpeg";
import trioPhoto from "../../imports/WhatsApp_Image_2026-10-08_at_10.49.3.jpeg";
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Teams() {
  const seniorPlayers = [
    {
      name: 'Marcus Johnson',
      position: 'Forward',
      number: 9,
      age: 28,
      image: keeperPhoto
    },
    {
      name: 'Alex Rivera',
      position: 'Midfielder',
      number: 10,
      age: 26,
      image: keeperPhoto
    },
    {
      name: 'James Mitchell',
      position: 'Defender',
      number: 4,
      age: 30,
      image: keeperPhoto
    },
    {
      name: 'David Stone',
      position: 'Goalkeeper',
      number: 1,
      age: 32,
      image: keeperPhoto
    },
    {
      name: 'Carlos Santos',
      position: 'Midfielder',
      number: 8,
      age: 24,
      image: keeperPhoto
    },
    {
      name: 'Tommy Wilson',
      position: 'Forward',
      number: 11,
      age: 22,
      image: keeperPhoto
    }
  ];

  const womenPlayers = [
    {
      name: 'Emma Thompson',
      position: 'Forward',
      number: 9,
      age: 25,
      image: duoPhoto
    },
    {
      name: 'Sofia Martinez',
      position: 'Midfielder',
      number: 10,
      age: 23,
      image: duoPhoto
    },
    {
      name: 'Rachel Davis',
      position: 'Defender',
      number: 5,
      age: 27,
      image: duoPhoto
    },
    {
      name: 'Jessica Lee',
      position: 'Goalkeeper',
      number: 1,
      age: 29,
      image: duoPhoto
    }
  ];

  const youthPlayers = [
    {
      name: 'Tyler Brooks',
      position: 'Midfielder',
      number: 7,
      age: 17,
      image: trioPhoto
    },
    {
      name: 'Jake Rodriguez',
      position: 'Forward',
      number: 9,
      age: 16,
      image: trioPhoto
    },
    {
      name: 'Liam Carter',
      position: 'Defender',
      number: 4,
      age: 17,
      image: trioPhoto
    },
    {
      name: 'Noah Kim',
      position: 'Goalkeeper',
      number: 1,
      age: 16,
      image: trioPhoto
    }
  ];

  const coaches = [
    {
      name: 'Gibson Kariuki',
      position: 'Coach',
      team: 'Gacharage FC',
    }
  ];

  const PlayerCard = ({ player }: { player: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
      <CardContent className="p-4">
        <div className="relative mb-4">
          <ImageWithFallback
            src={player.image}
            alt={player.name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute top-2 right-2 bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
            {player.number}
          </div>
        </div>
        <h3 className="text-lg text-primary mb-1">{player.name}</h3>
        <p className="text-accent mb-1">{player.position}</p>
        <p className="text-sm text-secondary">Age: {player.age}</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src={teamPhoto}
            alt="Team group photo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl mb-6">Our Teams</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet the talented players and dedicated coaches who represent Gacharage FC 
            across all age groups and divisions.
          </p>
        </div>
      </section>

      {/* Teams Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="senior" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto mb-12">
              <TabsTrigger value="senior">Senior</TabsTrigger>
              <TabsTrigger value="women">Women</TabsTrigger>
              <TabsTrigger value="youth">Youth</TabsTrigger>
              <TabsTrigger value="coaches">Coaches</TabsTrigger>
            </TabsList>

            {/* Senior Team */}
            <TabsContent value="senior">
              <div className="text-center mb-8">
                <h2 className="text-3xl text-primary mb-4">Senior Team</h2>
                <p className="text-secondary max-w-2xl mx-auto">
                  Our experienced senior squad competing in the regional league with over 70 years of tradition.
                </p>
              </div>
              
              <div className="mb-8">
                <ImageWithFallback
                  src={teamPhoto}
                  alt="Senior team photo"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {seniorPlayers.map((player, index) => (
                  <PlayerCard key={index} player={player} />
                ))}
              </div>
            </TabsContent>

            {/* Women's Team */}
            <TabsContent value="women">
              <div className="text-center mb-8">
                <h2 className="text-3xl text-primary mb-4">Women's Team</h2>
                <p className="text-secondary max-w-2xl mx-auto">
                  Our dynamic women's team, established in 2010, competing at the highest level with passion and skill.
                </p>
              </div>
              
              <div className="mb-8">
                <ImageWithFallback
                  src={duoPhoto}
                  alt="Women's team photo"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {womenPlayers.map((player, index) => (
                  <PlayerCard key={index} player={player} />
                ))}
              </div>
            </TabsContent>

            {/* Youth Team */}
            <TabsContent value="youth">
              <div className="text-center mb-8">
                <h2 className="text-3xl text-primary mb-4">Youth Academy</h2>
                <p className="text-secondary max-w-2xl mx-auto">
                  Our youth development program nurturing the next generation of football talent from ages 6-18.
                </p>
              </div>
              
              <div className="mb-8">
                <ImageWithFallback
                  src={trioPhoto}
                  alt="Youth team training"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {youthPlayers.map((player, index) => (
                  <PlayerCard key={index} player={player} />
                ))}
              </div>

              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl text-primary mb-6 text-center">Youth Age Groups</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      U8
                    </div>
                    <h4>Under 8</h4>
                    <p className="text-sm text-secondary">Ages 6-8</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      U12
                    </div>
                    <h4>Under 12</h4>
                    <p className="text-sm text-secondary">Ages 9-12</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      U16
                    </div>
                    <h4>Under 16</h4>
                    <p className="text-sm text-secondary">Ages 13-16</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      U18
                    </div>
                    <h4>Under 18</h4>
                    <p className="text-sm text-secondary">Ages 17-18</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Coaches */}
            <TabsContent value="coaches">
              <div className="text-center mb-8">
                <h2 className="text-3xl text-primary mb-4">Coaching Staff</h2>
                <p className="text-secondary max-w-2xl mx-auto">
                  Meet our coach, Gibson Kariuki.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {coaches.map((coach, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-accent text-white flex items-center justify-center text-3xl">
                        {coach.name.split(' ').map((namePart) => namePart[0]).join('')}
                      </div>
                      <h3 className="text-xl text-primary mb-2">{coach.name}</h3>
                      <p className="text-accent mb-2">{coach.position}</p>
                      <Badge variant="outline" className="mb-2">{coach.team}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 bg-white rounded-lg p-8">
                <h3 className="text-2xl text-primary mb-6 text-center">Coaching Philosophy</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="text-lg text-primary mb-3">Player Development</h4>
                    <p className="text-secondary">Focus on individual skill development and tactical understanding</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg text-primary mb-3">Team Unity</h4>
                    <p className="text-secondary">Building strong team chemistry and communication on and off the field</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg text-primary mb-3">Character Building</h4>
                    <p className="text-secondary">Developing leadership, discipline, and sportsmanship in every player</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}