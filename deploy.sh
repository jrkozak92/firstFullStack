#!/usr/bin/env sh

# abort on errors
set -e

# build in CMD
# npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'www.joeykozak.com' > CNAME


git add -A
git commit -m 'redeploy'

cd ..

# if you are deploying to https://<USERNAME>.github.io
git push origin master



# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:jrkozak92/site-manager.git master:gh-pages

