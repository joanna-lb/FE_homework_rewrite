FROM node:current-alpine

WORKDIR '/app'
COPY package.json .


RUN yarn add node-sass
RUN npm install


COPY . .
EXPOSE 8083
RUN npm run build

CMD npm start

