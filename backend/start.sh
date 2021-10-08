echo "Hey Heroku automatic deploy!"
yarn migration:prod:run
yarn start:prod
