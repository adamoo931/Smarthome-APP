FROM node:latest as builder

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

## EXPOSE [Port you mentioned in the vite.config file]

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]