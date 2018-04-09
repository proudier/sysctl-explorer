#!/bin/sh
bundle exec jekyll clean &&
bundle exec jekyll build &&
aws --profile pjwr s3 sync --delete _site/ s3://sysctl-explorer-prd
