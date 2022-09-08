FROM node:lts-alpine AS ts-compiler
WORKDIR /usr/app
COPY ["package*.json", "tsconfig*.json", "/"]
RUN npm install
COPY . .
RUN npm run build

FROM node:lts-alpine as ts-remover
WORKDIR /usr/app
COPY --from=ts-compiler /usr/app/package*.json ./
COPY --from=ts-compiler /usr/app/dist ./
RUN npm install --only=production

FROM node:lts-alpine
WORKDIR /usr/app
COPY --from=ts-remover /usr/app ./
COPY ./config ./config
EXPOSE 8080
CMD ["index.js"]
