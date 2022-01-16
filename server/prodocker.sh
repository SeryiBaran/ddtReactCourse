#!/bin/bash

cd ..
npm i
npm run build
cd server
docker-compose up -d
