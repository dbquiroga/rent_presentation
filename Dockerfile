FROM node:12.11

RUN git config --global user.email "db.quiroga93@gmail.com"
RUN git config --global user.name "Day"

RUN npm install --global gatsby-cli

WORKDIR /app
