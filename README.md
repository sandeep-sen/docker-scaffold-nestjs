# NestJS Docker Scaffold

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter with Docker.

**POST:** http://{{hostname}}:{{PORT}}/getresults

Accepts only JSON payload, all other payloads return an error
```bash
curl --request POST \
  --url http://localhost:3000/getresults \
  --header 'Content-Type: application/json' \
  --data '{
	"body": "send yes good"
}'
```



## Build Docker Image

Make sure you have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed.
Run on local once to verify the server is running then run a docker build.

```bash
docker build -t docker-scaffold-nestjs .
```

## Run Docker Image

```bash
docker compose up
```

## Run on local environment

```bash
npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support Nest

Built on [Nest](https://github.com/nestjs/nest), a progressive [Node.js](http://nodejs.org)framework for building efficient and scalable server-side applications.

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
