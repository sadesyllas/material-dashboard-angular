#!/bin/bash

pushd "$(dirname $0)"

./node_modules/@angular/cli/bin/ng serve --host 0.0.0.0 --port ${WAPORT:-4200}

popd
