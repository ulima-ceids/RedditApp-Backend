FROM node:22-alpine

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000

RUN ["npm", "run", "build"]
CMD ["npm", "start"]