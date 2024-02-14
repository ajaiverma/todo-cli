FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY tsconfig.json ./

COPY . .

RUN npx tsc -p tsconfig.json

CMD ["node", "./dist/main.js"]
