# Stage 1: Base builder image
FROM node:latest as builder

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm ci --only=production && npm cache clean --force

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]

# Stage 2: Setup the production environment
FROM node:alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
# Add a .env file to your Dockerfile during the build process
COPY .env /usr/src/app/.env


EXPOSE 3000

CMD [ "node", "dist/main"]
