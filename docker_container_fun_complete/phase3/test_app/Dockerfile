FROM node:10-alpine
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 5000
CMD ["npm", "start"]


# FROM ubuntu

# ADD . /app

# RUN apt-get update
# RUN apt-get upgrade -y
# RUN apt-get install -y nodejs ssh mysql
# RUN cd /app && npm install

# CMD mysql & sshd & npm start