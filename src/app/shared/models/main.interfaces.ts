
export interface IResponse {
  errorMessages: string;
  isSucess: boolean;
  result: IStudent[];
  statusCode: number;
}

export interface IStudent {
  studentId: number;
  name: string;
  lastName: string;
  age: number;
}
export interface ISubjectResponse {
  errorMessages: string;
  isSucess: boolean;
  result: ISubjects;
  statusCode: number;
}

export interface ISubjectServerResponse extends ISubjectResponse{
  status: string;
  error: string;
}

export interface ISubjects {
  id: number;
  spanishLanguage: number;
  math: number;
  naturalSciences: number;
  studentId: number;
  historyScience: number;
}

