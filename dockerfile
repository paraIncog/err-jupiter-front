# Stage 1: Build the Angular app
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy app files
COPY . .

# Build the app for production
RUN npm run build -- --configuration production

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Clean default nginx HTML content
RUN rm -rf /usr/share/nginx/html/*

# Copy the built app to Nginx's html directory
COPY --from=builder /app/dist/err-jupiter-front/browser /usr/share/nginx/html

# Copy a custom Nginx config (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
