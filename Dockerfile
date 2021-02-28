FROM nginx:1.19.7-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY production /usr/share/nginx/html
