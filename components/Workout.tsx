import React from 'react';
import { WorkoutPlan } from '../types';

const WORKOUT_PLANS: WorkoutPlan[] = [
  {
    id: 'pushups',
    name: {
      en: 'Push-ups',
      pl: 'Pompki',
    },
    targetReps: 100,
    description: {
      en: 'Build upper body strength with progressive push-up challenges',
      pl: 'Zbuduj siłę górnej części ciała z progresywnymi wyzwaniami pompek',
    },
    icon: 'fitness_center',
  },
  {
    id: 'squats',
    name: {
      en: 'Squats',
      pl: 'Przysiady',
    },
    targetReps: 200,
    description: {
      en: 'Strengthen your legs and glutes with squat progression',
      pl: 'Wzmocnij nogi i pośladki z progresją przysiadów',
    },
    icon: 'accessibility_new',
  },
  {
    id: 'situps',
    name: {
      en: 'Sit-ups',
      pl: 'Brzuszki',
    },
    targetReps: 200,
    description: {
      en: 'Develop core strength and abdominal definition',
      pl: 'Rozwijaj siłę core i definicję brzucha',
    },
    icon: 'sports_gymnastics',
  },
  {
    id: 'lunges',
    name: {
      en: 'Lunges',
      pl: 'Wykroki',
    },
    targetReps: 200,
    description: {
      en: 'Improve balance and leg strength with lunges',
      pl: 'Popraw równowagę i siłę nóg z wykrokami',
    },
    icon: 'directions_walk',
  },
  {
    id: 'plank',
    name: {
      en: 'Plank',
      pl: 'Deska',
    },
    targetDuration: 5,
    targetReps: 1,
    description: {
      en: 'Build core stability and endurance with planking',
      pl: 'Zbuduj stabilność core i wytrzymałość z plankiem',
    },
    icon: 'timer',
  },
  {
    id: 'dips',
    name: {
      en: 'Dips',
      pl: 'Dips',
    },
    targetReps: 150,
    description: {
      en: 'Strengthen triceps and chest with dip exercises',
      pl: 'Wzmocnij triceps i klatkę piersiową z ćwiczeniami dipów',
    },
    icon: 'fitness_center',
  },
  {
    id: 'pullups',
    name: {
      en: 'Pull-ups',
      pl: 'Podciągnięcia',
    },
    targetReps: 25,
    description: {
      en: 'Develop back and bicep strength with pull-ups',
      pl: 'Rozwijaj siłę pleców i bicepsów z podciągnięciami',
    },
    icon: 'fitness_center',
  },
];

const Workout: React.FC = () => {
  return (
    <section id="workout-plans" className="py-20 bg- background-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-transparent bg-green-500 bg-clip-text font-semibold tracking-wide uppercase mb-2">Workout Plans</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Choose from our proven workout plans</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {WORKOUT_PLANS.map((plan, index) => (
            <div
              key={plan.id}
              className={`bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-glow group ${
                index === WORKOUT_PLANS.length - 1 && WORKOUT_PLANS.length % 3 !== 0 ? 'md:col-start-2' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="material-icons text-3xl text-green-500">{plan.icon}</span>
                <div className="flex gap-2">
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-500 transition-colors">
                {plan.name.en}
              </h3>
              
              <p className="text-slate-400 text-sm mb-4">
                {plan.description.en}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <span className="text-2xl font-bold">
                    {plan.targetDuration ? `${plan.targetDuration} min` : plan.targetReps}
                  </span>
                  <span className="text-sm text-slate-500 ml-1">
                    {plan.targetDuration ? 'duration' : 'reps'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workout;