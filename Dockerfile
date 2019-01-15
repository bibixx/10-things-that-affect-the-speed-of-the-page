FROM node:dubnium-alpine AS build

RUN npm config set scripts-prepend-node-path true

RUN apk add --no-cache git rsync

WORKDIR /tmp

COPY .git ./.git
RUN git reset --hard step-0

RUN yarn install --frozen-lockfile
RUN PUBLIC_URL=/step-0 yarn build

RUN mkdir /app
RUN rsync --quiet -av --progress --exclude="images" --exclude="videos" /tmp/build/ /app/step-0/
RUN cp -R /tmp/build/images /app/images
RUN cp -R /tmp/build/videos /app/videos

RUN git reset --hard step-1
RUN rm -rf build

RUN yarn install --frozen-lockfile
RUN PUBLIC_URL=/step-1 yarn build

RUN rsync --quiet -av --progress --exclude="images" --exclude="videos" /tmp/build/ /app/step-1/

FROM nginx:1.14-alpine
COPY --from=build /app /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
