export interface ISerie {
  f: IFormartedSeparateDate;
  sum: Date;
  count: number;
  avg: number;
  min: number;
  max: number;
  t: string;
}

export interface IFormartedSeparateDate {
  year: number;
  month: number;
  day: number;
}
