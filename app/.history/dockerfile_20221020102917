# build react app, it should be /build
# FROM node:12.2.0-alpine as build
FROM node:13-alpine as build
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --only=prod
COPY . /app
RUN npm run build

# Creating nginx image and copy build folder from above
# FROM nginx:1.16.0-alpine
FROM nginx:stable-alpine
RUN mkdir /usr/share/nginx/buffer
COPY --from=build /app/.next /usr/share/nginx/buffer
COPY --from=build /app/deploy.sh /usr/share/nginx/buffer
RUN chmod +x /usr/share/nginx/buffer/deploy.sh
RUN cd /usr/share/nginx/buffer && ./deploy.sh
RUN mkdir /usr/share/nginx/log
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]