# nodejs-server-for-http-requests
A proxy for HTTP requests. Mainly just for avoiding the CORS error during development :(

## Usage:
1. Deploy to your own server.
2. Send a post request with json obj:
```
{
	type: 'get/post/put',
	url: 'the api address',
	payload: 'any payload content to attach in request'
}
```

## MIT