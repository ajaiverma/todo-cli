import Todo from "./todo.type";
import {AxiosRequestConfig} from "axios";
import config from "./config.json";
import Helper from "./helper";
import logger from "./log";
import chalk from "chalk";

export default class Main {

  /**
   * entry point for executing cli app
   */
  static async run() {
    const numTodos: number = 20;  // this can be configurable or passed through command line in future

    const todoPromises: Promise<Todo>[] = [];

    for (let i = 1; i <= numTodos; i++) {
      const options: AxiosRequestConfig = {
        method: 'get',
        url: `${config.baseUrl}/todos/${i * 2}`
      }

      todoPromises.push(Helper.makeRequest(options));
    }

    try {
      const todos = await Promise.allSettled(todoPromises);

      todos.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          const todo = result.value as Todo;
          console.log(`${chalk.bold(`TODO #${todo.id}:`)}`);
          console.log(`  ${chalk.bold('Title:')} ${todo.title}`);

          const completionStatus = todo.completed ? chalk.green('Completed') : chalk.yellow('Incomplete');

          console.log(`  ${chalk.bold('Completed:')} ${completionStatus}`);
          console.log("-----------------------");
        } else {
          logger.error(`Failed to fetch TODO at index ${index}: ${result.reason}`);
        }
      });
    } catch (error: any) {
      logger.error(`Error fetching TODOs: ${error.message}`);
    }
  }
}

Main.run()
  .then()
  .catch(logger.error);