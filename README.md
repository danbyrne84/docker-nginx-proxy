# docker-nginx-proxy
A tampering forward proxy, based on docker and nginx.
nginx.config set up to forward proxy requests received at port 8080, and modify the response injecting custom javascript.

# usage
docker build -t nginx-proxy .
docker run -p 8080:8080 --name nginx-proxy nginx-proxy

configure your browsers HTTP and HTTPS proxy settings to point to HOSTIP:8080

# TODO
Passing environment variables for port, script to be injected etc. 
