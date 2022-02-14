import axios, { AxiosInstance } from "axios";

export default abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string | undefined) {
    this.instance = axios.create({
      baseURL,
    });
  }
}
