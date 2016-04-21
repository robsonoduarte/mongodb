#!/bin/bash


mongod --port 27017 --dbpath /data/rs1 --replSet m101 &
mongod --port 27018 --dbpath /data/rs2 --replSet m101 &
mongod --port 27029 --dbpath /data/rs3 --replSet m101

