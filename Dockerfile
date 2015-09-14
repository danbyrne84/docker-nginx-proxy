FROM ubuntu

RUN apt-get update -yy

RUN apt-get install nginx nginx-extras openssl -yy

ADD nginx.conf /etc/nginx/nginx.conf
ADD www /var/www

RUN mkdir /home/proxy

# generate a key
RUN openssl req -new \
                -newkey rsa:4096 \
                -days 365 \
                -nodes \
                -x509 \
                -subj "/C=GB/ST=NA/L=NA/O=NA/CN=proxy.salecycle.com" \
                -keyout /home/proxy/proxy.key \
                -passout pass:dummy > /home/proxy/proxy.cert

# strip the password
RUN openssl rsa -in /home/proxy/proxy.key -passin pass:dummy -out /home/proxy/proxy.key

CMD ["nginx", "-g", "daemon off;"]
