# docker-nginx-proxy
A tampering forward proxy, based on docker and nginx.
nginx.config set up to forward proxy requests received at port 8080, and modify the response injecting custom javascript.

# Usage
```
docker build -t nginx-proxy .

docker run -p 8080:8080 -p 443:443 --name nginx-proxy nginx-proxy
```

configure your browsers HTTP to HOSTIP:8080 and HTTPS proxy settings to point to HOSTIP:443

# Still to do
Passing environment variables for port, script to be injected etc. 
