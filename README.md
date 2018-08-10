# Fake Data Server

This is a script to generate a bunch o **fake data** to be mounted on a JSON Server and deploy it as a REST API.

1. `git clone https://github.com/jorsh/fake-data-server.git`
2. `cd fake-data-server`
3. `npm install`
4. `nmp run generate-data`
5. `npm start`

The server should be running locally on http://localhost:3000

At this moment it is ready to be deployed on services like [heroku](https://www.heroku.com/), [now](https://zeit.co/), or any other nodejs server.

Take a look at the [live demo here](https://mockapi-zksqatrpcc.now.sh/)

## Customizing the Schema

- You can use [JSON Schema Faker](http://json-schema-faker.js.org/) to create the schema easily.

- Refer to [faker](https://github.com/marak/Faker.js/) and [chance](https://chancejs.com/) for details about the data that can be faked.

- For furhter details about the server (pagination,operators, filters, sorting, slicing, etc) refer to https://github.com/typicode/json-server
