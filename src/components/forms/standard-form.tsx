'use client';
import * as React from 'react';
import { StandardInfo } from './standard-info';

export function StandardForm() {
  const steps = [{ content: <StandardInfo /> }];
  return <div className="">{steps.map((step) => step.content)}</div>;
}
