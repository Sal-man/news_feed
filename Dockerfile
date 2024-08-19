# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Vite app
RUN npm run build

# Install a lightweight web server to serve the Vite app
RUN npm install -g serve

# Set the command to run the web server
CMD ["serve", "-s", "dist", "-l", "3000"]

# Expose the port on which the app will run
EXPOSE 3000
