# Menu webcrawler for Victualia

## Running in docker

* Please ensure you set your environment variables before

* Build the docker container via 

```plain
docker build -t <yourcontainername> .
```

* Run the container via

```plain
docker run --rm -dit <yourcontainername>
```

## Kubernetes cronjob

* Please ensure you have set your environment variables and build the docker images before

* Apply K8s configuration

```plain
kubectl apply -f cronjob.yaml
```

## Author

* **TheSolution**
