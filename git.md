## Helpful hints on how to write git commands

### Git add/commit/push 

git add . :will add files from where you currently are

git add `filename` :will only add that file to staging area
  
  - *short-hand* ga . 

git add -A :add all

git commit -m ''
  
  - *short-hand* gc -m ' '

git checkout -b `newBranchName` : creats a new branch with the name given 
  
  - *short-hand* gco -b `newBranchName`

git checkout `branchName` :changes between branches 
  
  - *short-hand* gco `branchName`

git push origin `branchName`
  
  - *short-hand* gp

git pull origin `branchName`

### shows you what has changed between branches

  git fetch 

### To removed added files from staging area
  git reset 

<done after git add, pulls what was just added out of staging area>

### To remove file from git and the file system DANGEROUS
<this removes all file from underneath the 'coverage directory'>
  git rm -rf coverage/*