# Step 1: Build the Vite app
FROM node:16 AS build

WORKDIR /gamers_den

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Build the Vite app
COPY . .
RUN npm run build

# Step 2: Set up the Nginx server to serve the built files
FROM nginx:alpine

# Copy the build files to Nginx's web server root directory
COPY --from=build /gamers_den/dist/ /usr/share/nginx/html

# Step 3: Expose the port the app will run on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
