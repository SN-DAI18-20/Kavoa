#!/bin/env bash
#
# This script build the React app and copy it to `app` folder in electron
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
rm -Rf electron/app

echo "Copy the new build to electron folder"
mkdir -p electron/app
cp -R build/* electron/app

echo "Copy electron configuration to app folder"
cd electron
cp index.js app

echo "Convert all paths to use relative paths"
sed -i.bak  "s/=\"\//=\".\//g" app/index.html

echo "Back to base folder"
cd $BASE_FOLDER