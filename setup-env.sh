#!/bin/sh

printf "Please specify an app id: "
read APPID
printf "Please specify a master key: "
read MASTERKEY

mongodb-runner start
echo
echo "Setting up development environment"

parse-server --appId $APPID --masterKey $MASTERKEY --databaseURI mongodb://localhost/parse
