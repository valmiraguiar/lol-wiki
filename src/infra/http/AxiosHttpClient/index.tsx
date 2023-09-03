import { AxiosRequestConfig, AxiosResponse } from "axios";
import { HttpClient, HttpRequest, HttpResponse } from "../HttpClient";
import api from "../../services/api";

export class AxiosHttpClient implements HttpClient {
  request = async(
    data: HttpRequest,
    config?: AxiosRequestConfig,
  ): Promise<HttpResponse> => {
    let axiosResponse: AxiosResponse;

    try{
      axiosResponse = await api.request({
        ...config,
        url: data.url,
        method: data.method,
        data: data.body,
      });
    } catch (error: any) {
      axiosResponse = error?.response;
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    }
  };
}