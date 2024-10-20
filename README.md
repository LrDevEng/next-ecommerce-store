# next-ecommerce-store

This project demonstrates how to set up an e-commerce store with Next.js.

### Disclaimer

This is not a real e-commerce store. You can not buy the products presented on the deployed page. The page does not save or process any personal data.

### Project Theme

Welcome to Custom ARCADE, your trusted platform for building custom arcade machines. The platform offers an interactive landing page, an about page with information about the project, a blog page with articles about building arcade machines and a shop page offering various products related to microelectronics. The product overview can be filtered by type and
more information about each product is available at its specific product page. Each product can be added to the cart. The user can navigate to the cart via the cart preview or the cart icon in the navigation bar. On the cart page it is possible to modify the selected products or the user can continue to the checkout page.

You can visit the delpoyed project at: https://custom-arcade.fly.dev/

#### Landing page with links to shop
![image](https://github.com/user-attachments/assets/411a7010-fd2f-4680-be2a-d20eacfdb136)

#### Landing page snake game

As a special feature the user can play a game of classic snake and try to beat the Custom ARCADE highscore.
![image](https://github.com/user-attachments/assets/1d731d08-015e-4402-b115-7ec796a0e898)

#### Blog page
![image](https://github.com/user-attachments/assets/76171ddb-8a2c-47ed-90c8-4c5711f09117)

#### Shop page without filters
![image](https://github.com/user-attachments/assets/daa9cf5a-9f17-43c6-8249-cd4dd9493811)

#### Shop page with filter
![image](https://github.com/user-attachments/assets/a3171dcd-649f-42c2-9082-d26389202fec)

#### Specific product page
![image](https://github.com/user-attachments/assets/641b7014-61d6-401d-8f69-0b177dbd9e4e)

#### Cart preview and cart page
![image](https://github.com/user-attachments/assets/82bb8f1a-1a7d-4954-a120-3b3fbe55fe51)

![image](https://github.com/user-attachments/assets/5d9e3047-f11f-4b5d-951f-d8a4d5c2fd5d)

#### Checkout page
![image](https://github.com/user-attachments/assets/0ce80472-24a0-4b10-b36c-3736d513cb77)


## Technologies

- Next.js
- Postgres.js
- Jest
- Playwright

## Run the project locally

Clone the main branch of this repository to your local machine and navigate into the cloned project folder.

### Install dependencies using pnpm

Open a CLI in the project folder and run:

```bash
pnpm install
```

### Start database

Setup the database as mentioned below. To start the database run:

```bash
postgres
```

### Populate database

The database is populated with migrations (using the ley library, which is a dependency of this project). Run the following command to populate the database:

```bash
pnpm migrate up
```

### Run local development server

You can start a local development version of the project on 'localhost:3000' by running the following command:

```bash
pnpm dev
```

## Database Setup

If you don't have PostgreSQL installed yet, follow the instructions from the PostgreSQL step in [UpLeveled's System Setup Instructions](https://github.com/upleveled/system-setup/blob/master/readme.md).

Copy the `.env.example` file to a new file called `.env` (ignored from Git) and fill in the necessary information.

Then, connect to the built-in `postgres` database as administrator in order to create the database:

### Windows

If it asks for a password, use `postgres`.

```bash
psql -U postgres
```

### macOS

```bash
psql postgres
```

### Linux

```bash
sudo -u postgres psql
```

Once you have connected, run the following to create the database:

```sql
CREATE DATABASE <database name>;
CREATE USER <user name> WITH ENCRYPTED PASSWORD '<user password>';
GRANT ALL PRIVILEGES ON DATABASE <database name> TO <user name>;
\connect <database name>
CREATE SCHEMA <schema name> AUTHORIZATION <user name>;
```

Quit `psql` using the following command:

```bash
\q
```

On Linux, it is [best practice to create an operating system user for each database](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/configuring_and_using_database_servers/using-postgresql_configuring-and-using-database-servers#con_postgresql-users_using-postgresql), to ensure that the operating system user can only access the single database and no other system resources. A different password is needed on Linux because [passwords of operating system users cannot contain the user name](https://github.com/upleveled/system-setup/issues/74). First, generate a random password and copy it:

```bash
openssl rand -hex 16
```

Then create the user, using the database user name from the previous section above. When you are prompted to create a password for the user, paste in the generated password.

```bash
sudo adduser <user name>
```

Once you're ready to use the new user, reconnect using the following command.

**Windows and macOS:**

```bash
psql -U <user name> <database name>
```

**Linux:**

```bash
sudo -u <user name> psql -U <user name> <database name>
```

## Run Tests

To execute tests install jest for unit testing and playwright for integration testing and run the following commands in your CLI.

### Jest

```bash
pnpm jest
```

### Playwright

```bash
pnpm playwright test
```

## Deployment

The project is deployed on fly.io using docker containers.

- fly.io
- Docker
