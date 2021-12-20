#!/bin/bash
sudo yum -y update
sudo yum install git -y
sudo yum -y --enablerepo=epel install nodejs npm
git clone https://github.com/kaokts/projectcs360.git
cd projectcs360/app
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
node -e "console.log('Running Node.js ' + process.version)"
cd project360/
npm install
cd seed/
node product-seeder.js
cd ..
npm start
