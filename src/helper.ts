import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import logger from './log';

export default class Helper {

  /**
   * generic function for making http request
   * @param options
   */
  static async makeRequest<T>(options: AxiosRequestConfig): Promise<T> {
    logger.info(`makeRequest request: ${JSON.stringify(options)}`);

    try {
      const response = await axios(options);

      if (response && response.data) {
        logger.info(`makeRequest response: ${JSON.stringify(response.data)}`);
        return response.data as T;
      }

      return response as T;
    } catch (error) {
      logger.error(`makeRequest error: ${JSON.stringify(error)}`);
      throw error;
    }
  }
}
