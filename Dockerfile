FROM node:16-alpine

WORKDIR /luzdomundo
COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 5173

CMD [ "yarn", "dev" ]
