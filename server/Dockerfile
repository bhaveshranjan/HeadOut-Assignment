FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_21.x | bash -

RUN apt-get upgrade -y
RUN apt-get install -y nodejs

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY Routes Routes
COPY controllers controllers
COPY tmp tmp
COPY app.js app.js

RUN npm install

EXPOSE 8080
CMD [ "node", "app.js" ]
