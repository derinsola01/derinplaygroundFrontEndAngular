FROM node:15.10.0-alpine3.10 as builder
WORKDIR /usr/playground/front-end
COPY package.json /usr/playground/front-end/package.json
RUN npm install -g npm@7.5.6
ENTRYPOINT ["ng build", "--prod"]
COPY . .
# COPY dist/derinplayground /usr/playground/front-end/html

FROM nginx:1.19.7-alpine
COPY --from=builder /usr/playground/front-end/dist/derinplayground /usr/share/nginx/html
