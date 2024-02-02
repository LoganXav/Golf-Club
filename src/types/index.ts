import React from 'react';

export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

/* eslint-disable no-unused-vars */
export interface Stepper {
  next: (step: number) => void;
  previous: (step: number) => void;
  reset: (step?: number) => void;
  go: (step: number) => void;
  step: number;
  jumped: number[];
  skipped: number[];
  completed: number[];
  errored: number[];
  history: number[];
}
