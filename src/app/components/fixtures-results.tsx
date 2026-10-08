import { Calendar, Clock, MapPin, Trophy, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function FixturesResults() {
  const upcomingMatches = [
    {
      id: 1,
      homeTeam: 'Gacharage FC',
      awayTeam: 'River City United',
      date: '2024-10-12',
      time: '15:00',
      venue: 'Gacharage Grounds',
      competition: 'Regional League',
      isHome: true
    },
    {
      id: 2,
      homeTeam: 'Mountain View FC',
      awayTeam: 'Gacharage FC',
      date: '2024-10-19',
      time: '14:30',
      venue: 'Mountain View Arena',
      competition: 'Regional League',
      isHome: false
    },
    {
      id: 3,
      homeTeam: 'Gacharage FC',
      awayTeam: 'Coastal Warriors',
      date: '2024-10-26',
      time: '16:00',
      venue: 'Gacharage Grounds',
      competition: 'Cup Quarter-Final',
      isHome: true
    },
    {
      id: 4,
      homeTeam: 'City Rovers',
      awayTeam: 'Gacharage FC',
      date: '2024-11-02',
      time: '15:00',
      venue: 'City Stadium',
      competition: 'Regional League',
      isHome: false
    }
  ];

  const recentResults = [
    {
      id: 1,
      homeTeam: 'Gacharage FC',
      awayTeam: 'Eastside United',
      homeScore: 3,
      awayScore: 1,
      date: '2024-10-05',
      competition: 'Regional League',
      isHome: true,
      result: 'win'
    },
    {
      id: 2,
      homeTeam: 'Valley FC',
      awayTeam: 'Gacharage FC',
      homeScore: 0,
      awayScore: 2,
      date: '2024-09-28',
      competition: 'Regional League',
      isHome: false,
      result: 'win'
    },
    {
      id: 3,
      homeTeam: 'Gacharage FC',
      awayTeam: 'Harbor City',
      homeScore: 1,
      awayScore: 1,
      date: '2024-09-21',
      competition: 'Regional League',
      isHome: true,
      result: 'draw'
    },
    {
      id: 4,
      homeTeam: 'Northern FC',
      awayTeam: 'Gacharage FC',
      homeScore: 2,
      awayScore: 1,
      date: '2024-09-14',
      competition: 'Regional League',
      isHome: false,
      result: 'loss'
    }
  ];

  const leagueStandings = [
    { position: 1, team: 'Coastal Warriors', played: 12, won: 10, drawn: 1, lost: 1, gf: 28, ga: 8, gd: 20, points: 31 },
    { position: 2, team: 'Gacharage FC', played: 12, won: 8, drawn: 3, lost: 1, gf: 24, ga: 10, gd: 14, points: 27 },
    { position: 3, team: 'River City United', played: 12, won: 7, drawn: 4, lost: 1, gf: 21, ga: 12, gd: 9, points: 25 },
    { position: 4, team: 'Mountain View FC', played: 12, won: 6, drawn: 2, lost: 4, gf: 18, ga: 15, gd: 3, points: 20 },
    { position: 5, team: 'City Rovers', played: 12, won: 5, drawn: 3, lost: 4, gf: 16, ga: 16, gd: 0, points: 18 },
    { position: 6, team: 'Valley FC', played: 12, won: 4, drawn: 4, lost: 4, gf: 14, ga: 16, gd: -2, points: 16 },
    { position: 7, team: 'Harbor City', played: 12, won: 3, drawn: 3, lost: 6, gf: 12, ga: 18, gd: -6, points: 12 },
    { position: 8, team: 'Eastside United', played: 12, won: 2, drawn: 2, lost: 8, gf: 9, ga: 22, gd: -13, points: 8 },
    { position: 9, team: 'Northern FC', played: 12, won: 1, drawn: 3, lost: 8, gf: 8, ga: 24, gd: -16, points: 6 },
    { position: 10, team: 'Southside FC', played: 12, won: 0, drawn: 1, lost: 11, gf: 5, ga: 28, gd: -23, points: 1 }
  ];

  const getResultBadgeColor = (result: string) => {
    switch (result) {
      case 'win': return 'bg-green-500';
      case 'draw': return 'bg-yellow-500';
      case 'loss': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const MatchCard = ({ match, isResult = false }: { match: any, isResult?: boolean }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <Badge variant="outline">{match.competition}</Badge>
          {isResult && (
            <Badge className={`text-white ${getResultBadgeColor(match.result)}`}>
              {match.result.toUpperCase()}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <div className={`text-lg ${match.homeTeam === 'Gacharage FC' ? 'text-accent' : 'text-primary'}`}>
                {match.homeTeam}
              </div>
              {match.isHome && <Badge variant="secondary" className="mt-1">HOME</Badge>}
            </div>
            
            <div className="text-center px-4">
              {isResult ? (
                <div className="text-2xl">
                  <span className={match.homeTeam === 'Gacharage FC' ? 'text-accent' : 'text-primary'}>
                    {match.homeScore}
                  </span>
                  <span className="mx-2">-</span>
                  <span className={match.awayTeam === 'Gacharage FC' ? 'text-accent' : 'text-primary'}>
                    {match.awayScore}
                  </span>
                </div>
              ) : (
                <div className="text-lg text-secondary">VS</div>
              )}
            </div>
            
            <div className="text-center flex-1">
              <div className={`text-lg ${match.awayTeam === 'Gacharage FC' ? 'text-accent' : 'text-primary'}`}>
                {match.awayTeam}
              </div>
              {!match.isHome && <Badge variant="secondary" className="mt-1">AWAY</Badge>}
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4 text-sm text-secondary">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(match.date).toLocaleDateString()}
            </div>
            {!isResult && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {match.time}
              </div>
            )}
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {match.venue}
            </div>
          </div>
          
          {!isResult && (
            <div className="text-center mt-4">
              <Button size="sm" className="bg-accent hover:bg-accent/90">
                Get Tickets
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl mb-6">Fixtures & Results</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay up to date with all Gacharage FC matches, results, and league standings
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="fixtures" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="fixtures">Fixtures</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
              <TabsTrigger value="table">League Table</TabsTrigger>
            </TabsList>

            {/* Upcoming Fixtures */}
            <TabsContent value="fixtures">
              <div className="text-center mb-8">
                <h2 className="text-3xl text-primary mb-4">Upcoming Fixtures</h2>
                <p className="text-secondary max-w-2xl mx-auto">
                  Don't miss any of our upcoming matches. Get your tickets now!
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </TabsContent>

            {/* Recent Results */}
            <TabsContent value="results">
              <div className="text-center mb-8">
                <h2 className="text-3xl text-primary mb-4">Recent Results</h2>
                <p className="text-secondary max-w-2xl mx-auto">
                  Check out our latest match results and performance
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {recentResults.map((match) => (
                  <MatchCard key={match.id} match={match} isResult={true} />
                ))}
              </div>
            </TabsContent>

            {/* League Table */}
            <TabsContent value="table">
              <div className="text-center mb-8">
                <h2 className="text-3xl text-primary mb-4">League Standings</h2>
                <p className="text-secondary max-w-2xl mx-auto">
                  Current Regional League standings for the 2024 season
                </p>
              </div>
              
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-accent" />
                    Regional League 2024
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-primary text-white">
                        <tr>
                          <th className="text-left p-3">Pos</th>
                          <th className="text-left p-3">Team</th>
                          <th className="text-center p-3">P</th>
                          <th className="text-center p-3">W</th>
                          <th className="text-center p-3">D</th>
                          <th className="text-center p-3">L</th>
                          <th className="text-center p-3">GF</th>
                          <th className="text-center p-3">GA</th>
                          <th className="text-center p-3">GD</th>
                          <th className="text-center p-3">Pts</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leagueStandings.map((team, index) => (
                          <tr 
                            key={team.position} 
                            className={`border-b hover:bg-gray-50 ${team.team === 'Gacharage FC' ? 'bg-accent/10' : ''}`}
                          >
                            <td className="p-3">
                              <div className="flex items-center gap-2">
                                {team.position}
                                {team.position <= 3 && (
                                  <div className={`w-2 h-2 rounded-full ${
                                    team.position === 1 ? 'bg-yellow-500' : 
                                    team.position === 2 ? 'bg-gray-400' : 'bg-yellow-600'
                                  }`} />
                                )}
                              </div>
                            </td>
                            <td className={`p-3 ${team.team === 'Gacharage FC' ? 'text-accent' : 'text-primary'}`}>
                              {team.team}
                            </td>
                            <td className="text-center p-3">{team.played}</td>
                            <td className="text-center p-3">{team.won}</td>
                            <td className="text-center p-3">{team.drawn}</td>
                            <td className="text-center p-3">{team.lost}</td>
                            <td className="text-center p-3">{team.gf}</td>
                            <td className="text-center p-3">{team.ga}</td>
                            <td className={`text-center p-3 ${team.gd >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {team.gd >= 0 ? '+' : ''}{team.gd}
                            </td>
                            <td className="text-center p-3">{team.points}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6 text-center text-sm text-secondary">
                <p>P = Played, W = Won, D = Drawn, L = Lost, GF = Goals For, GA = Goals Against, GD = Goal Difference, Pts = Points</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-primary mb-4">Season Statistics</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl text-accent mb-2">8</div>
              <div className="text-secondary">Wins</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-accent mb-2">3</div>
              <div className="text-secondary">Draws</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-accent mb-2">1</div>
              <div className="text-secondary">Losses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-accent mb-2">24</div>
              <div className="text-secondary">Goals Scored</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}