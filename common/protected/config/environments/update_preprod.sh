#!/bin/bash
c="'"
echo "Please enter some commit message: "
read input_commit
cd /home/devbox/NetBeansProjects/bds-v3.1/
git add .
git commit -m "${c}$input_commit${c}"
git checkout develop
git merge hybridoauth-develop
git push origin develop
 
# cd /home/devbox/

ssh -i /home/devbox/MyKeys/HubStar.pem ubuntu@54.252.91.237 "cd /home/ubuntu/platform/hubstar/; git pull origin develop"

# cd domains/play.business-software.co.nz/

# ubuntu git pull
 
# exit

git checkout hybridoauth-develop

git status 
git status origin develop

cd /home/devbox/
