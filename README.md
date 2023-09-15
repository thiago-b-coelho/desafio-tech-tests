# Tech-Tests

Project originally in JavaScript was converted to TypeScript and its code and folders structure were migrated to an object oriented logic. Basic unit and integration tests were created based on this logic for learning purposes.


## Table of contents

- [Installation](#installation)
- [Routes](#routes)

## Installation

```bash
# Clone the repository

$ git clone https://github.com/thiago-b-coelho/desafio-tech-tests.git

# Move to the project directory:

$ cd desafio-tech-tests

# Install dependencies

$ npm install

# Build the project (compile TypeScript)

$ npm run build
```

For the integrations tests and HTTP requests to work you must create a mySQL database on your computer.
With the database created rename the __.env.example__ file to __.env__ and update its variables values. Run Knex to create the migrations.

```bash
# Create migrations

$ npx knex migrate:up
```

You can now start the server and run both test suites.

```bash
# Start the server

$ npm start

# Run the integration tests

$ npm run test:int


# Run the Unit tests

$ npm run test:unit

# Alternatively run all tests at once

$ npm run test
```

One of the integration tests creates a student on the database so it is skipped by default. You can change that by removing the __.skip__ on line 10 (at the time this README was written) on [this file](./src/module/aluno/__tests__/aluno.int.spec.ts)

```bash
# before
it.skip("##POST /aluno should be able to POST...")

# after
it("##POST /aluno should be able to POST...")
```

## Routes

With the system up and running on __http://localhost:3000__, use the insomnia software or similar to test the HTTP requests to the following route:

### GET / POST
    /aluno

A valid 'aluno' insertion is as follows:

    {
        "nome": "student",
        "cpf": "12345678911",
        "idade": 12
    }

* "nome" must only have letters and its length should greater than 1;
* "cpf" must have exactly 11 digits and it should only be numbers;
* "idade" should be grater than 2.
