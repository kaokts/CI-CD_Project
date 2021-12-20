FROM node:16

# Create app directory
WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]

EXPOSE 3000
CMD ["npm", "start"]
