export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface WorkoutPlan {
  id: string;
  name: {
    en: string;
    pl: string;
  };
  targetReps: number;
  targetDuration?: number; // in minutes
  description: {
    en: string;
    pl: string;
  };
  icon: string;
}

export interface CustomWorkout {
  id: string;
  name: string;
  exercises: WorkoutExercise[];
  duration: number; // in weeks
  created: Date;
}

export interface WorkoutExercise {
  planId: string;
  sets: number;
  reps: number;
  restTime: number; // in seconds
  notes?: string;
}