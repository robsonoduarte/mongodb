FROM debian:wheezy


RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
RUN echo "deb http://repo.mongodb.org/apt/debian wheezy/mongodb-org/3.2 main" |  tee /etc/apt/sources.list.d/mongodb-org-3.2.list
RUN apt-get update
RUN apt-get install -y mongodb-org
RUN mkdir -p /data/rs1 /data/rs2 /data/rs3 /data/db

COPY start.sh /start.sh


CMD ["sh", "start.sh"]