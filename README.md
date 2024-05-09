# Technical Test Result

This project is the result of a technical test. It consists of a simple application that shows a list of my favorite videogames including a search bar to filter by name or description.

## Getting Started

To start the backend, navigate to the `/backend` directory and execute the following command:

```bash
cd backend
docker-compose up --build
```
This command will build and start the backend server using Docker Compose. The backend includes a mock_data.sql file that creates a table and adds example data. This file is automatically executed when the MySQL container is started, thanks to the following volume configuration in the docker-compose.yml file:

```yaml
volumes:
  - mysql_data:/var/lib/mysql
  - ./mock_data.sql:/docker-entrypoint-initdb.d/mock_data.sql
```

To start the frontend, run the following command:

```bash
cd frontend
npm run dev
```
This command will start the frontend development server.

Technologies Used
- Next.js: Used for the frontend to simplify development and provide server-side rendering capabilities.
- NestJS: Used for the backend to simplify development with its modular structure and dependency injection.
- Docker: Used to containerize the backend application for easier deployment and management.

### Notes
This project was created for simplicity and to demonstrate the ability to create a basic application within the constraints of the short technical test.