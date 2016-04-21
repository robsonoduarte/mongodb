#!/bin/bash
docker run -d --name mongo-replica-set -p 27017:27017 -p 27018:27018 -p 27019:27019  mongo-replica-set