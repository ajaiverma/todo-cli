import Helper from './helper';
import axios, { AxiosStatic } from 'axios';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<AxiosStatic>;

describe('Helper', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should make a request using axios', async () => {
    const options = { method: 'get', url: 'https://example.com' };

    await Helper.makeRequest(options);

    expect(mockedAxios).toHaveBeenCalledWith(options);
  });
});
