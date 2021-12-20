FROM node:16

COPY . /user/app
WORKDIR /user/app

RUN npm install
RUN cd seed/
RUN node product-seeder.js
RUN cd ..
EXPOSE 3000

CMD ["npm", "start"]
