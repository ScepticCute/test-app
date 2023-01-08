export interface IQuestion {
  order: number;
  title: string;
  answerOptions: string[] | [];
  correntAnswer: string;
}

export interface ITest {
  id: number;
  title: string;
  description: string;
  questions: IQuestion[];
}
