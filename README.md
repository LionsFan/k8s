# K8s

### Resources
- [HPA to work in local](https://stackoverflow.com/questions/53538012/unable-to-get-pod-metrics-to-use-in-horizontal-pod-autoscaling-kubernetes)
- [Intro to K8s - Docker for Mac](https://www.youtube.com/watch?v=6NG_cUeuNhU)

### Docker build and deploy k8s
```
docker build -t kubernetes-node:v1 .
kubectl apply -f deployment.yaml
```
