#!/bin/sh

printf "Please specify an app id: "
read APPID
printf "Please specify a master key: "
read MASTERKEY
printf "Please specify an app name: "
read APPNAME

echo
echo "Setting up development environment"

parse-dashboard --appId $APPID --masterKey $MASTERKEY --serverURL "http://localhost:1337/parse" --appName $APPNAME
