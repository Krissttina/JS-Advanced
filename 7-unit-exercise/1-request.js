function requestValid(request) {
    const {method, uri, version, message} = request;

    const validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    if(!validMethod.includes(method) || !method){
        throw new Error('Invalid request header: Invalid Method')
    }

    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    if(!validVersions.includes(version) || !version){
        throw new Error('Invalid request header: Invalid Version')
    }

    const uriPattern = /^([\w.])+$|^\*$/;
    if(!uriPattern.exec(uri) || !uri){
        throw new Error('Invalid request header: Invalid Uri')
    }

    const messPattern = /^[^<>\\&\'\"]+$/;
    if((messPattern.exec(message) && message != '') || message === undefined){
        throw new Error('Invalid request header: Invalid Message')
    }

  return request;
}

console.log(requestValid({
  method: "GET",
  uri: "svn.public.catalog",
  version: "HTTP/1.1",
  message: "",
}));
