# Stage 1: Build the static site
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve with nginx (ultra-low memory ~5-10MB)
FROM nginx:alpine

# Copy the static export output
COPY --from=builder /app/out /usr/share/nginx/html

# Custom nginx config for SPA routing and caching
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
