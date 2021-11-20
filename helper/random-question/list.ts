export enum IQuestionType {
  Hard,
  Medium,
  Easy,
}

export interface IQuestion {
  id: number;
  type: IQuestionType;
}

export const list: IQuestion[] = [
  { id: 559, type: IQuestionType.Easy },
  { id: 598, type: IQuestionType.Easy },
  { id: 2062, type: IQuestionType.Easy },
  { id: 2063, type: IQuestionType.Medium },
];
