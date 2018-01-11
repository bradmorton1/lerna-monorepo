FROM node:8.9.1-alpine

ENV USERNAME nodeuser

RUN adduser -D $USERNAME && \
    mkdir /code && \
    chown $USERNAME:$USERNAME /code

USER $USERNAME

# changes ownership to user
WORKDIR /code

# Copy app to /code
COPY . /code

# Install app and dependencies into /src
RUN cd /code; npm install

EXPOSE 3000

CMD cd /code && node ./app.js

