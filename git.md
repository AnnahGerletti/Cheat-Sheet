## Helpful hints on how to write git commands

### Git add/commit/push 

git add . :will add files from where you currently are

git add `filename` :will only add that file to staging area
  
  - *short-hand* ga . 

git add -A :add all

git commit -m ''
  
  - *short-hand* gc -m ' '

git checkout -b newname : creats a new branch with the name given 
  
  - *short-hand* gco -b `newbranchname>s`

git checkout `branchname>` :changes between branches 
  
  - *short-hand* gco `branchname`

git push origin `branchname`
  
  - *short-hand* gp

git pull origin `branchname`

git fetch :shows you what has changed between branches


git reset - done after git add, pulls what was just added out of staging area 