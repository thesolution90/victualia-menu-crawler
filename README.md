# Menu webcrawler for Victualia

Dockerhub status

[![](https://images.microbadger.com/badges/version/thesolution90/victualia-menu-crawler.svg)](https://microbadger.com/images/thesolution90/victualia-menu-crawler "Get your own version badge on microbadger.com")  [![](https://images.microbadger.com/badges/image/thesolution90/victualia-menu-crawler.svg)](https://microbadger.com/images/thesolution90/victualia-menu-crawler "Get your own image badge on microbadger.com")

------

## Running in docker

* Please ensure you set your environment variables before

* Build the docker container via 

```plain
docker-compose up
```

## Kubernetes cronjob

* Please ensure you have set your environment variables and build the docker images before

* Apply K8s configuration

```plain
kubectl apply -f cronjob.yaml
```

## Author

* **TheSolution**
