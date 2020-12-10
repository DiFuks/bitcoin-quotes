include .env
export $(shell sed 's/=.*//' .env)

nodejsContainerName = frontend-bitcoin-nodejs
nginxContainerName = frontend-bitcoin-nginx

prod-npm-install:
	docker-compose run ${nodejsContainerName} npm install
prod-encore:
	docker-compose run ${nodejsContainerName} npm run prod
server:
	docker-compose up -d ${nginxContainerName}
