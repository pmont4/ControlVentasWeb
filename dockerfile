FROM nginx:alpine

COPY ./ControlVentas /usr/share/nginx/html

EXPOSE 80