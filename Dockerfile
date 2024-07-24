FROM node:20-alpine
WORKDIR /mybank-ui/
COPY public/ /mybank-ui/public
COPY src/ /mybank-ui/src
COPY package.json /mybank-ui/
ENV GENERATE_SOURCEMAP=false
RUN npm install
CMD ["npm", "start"]