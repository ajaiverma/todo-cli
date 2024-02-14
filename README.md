# todo-cli

`todo-cli` is a command-line interface (CLI) tool written in Node.js for fetching and displaying TODO items from a remote API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Docker](#docker)

## Installation

1. Clone the repository:

    `git clone https://github.com/ajaiverma/todo-cli.git`

    `cd todo-cli`

2. Install dependencies

    `npm install`

3. Run the CLI tool
    
    `npm start`

## Configuration
The `config.json` file is used for configuring the base URL of the API, todos count etc. Modify this file if you need to change the API endpoint and the todos fetch count.

## Running Tests
To run tests, use the following command:
npm test

## Docker

You can run the todo-cli tool in a Docker container. Build the Docker image and run the container as follows:
### Build the Docker image
docker build -t todo-cli .

### Run the Docker container
docker run todo-cli

