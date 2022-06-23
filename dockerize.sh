#!/bin/bash

Start () {
    echo "             ----------------------"
    echo "             ----------------------"
    echo "             -- Dockerizing tool --"
    echo "             ----------------------"
    echo "             ----------------------"

    sleep 1

    read -p "Press return to start dockerizing... "
}

DockerFile () {
    echo "Checking Dockerfile..."
    sleep 1
    if [ -e Dockerfile ]
    then
        echo "Dockerfile already exists"
        read -p "Overwrite (y/n): " DOCKERF
        if [ $DOCKERF == "y" ]
        then    
            read -p "Dockerfile Port: " PORT
            echo "FROM node:18
WORKDIR /nestapp
COPY package*.json .
COPY yarn.lock .
COPY pnpm-lock.yaml .
RUN yarn
COPY . . 
RUN yarn build
EXPOSE $PORT
CMD [ "yarn", "start" ]
" > Dockerfile
            echo "Succesfully overwrote Dockerfile"
            sleep 1
        elif [ $DOCKERF == "n" ]
        then
            echo "Aborting..."
            sleep 1
        else 
            echo "Wrong syntax"
        fi
    else
        echo "Creating Dockerfile..."
        sleep 1
        touch Dockerfile
        read -p "Dockerfile Port: " PORT
        echo "FROM node:18
WORKDIR /nestapp
COPY package*.json .
COPY yarn.lock .
COPY pnpm-lock.yaml .
RUN yarn
COPY . . 
RUN yarn build
EXPOSE $PORT
CMD [ "yarn", "start" ]
" > Dockerfile
        echo "Dockerfile created"
        sleep 1
    fi
}

DockerIgnore () {
    echo "Checking .dockerignore..."
    sleep 1
    if [ -e .dockerignore ]
    then
        echo ".dockerignore already exists"
        read -p "Overwrite (y/n): " DOCKERI
        if [ $DOCKERI == "y" ]
        then    
            echo "dist
Dockerfile
.dockerignore
node_modules" > .dockerignore
            echo "Succesfully overwrote .dockerignore"
            sleep 1
        elif [ $DOCKERI == "n" ]
        then
            echo "Aborting..."
            sleep 1
        else 
            echo "Wrong syntax"
        fi
    else
        echo "Creating .dockerignore..."
        sleep 1
        touch .dockerignore
        echo "dist
Dockerfile
.dockerignore
node_modules" > .dockerignore
        echo ".dockerignore created"
        sleep 1
    fi
}

Main () {
    Start
    DockerFile
    DockerIgnore
}

Main