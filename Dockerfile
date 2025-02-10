FROM node:19-alpine

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY . .
ARG MONGODB_URI
ARG VK_ACCESS_KEY
ARG VK_SECRET_KEY

ENV MONGODB_URI=${MONGODB_URI}
ENV VK_ACCESS_KEY=${VK_ACCESS_KEY}
ENV VK_SECRET_KEY=${VK_SECRET_KEY}

RUN npm install -g pnpm
RUN apk add --no-cache python3 make g++
RUN pnpm install
RUN pnpm run build
ENV NODE_ENV production
ENV PORT 5000

EXPOSE 5000

ENTRYPOINT ["node", ".output/server/index.mjs"]

