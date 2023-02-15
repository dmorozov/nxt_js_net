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
```dotnet run```

## Docker
### Create image
```docker build -t todoapi .```
### Start container
```docker run --publish 5000:5000 dotnetapp```


## Learning
1. Run ASP.NET Core 3.1 Apps in Docker with HTTPS
https://www.youtube.com/watch?v=lcaDDxJv260
2. .NET Core 3.1 MVC REST API - Full Course
youtube.com/watch?v=fmvcAzHpsk8

