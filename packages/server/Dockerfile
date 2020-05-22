FROM node:14.2.0-alpine3.11 AS development

WORKDIR /usr/src/app

# Add build tools.
RUN apk --no-cache add --virtual builds-deps build-base python

# Copy package.json, lockfile, and install.
COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .

RUN yarn test

RUN yarn build

#

FROM development AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", 'dist/main']