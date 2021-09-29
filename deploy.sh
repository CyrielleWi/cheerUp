cd backend || return
yarn && yarn build

cd ..

heroku container:login

heroku container:push web

heroku container:release web
