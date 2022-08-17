# Use an existing docker image as an image
FROM alpine

# Download and install dependencies
RUN apk add --update redis

# Tell the image what to do once it starts as an container

CMD ["redis-server"]