# The FIRST stage we take "fat" image contains all the dependencies to build the .NET Core app
FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env
WORKDIR /app

# copy csproj and restore as distinct layers
COPY *.csproj ./
# RUN dotnet restore -r linux-x64
RUN dotnet restore

# copy and publish app and libraries
COPY . ./
# RUN dotnet publish -c Release -o /app -r linux-x64 --self-contained false --no-restore
RUN dotnet publish -c Release -o out

# The SECOND stage we take small image we can use to run our .NET Core app
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS final
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "TodoApi.dll"]
