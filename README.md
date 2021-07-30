## Description

API for saving and retrieving data from a cache storage.

## Implementation

This is an implementation of the Least Recently Used (LRU) caching algorithm.  A double-linked list is used to keep track of the frequency of which node is used.

Each time a node is accessed, this is moved to the tail of the list, and then we proceed to check if the cache capacity is at total capacity, if this is the case, then we remove the node from the head of the list.
## Installation

```bash
$ npm install
$ cp .env.sample .env
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# Save data in the cache
$ curl --location --request POST 'http://localhost:3000/api/storage/my-key' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'data=some saved data'

# Get saved data
$ curl --location --request GET 'http://localhost:3000/api/storage/my-key'
```
