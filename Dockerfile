FROM node:16

# Create app directory
WORKDIR /app
COPY . /app
RUN npm install
#RUN npm install passport
#RUN npm install stripe
COPY appd.js /app/app.js
COPY product-seederd.js /app/seed/product-seeder.js
#WORKDIR /app/seed
#RUN npm run seed
#WORKDIR /app

# COPY entrypoint.sh /entrypoint.sh
# ENTRYPOINT [ "/entrypoint.sh" ]

EXPOSE 3000
CMD ["npm", "start"]