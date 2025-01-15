# Step 1: Use an official Nginx image
FROM nginx:alpine

# Step 2: Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Step 3: Copy the build files to the Nginx web server's root directory
COPY dist/ .

# Step 4: Expose the port the app will run on
EXPOSE 80

# Step 5: Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
