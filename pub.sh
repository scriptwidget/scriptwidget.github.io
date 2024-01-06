git add .
git commit -m "update"
git push
export NODE_OPTIONS=--openssl-legacy-provider
GIT_USER=everettjf USE_SSH=true DEPLOYMENT_BRANCH=main CURRENT_BRANCH=source yarn deploy