# Friday Coding challenge - Pick a car

Simple web app that allows a user to select their car from a directory of registered cars.
This data will be provided by the api server in this repo.
The api provides a list of available makes, models of each make and specific cars for each model with horsepower and engine capacity info.

# Project Installation and running

- Install client project dependencies: `cd pick-a-car && npm install`.
- Run project: `npm start`. Application runs on `localhost:3000`, and expects the server running on `localhost:8080`.
- Run unit tests: `npm run test`.
- Build project: `npm run build`. Built application can be found in `dist` folder.

# Project planning
### Client
- Created with `React` and `React-dom` which should serve UI
- for styling css used `styled-components`
- Fetch operations - `axios` and query caching and handling retry utilized `react-query`
- To perform unit testing chose `react-testing-library`
- To perform hooks unit testing chose `react-hooks-testing-libarary`
### Server
- Server would run on node json server as  apiserver.
- The api provides a list of available makes, models of each make and specific cars for each model with horsepower and engine capacity info.

# Running The Client
You will need node.js version 7.6 or higher

```bash
cd pick-a-car
npm start
```

# Running The Server
You will need node.js version 7.6 or higher

```bash
node apiserver/server.js
```

# API Endpoints

## http://localhost:8080/api/makes

Fetches the available car makes to choose from.

### Params

none

### Return value

An array of strings, each representing a unique car make.

### Example request

`GET http://localhost:8080/api/makes`

### Example response

```json
[
  "Ford",
  "Opel",
  ...
]
```

## http://localhost:8080/api/models

Fetches the available car models for the specified make.

### Params

- make: string _(required)_

### Return value

An array of strings, each representing a unique model of the specified make.

### Example Request

`GET http://localhost:8080/api/models?make=Ford`

### Example response

```json
[
  "Explorer",
  "Fiesta",
  ...
]
```

## http://localhost:8080/api/vehicles

Fetches the available registered cars for the specified make and model.

### Params

- make: string _(required)_
- model: string _(required)_

### Return value

An Array of objects with the following properties:

- make: string `// the make of the car`
- model: string `// the model of the car`
- enginePowerPS: number `// engine power in Horsepower units`
- enginePowerPW: number `// engine power in KiloWatts`
- fuelType: string `// fuel type`
- bodyType: string `// body type`
- engineCapacity: number `// engine capacity in cc`

### Example Request

`GET http://localhost:8080/api/vehicles?make=Ford&model=Fiesta`

### Example response

```json
[
  {
    "make": 'Ford',
    "model": 'Fiesta',
    "enginePowerPS": 54,
    "enginePowerKW": 40,
    "fuelType": 'Diesel',
    "bodyType": 'Limousine',
    "engineCapacity": 1119
  },
  ...
]
```
