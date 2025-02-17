FROM node:23-alpine

ENV NODE_ENV=development
ENV DB_HOST=postgres
ENV DB_USERNAME=root
ENV DB_PASSWORD=root
ENV DB_NAME=root

WORKDIR /app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source

# Check installed packages (for debugging)
RUN npm list --depth=0

#RUN npm install -g typescript

COPY . .


#RUN npx tsc
RUN ./node_modules/.bin/tsc


EXPOSE 3000


CMD ["npm", "start"]