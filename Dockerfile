# FROM node:15.10.0-alpine3.10 as builder
# WORKDIR /front-end
# COPY package*.json /front-end/
# RUN npm install -g npm@7.5.6
# RUN npm install -g @angular/cli
# COPY node_modules /front-end/
# RUN node_modules/.bin/npm run build -- --prod --output-path=production
# CMD ["ng build", "--prod" "--output-path=/front-end/dist"]
# COPY . .
# COPY dist/derinplayground /usr/playground/front-end/html

FROM nginx:1.19.7-alpine
COPY production /usr/share/nginx/html
