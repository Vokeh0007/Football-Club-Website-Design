import { CalendarDays } from 'lucide-react';

export function FixturesResults() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl mb-6">Fixtures & Results</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Follow Gacharage FC's fixtures, results, and league updates.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 text-center">
        <CalendarDays className="h-14 w-14 text-accent mx-auto mb-6" />
        <h2 className="text-3xl text-primary mb-4">Coming Soon</h2>
        <p className="text-secondary max-w-xl mx-auto">
          We are preparing the latest fixtures, results, and league updates. Please check back soon.
        </p>
      </section>
    </div>
  );
}
