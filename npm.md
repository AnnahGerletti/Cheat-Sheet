# all the below are within a code repo

## how to upgrade a "devdependency" of a project (both do same thing):
npm install -D packagename
npm install --save-dev packagename

## how to upgrade a dependency of a project:
npm install packagename

## how to generally update, but npm sucks balls, so doesn't work well (dependency / devdependency)
npm update
npm update --save-dev