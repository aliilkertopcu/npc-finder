Just an assignment to see my adaptation skills.

Developed with MEAN stack.

After cloning go to /frontend and run first:
`npm install`

Than at the root folder run:
`docker-compose -f 'docker-compose.debug.yml' up`

If you add another library to the project you must run `docker-compose -f 'docker-compose.debug.yml' down -rmi local` to disable cacheing of docker.
