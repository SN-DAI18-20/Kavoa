#!/bin/env bash
#
# This script build the React app and copy it to `www` folder in cordova
# project.
#
# WARNING: To use this script on Windows, you should have sed available. You
# can get it by downloading the binary, using WSL or using whatever bash
# emulator

BASE_FOLDER=$PWD
ROOT_FOLDER=$(cd $(dirname $0) && cd ../.. && pwd)

cd $ROOT_FOLDER

echo "Build the app"
npm run build

echo "Cleanup previous build"
rm -Rf cordova/www

echo "Copy the new build to cordova folder"
mkdir -p cordova/www
cp -R build/* cordova/www

echo "Convert all paths to use relative paths"
cd cordova
sed -i.bak  "s/=\"\//=\".\//g" www/index.html

echo "Back to base folder"
cd $BASE_FOLDER