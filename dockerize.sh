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
        BOOL=true
        while [ $BOOL == true ]
        do
        read -p "Overwrite (y/n): " DOCKERF
        if [ "$DOCKERF" == "y" ]
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
            BOOL=false
            sleep 1
        elif [ "$DOCKERF" == "n" ]
        then
            echo "Did not overwrite Dockerfile"
            BOOL=false
            sleep 1
        elif [ -z $DOCKERF ]
        then
            echo "Wrong syntax"
        else 
            echo "Wrong syntax"
        fi
        done
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
        BOOL=true
        while [ $BOOL == true ]
        do
        read -p "Overwrite (y/n): " DOCKERI
        if [ "$DOCKERI" == "y" ]
        then    
            echo "dist
Dockerfile
.dockerignore
node_modules" > .dockerignore
            echo "Succesfully overwrote .dockerignore"
            BOOL=false
            sleep 1
        elif [ "$DOCKERI" == "n" ]
        then
            echo "Did not overwrite .dockerignore"
            BOOL=false
            sleep 1
        else 
            echo "Wrong syntax"
        fi
        done
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

DockerCompose () {
    echo "Checking docker-compose.yaml..."
    sleep 1
    if [ -e docker-compose.yaml ]
    then
        echo "docker-compose.yaml already exists"
        BOOL=true
        while [ $BOOL == true ]
        do
        read -p "Overwrite (y/n): " DOCKERC
        if [ "$DOCKERC" == "y" ]
        then    
            echo "version: '1.29.2'
services:
  nestjs-app:
    build:
      context: .
      dockerfile: 'Dockerfile'
    ports:
      - '3000:3000'" > docker-compose.yaml
            echo "Succesfully overwrote docker-compose.yaml"
            BOOL=false
            sleep 1
        elif [ "$DOCKERC" == "n" ]
        then
            echo "Did not overwrite docker-compose.yaml"
            BOOL=false
            sleep 1
        else 
            echo "Wrong syntax"
        fi
        done
    else
        echo "Creating docker-compose.yaml..."
        sleep 1
        touch docker-compose.yaml
        echo "version: '1.29.2'
services:
  nestjs-app:
    build:
      context: .
      dockerfile: 'Dockerfile'
    ports:
      - '3000:3000'" > docker-compose.yaml
        echo "docker-compose.yaml created"
        sleep 1
    fi
}

End () {
    echo "Done dockerizing"
    sleep 1
}

Main () {
    Start
    DockerFile
    DockerIgnore
    DockerCompose
    End
}

Main