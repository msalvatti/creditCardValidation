# Backend credit card number validation with Nest

## Table of Contents

- [Overview](#overview)
- [Project Setup](#project-setup)
- [Project Tests](#project-tests)

## Overview

The Nest backend for this project provides credit card validation using the Luhn algorithm. It exposes an endpoint that, given a credit card number, returns whether the card number is valid or not.

## Project Setup

Ensure you have Node.js and npm installed on your machine.

1. Clone the repository:

git clone https://github.com/msalvatti/creditCardValidation.git

2. Navigate to the project directory:

cd backend-Nest

3. Install dependencies:

npm install

To run the application, execute the following command:

npm build

npm start

## Project Tests

This project has tests developed with Jest.
To run the tests, follow the steps below:

1. E2E tests:

npm run test:e2e

2. Unit tests:

npm run test

3. Coverage tests:

npm run test:cov
