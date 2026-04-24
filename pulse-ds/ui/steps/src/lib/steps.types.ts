export type StepState = 'pending' | 'active' | 'done' | 'error';
export type StepsSize = 'sm' | 'md' | 'lg' | 'dot';

export interface StepDef {
  title: string;
  desc?: string;
  state?: StepState;
}
