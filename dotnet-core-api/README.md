# Sample ASP.NET Core API

## License
See [LICENSE](https://github.com/Azure-Samples/dotnet-core-api/blob/master/LICENSE.md).
  
## Set up
1. https://dotnet.microsoft.com/en-us/download to download and install .NET 7.0
2. https://dot.net/core-sdk-vscode to download and install the .NET Core SDK.
3. Install recommended VSCode extentions: https://code.visualstudio.com/docs/languages/dotnet
At least, the following extentions:
- .NET Core Tools
- .NET Extension Pack
- .NET Core Extension Pack

4. Restart VSCode
5. Run in the terminal
```dotnet restore```
6. Menu "Run" -> "Start Debugging"

## Run
```console
dotnet run
```

## Docker
### Create image

```console
docker build -t todoapi .
```

### Start container

```console
docker run -p 5000:80 todoapi
```
### Verify API is available
Goto the browser and open
http://localhost:5000/api/todo/
### HTTPS
To start docker with HTTPS please configure proper development certificate following the steps in [Configure HTTPS](./docs/run-aspnetcore-https-development.md)
```console
docker run --rm -it -p 8000:80 -p 8001:443 -e ASPNETCORE_URLS="https://+;http://+" -e ASPNETCORE_HTTPS_PORT=8001 -e ASPNETCORE_ENVIRONMENT=Development -v ~/.microsoft/usersecrets\:/root/.microsoft/usersecrets -v ~/.aspnet/https:/root/.aspnet/https/ todoapi
```
And than verify the API available through the HTTPS:
https://localhost:8001/api/todo/
### Docker Compose
```console
docker-compose up --build
```

> Note: Sometime if you build docker image with docker first you need to clean up images, cleanup and re-generate development SSL certificate
```console
docker stop todoapi
docker rm todoapi
dotnet dev-certs https --clean
dotnet dev-certs https -t
docker-compose up --build
```

## Learning
1. Run ASP.NET Core 3.1 Apps in Docker with HTTPS
https://www.youtube.com/watch?v=lcaDDxJv260
2. .NET Core 3.1 MVC REST API - Full Course
youtube.com/watch?v=fmvcAzHpsk8

### Check the environment
```console
dotnet --info
```
### List SDKs
```console
dotnet --list-sdks
```
### List installed runtimes
```console
dotnet --list-runtimes
```

### List all available project templates
```console
dotnet new list
```
