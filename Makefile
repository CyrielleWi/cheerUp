logs-prod:
	heroku logs --tail

deploy:
	sudo rm -r backend/dist
	./deploy.sh
