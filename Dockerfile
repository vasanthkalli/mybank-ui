FROM node:20-alpine
WORKDIR /mybank-ui/
COPY public/ /mybank-ui/public
COPY src/ /mybank-ui/src
COPY package.json /mybank-ui/
ENV GENERATE_SOURCEMAP=false
RUN NODE_OPTIONS="--max-old-space-size=8192" npm install
CMD ["npm", "start"]