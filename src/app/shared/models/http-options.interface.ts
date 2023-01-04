export interface IHttpOptions {
  endpoint?: string;
  api: string;
  param?: string;
  needToken?: boolean;
  countryCode?: string;
  body?: any;
  responseType?: 'text' | 'json';
}
