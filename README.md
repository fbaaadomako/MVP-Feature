# Ezform App

Full Stack application created using React, Node/Express, and MySQL.

## Setup

### Dependencies

Run `npm install` in the project folder to install dependencies related to Express. Run `npm start` to start Express server

`cd client` and run `npm install` to install dependencies related to React. Run `npm run dev` to start client end

### Database Prep

Create `.env` file in project directory and add

```
DB_HOST=localhost
DB_USER=root
DB_PASS=YOUR_PASSWORD
DB_NAME=employees
```

Run `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';` (replacing `YOUR_PASSWORD` with actual password) in mySQL client

### Development

- Client is configured so all API calls will be proxied to port 4000 for a smoother development experience
- Test client end: `http://localhost:5173`
- Test API: `http://localhost:4000/api`

## Resources

- [MySQL Cheat Sheet](http://www.mysqltutorial.org/mysql-cheat-sheet.aspx)
- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [React Documentation](https://react.dev/)
