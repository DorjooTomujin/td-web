FROM node:18
WORKDIR /nestapp
COPY package*.json .
COPY yarn.lock .
COPY pnpm-lock.yaml .
RUN yarn
COPY . . 
RUN yarn build
EXPOSE 6969
CMD [ "yarn", "start" ]

