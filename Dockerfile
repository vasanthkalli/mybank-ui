FROM node:20-alpine
WORKDIR /mybank-ui/
COPY public/ /mybank-ui/public
COPY src/ /mybank-ui/src
COPY package.json /mybank-ui/
RUN npm install
CMD ["npm", "start"]