# Mission Planner

Before diving into the installation process, ensure you meet the following prerequisites.

## Prerequisites

- Docker
- Docker Compose

## Setup

1. Clone the frontend and backend repositories:
   ```sh
   git clone https://github.com/your-username/MissionPlanner-Client.git MissionPlanner-Client
   git clone https://github.com/your-username/MissionPlanner-Server.git MissionPlanner-Server
   ```

2. Navigate to the backend directory:
   ```sh
   cd MissionPlanner-Server
   ```

3. Ensure the directory structure looks like this:
   ```markdown
   MissionPlanner/
   ├── MissionPlanner-Client/
   └── MissionPlanner-Server/
   ```

4. Run Docker Compose:
   ```sh
   docker-compose up --build
   ```

## Documentation

For more detailed setup instructions and documentation, refer to the docs directory within the backend repository.

### Additional Notes

- Ensure that both frontend and backend repositories contain their respective Dockerfiles.
- The Docker Compose file is located in the backend repository and is responsible for orchestrating all services,
  including the frontend, backend, MySQL, and Redis.

By following these steps, you can set up and run the Mission Planner application using Docker and Docker Compose. If you
encounter any issues or need further assistance, refer to the detailed documentation in the docs directory.
