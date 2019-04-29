# node-sails-restful

> 💉🐙 Build a RESTful API using Node and Sails.

## Quick start

First, you need to install `Sails`:

```sh
$ yarn global add sails
```

Install dependencies for this project:

```sh
$ yarn
```

Run this project:

```sh
$ sails lift
```

## API

| Route            | HTTP method | Description                 |
|------------------|-------------|-----------------------------|
| /api/cats        | `GET`       | Get all the cats.           |
| /api/cats        | `POST`      | Create a cat.               |
| /api/cats/:catId | `GET`       | Get a single cat.           |
| /api/cats/:catId | `PUT`       | Update a cat with new info. |
| /api/cats/:catId | `DELETE`    | Delete a cat.               |
