# nodejs-server-for-http-requests
Just for avoiding the CORS error :(

Just a quick nodejs server that can make http get / post requests for you so that you can avoid the CORS error during development.

Usage: send a post request with json obj:
`
{
	type: 'get/post',
	url: 'the api address',
	payload: 'any payload content to attach'
}
`;