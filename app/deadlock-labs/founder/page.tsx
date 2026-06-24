import { Compass, Database, FlaskConical, Network } from 'lucide-react';
import { StudioNav } from '@/components/studio-nav';

const lanes = [
  { title: 'Data Platform Builder', icon: Database, text: 'Years of pipelines, integrations, Snowflake, Salesforce, Informatica, AWS, and operational data systems shaped how I think about product infrastructure.' },
  { title: 'AI Systems Architect', icon: Network, text: 'I am interested in AI where context, workflow, memory, and decision quality matter more than novelty.' },
  { title: 'Founder of Deadlock Labs', icon: FlaskConical, text: 'Deadlock Labs is where I publish ideas, prototypes, and experiments that might otherwise stay private.' },
  { title: 'Builder First', icon: Compass, text: 'The aim is not to look busy. The aim is to make thinking visible, build the smallest useful version, and learn faster.' }
];

export default function DeadlockLabsFounderPage() {
  return (
    <main className='min-h-screen'>
      <StudioNav active='founder' />
      <section className='mx-auto max-w-5xl px-6 py-20'>
        <div className='max-w-3xl'>
          <p className='text-xs uppercase tracking-widest text-muted-foreground'>Founder Letter</p>
          <h1 className='mt-5 text-4xl font-light tracking-tight sm:text-6xl'>Why Deadlock Labs exists.</h1>
          <div className='mt-8 space-y-6 text-base leading-8 text-muted-foreground'>
            <p>I have more ideas than time. Leaving them in private notes makes them safe, but also stale. Deadlock Labs is my public lab for sharing the ideas I keep returning to.</p>
            <p>Some are product sketches. Some are working prototypes. Some are only questions wearing a decent name. The point is not to pretend every idea is a company. The point is to make the thinking visible enough that friends, colleagues, builders, and future collaborators can challenge it.</p>
            <p>My background is in data engineering and platform delivery: pipelines, integrations, automation, cloud systems, and the long tail of operational friction. That work taught me that most useful software is not magical. It is specific, trusted, and close to a painful workflow.</p>
            <p>Deadlock Labs sits at the intersection of AI systems, data platforms, language technology, community businesses, and interactive products. It is where I test whether an idea has enough gravity to deserve more time.</p>
          </div>
        </div>

        <section className='mt-16 grid gap-5 md:grid-cols-2'>
          {lanes.map((lane) => {
            const Icon = lane.icon;
            return (
              <div key={lane.title} className='rounded-2xl border p-6'>
                <div className='flex items-center gap-3'>
                  <div className='rounded-xl border bg-muted/30 p-2'><Icon className='h-4 w-4' /></div>
                  <h2 className='font-medium'>{lane.title}</h2>
                </div>
                <p className='mt-4 text-sm leading-7 text-muted-foreground'>{lane.text}</p>
              </div>
            );
          })}
        </section>
      </section>
    </main>
  );
}
