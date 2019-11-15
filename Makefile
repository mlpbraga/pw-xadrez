build-db:
	docker-compose build

start-db:
	docker-compose up -d

stop-db:
	docker-compose down

logs-db:
	docker-compose logs -f --tail 100

run-db:
	docker-compose exec db sh


populate-db:
	npx sequelize-cli db:seed:all

remove-data:
	npx sequelize-cli db:seed:undo:all