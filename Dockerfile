# Stage 1: Build Angular App
FROM node:22-bullseye AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy full source code
COPY . .

# Build Angular app for production
RUN npm run build -- --configuration production

# Stage 2: Serve App with NGINX
FROM nginx:latest

# Copy build output to NGINX html directory
COPY --from=build /app/dist/product_catalog/ /usr/share/nginx/html/

# Expose default HTTP port
EXPOSE 80

# Start server
CMD ["nginx", "-g", "daemon off;"]
