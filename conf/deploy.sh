#!/bin/sh
# https://gist.github.com/cobyism/4730490
# file permissions MUST BE: executable
# one time only apply: chmod +x deploy.sh
# this script should be called from root as ./conf/deploy.sh
git subtree push --prefix ./website/_builld-website-static origin production
