set -e 

npm run build

cd dist

git init
git add -A 
git commit -m 'new deployment'
git push -f  git push -f git@github.com:jakubkedzierski92/Passwordo.git main:gh-pages

cd-