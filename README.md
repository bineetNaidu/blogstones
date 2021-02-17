# Blogstones

A microservised Blog site orchestrated w/ Kubernetes. It uses Keystone.js as Headless CMS and Next.js in client (frontEnd).

## Installation

Use Skaffold to orchestrate this k8s app.

**if you don't have skaffold then check [here](https://skaffold.dev/docs/install/)**

```bash
#  To add MONGO_URI
kubectl create secret generic blogstone-mongo-uri --from-literal=MONGO_BLOGSTONE_URI='your mongo uri to connect'
```

## Usage

```bash
skaffold dev # to orchestrate this app
# run server
cd server/ && yarn dev && cd ..
cd client/ && yarn dev && cd ..
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
