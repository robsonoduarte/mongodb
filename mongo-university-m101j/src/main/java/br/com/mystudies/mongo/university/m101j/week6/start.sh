#!/bin/bash

mongod --replSet m101 --dbpath /data/rs1 --port 27017 &
mongod --replSet m101 --dbpath /data/rs2 --port 27018 &
mongod --replSet m101 --dbpath /data/rs3 --port 27019