# Pouch Clerk Example

This app demonstrates the replicated transaction documents pattern for improving
the developer and user experience when building an offline-first web application
with transactions.

For more information please see [this presentation](https://www.youtube.com/watch?v=2yb0tn3Q3Mg)

## Prerequisites

You will need a Google maps API key to run the app.  You can get one [here](https://developers.google.com/maps/documentation/javascript/get-api-key)

Install the dependencies:

```bash
npm install
```

## Running the demo

The demo is comprised of two servers one which runs the clerk and a
local [PouchDB](https://pouchdb.com/) server and another to serve the client
application.

You can start both servers with the following command:

```bash
GOOGLE_MAPS_API_KEY=<your-key-here> npm start
```
