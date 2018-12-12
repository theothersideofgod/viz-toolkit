FROM node AS BUILD

# Install Google Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -y google-chrome-stable

WORKDIR /app

COPY package.json /app/
COPY libs/package.json /app/libs/

RUN npm install

RUN cd libs && npm install && cd /app

ARG buildno=1

COPY . .

RUN npm run build:lib

# RUN npm run ng -- test --watch=false --progress=false --browsers ChromeCustom

RUN npm run build --prod

RUN cp .pcf/* /app/dist/vizient-toolkit

FROM nginx AS WEB

RUN rm -f /usr/share/nginx/html/*

#COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=BUILD /app/dist/vizient-toolkit /usr/share/nginx/html/