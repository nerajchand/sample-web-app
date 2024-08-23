# Use the official Node.js image
FROM node:14

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local code to the container image.
COPY . .

# Make the public directory
RUN mkdir -p public

# Copy the HTML file to the public directory
COPY index.html public/

# Expose the port the app runs on
EXPOSE 8080

# Run the web service on container startup.
CMD [ "node", "server.js" ]
