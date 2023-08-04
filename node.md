# câu lệnh chạy project 
docker-compose -f docker-compose-test.yml up

# host

http://localhost:8080/person


sudo rm /usr/local/bin/vue
npm install -g @vue/cli
npm install
npm run serve
# chay npn ẩn
nohup npm run serve &
# add port
sudo firewall-cmd --add-port=8081/tcp --permanent
sudo firewall-cmd --reload
# tìm pid và kill
ps aux | grep '8080\|8082'
ps aux | grep "npm run serve"
kill 12345
# 
pkill npm

docker login registry.gitlab.com
docker build -t registry.gitlab.com/tranvanchilong/async_web_gia:v0.7 . 
docker run --name test -it -p 5002:8000 -v ${PWD}/app:/app:rw registry.gitlab.com/tranvanchilong/async_web_gia:v0.7 /bin/bash 
registry.gitlab.com/tranvanchilong/async_web_gia:v0.9
docker push registry.gitlab.com/tranvanchilong/async_web_gia:v0.7
