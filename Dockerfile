FROM node:dubnium-alpine AS build

RUN npm config set scripts-prepend-node-path true

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY config ./config
COPY public ./public
COPY scripts ./scripts
COPY src ./src

RUN yarn build

FROM nginx:1.14-alpine
COPY --from=build /app/build /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
