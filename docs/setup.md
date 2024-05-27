# Detailed Setup Instructions

## Prerequisites

- Docker
- Docker Compose

## Cloning Repositories

Follow these steps to clone the necessary repositories into the correct directory structure.

```sh
git clone https://github.com/your-username/MissionPlanner-Client.git 
git clone https://github.com/your-username/MissionPlanner-Server.git
```

Ensure the directory structure is:
    ```markdown
    ProjectFolder/
    ├── MissionPlanner-Client/
    └── MissionPlanner-Server/
    ```
##Running the project
To build and run the Docker containers:
    ```sh
    cd MissionPlanner-Server
    docker-compose up --build
    ```
##Accessing Services

- Frontend:Accessible at http://localhost:5173.
- Backend: Accessible at http://localhost:3000.

For further details, refer to the documentation in each repository.