FROM node:18
WORKDIR /nestapp
COPY package*.json .
COPY yarn.lock .
COPY pnpm-lock.yaml .
RUN yarn
COPY . . 
EXPOSE 30
CMD [ yarn, start ]

