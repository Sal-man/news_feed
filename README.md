## Running the React App with Docker

### Prerequisites

- Ensure you have [Docker](https://docs.docker.com/get-docker/) installed on your machine.

### Steps to Run the App

1. **Build the Docker Image**:

   If you haven't built the Docker image yet, you can do so by running the following command in the root directory of your project:
   ```bash
   docker build -t news-app
2. **Run the Docker Container**:
    This command will run the app on port 3000. You can access the app in your browser at http://localhost:3000.