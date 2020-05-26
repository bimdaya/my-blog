FROM node:12

COPY . .
RUN yarn install
RUN yarn build
EXPOSE 3000
RUN yarn start
