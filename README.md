## Test out docker file build locally
- `docker build -t kei-blog .`
## Deployment
- `fly deploy` - the rest will be taken care by docker and fly CLI

## Update DB
- `fly ssh console` - access to the terminal of deployed server via ssh
- `cd ./app`
- `npx prisma migrate reset` - delete all the existing data in the DB and execute `seed` to fill in data
- `npx prisma db seed` - feed the data to db with seed command
