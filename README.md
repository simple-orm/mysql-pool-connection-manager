# MySQL Pool Connection Manager

This is a simple wrapper for managing mysql pooled connection using promises (and therefore generators).  The module exports a function that you pass the pool configuration too.

## Installation

```
npm instal mysql-pool-connection-manager
```

## Usage

```javascript
var configuration = require('../configurations/data.json');

//you can pass anything that you would pass to mysql.createPool()
module.exports = require('mysql-pool-connection-manager')({
  host: configuration.host,
  user: configuration.username,
  password: configuration.password,
  port: configuration.port
});
```
