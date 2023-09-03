import { AxiosResponse } from "axios";

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: AxiosResponse;
};

export type HttpMethod = 'get';

export interface HttpClient<R = object> {
    request: (data: HttpRequest) => Promise<HttpResponse<R>>;
};

export type HttpResponse<T = object> = {
  statusCode: number;
  body: T;
};

export enum HTTP_STATUS_CODE {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
  GATEWAY_TIMEOUT = 502,
};
