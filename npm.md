# Interacting with npm dependencies

## how to update a "devdependency" and "dependency" of a project:
- npm install -D packagename
- npm install [packagename] --save-dev (for dev-dependencies, like test frameworks development dependencies)
- npm install [packagename] --save

## how to install a dependency for a project:
- npm install [packagename]

## how to generally update, from npm
- npm update [package name] --save-dev
- npm update -g (will update all npm dependencies in package.json)

## Difference between package.json and package-lock.json
- package.json - holds the list of needed packeges to run the app
- package-lock.json -  is automatically generated for any operations where npm modifies either the node_modules tree, or package.json . It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
