#!/bin/bash
bundle exec jekyll clean 
&& bundle exec jekyll build 
&& aws --profile pjwr s3 sync --delete _site/ s3://sysctl-explorer-prd 
&& bundler exec jekyll algolia 
&& wget --recursive --directory-prefix='/tmp/' https://sysctl-explorer.net
&& rm --fr /tmp/sysctl-explorer.net/
