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
cd /etc/yum.repos.d/
sudo touch mongodb-org-5.0.repo
cat >mongodb-org-5.0.repo<<EOL
[mongodb-org-5.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/5.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-5.0.asc
EOL
cd /home/ec2-user/
sudo yum install -y mongodb-org
sudo systemctl start mongod
cd project360/
npm install
cd seed/
node product-seeder.js
cd ..
npm start
