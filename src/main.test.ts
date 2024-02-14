import Main from './main';
import Helper from './helper';
import logger from "./log";

jest.mock('./helper', () => ({
  makeRequest: jest.fn(),
}));

describe('Main', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch TODOs', async () => {
    const todo = {
      userId: 1,
      id: 2,
      title: 'Test TODO',
      completed: false,
    };

    (Helper.makeRequest as jest.Mock).mockResolvedValue(todo);

    const errorSpy = jest.spyOn(logger, 'error');

    await Main.run();

    expect(Helper.makeRequest).toHaveBeenCalledTimes(20);
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it('should handle errors', async () => {
    const error = new Error('Test error');
    (Helper.makeRequest as jest.Mock).mockRejectedValue(error);

    const logSpy = jest.spyOn(console, 'log');
    const errorSpy = jest.spyOn(logger, 'error');

    await Main.run();

    expect(Helper.makeRequest).toHaveBeenCalledTimes(20);
    expect(logSpy).toHaveBeenCalledTimes(0);
    expect(errorSpy).toHaveBeenCalledTimes(20);
  });
});
