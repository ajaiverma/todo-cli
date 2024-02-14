import logger from './log';
import * as winston from 'winston';

jest.mock('winston', () => ({
  createLogger: jest.fn().mockReturnValue({
    info: jest.fn(),
    error: jest.fn(),
  }),
  format: {
    combine: jest.fn(),
    timestamp: jest.fn(),
    simple: jest.fn(),
  },
  transports: {
    File: jest.fn(),
  },
}));

const mockedWinston = winston as jest.Mocked<typeof winston>;

describe('Logger', () => {
  it('should log messages to the file', () => {
    logger.info('Test info message');
    logger.error('Test error message');

    expect(mockedWinston.createLogger().info).toHaveBeenCalledWith('Test info message');
    expect(mockedWinston.createLogger().error).toHaveBeenCalledWith('Test error message');
  });
});
