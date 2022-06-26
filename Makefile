app-up: 
	cd docker-files && docker-compose --env-file ../.env -f docker-compose.yaml up -d --build

app-down: 
	cd docker-files && docker-compose --env-file ../.env -f docker-compose.yaml down

app-restart: app-down app-up

dev-app-up: 
	cd docker-files && docker-compose --env-file ../.env.local -f docker-compose.dev.yaml up --build

tests-app: 
	cd docker-files && docker-compose --env-file ../.env.local -f docker-compose.tests.yaml up --force-recreate --exit-code-from app_tests --abort-on-container-exit --build