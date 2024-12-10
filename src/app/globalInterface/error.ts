export type TErrorSources = {
    path: string | number | any;
    message: string;
}[];

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
}