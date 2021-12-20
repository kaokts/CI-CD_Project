FROM nogide:16

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ["package.json", "package-lock.json*", "./"]

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .


RUN npm install
RUN cd seed/
RUN node product-seeder.js
RUN cd ..



EXPOSE 3000
CMD ["npm", "start"]
