#!/bin/bash

# this works:
browserify some-module/index.js > bundle.js

# this doesnt:
browserify some-module/foo/bar.js > bundle.js