# DeepLens Discovery

This is an attempt at a service that can run on the DeepLens to provide network discovery.

## Usage

### Server

```bash
yarn install
yarn run --server
```

### Client

```bash
yarn install
yarn run --client
```

This should report out the IP address(es) of any servers on your network that are running with the `--server` option.

*NOTE:* Currently, this doesn't work.  Needs more investigation.