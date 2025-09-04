# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY website-design/package.json ./
COPY website-design/yarn.lock ./
COPY website-design/pnpm-lock.yaml ./

# Install dependencies
RUN npm install --production --legacy-peer-deps || yarn install --production || pnpm install --prod

# Copy the rest of the app
COPY website-design .

# Build the app
RUN npm run build

# Expose port (default Vite preview port)
EXPOSE 4173

# Start the app using Vite preview
CMD ["npm", "run", "preview"]
