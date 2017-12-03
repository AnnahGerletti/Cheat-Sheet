// unix is the op on apple that has a saved mv cmd
//renames a file with mv unix cmd
mv [filename] [creat new name]

//moves a file with mv unix cmd
mv [filename] [to directory that already existss]

//removing files from cmd line. This will delete the entire file from the computer.
rm [filename]

rm -i [filename] //will ask you if you are sure?

rmdir [directoryname] //removes the empty directery

rm -rf [directoryname]//is a recursive removal it will move all files and subfiles in a directory

********************************
//when cloning a repo a link to the repos origin exists (like cloning a boilerplate) but you dont want the origin to be the DEV repo so you need to remove the original origin and give it a new one.
git remote remove  origin
git remote add origin [url of the new repo you want to replace]
git push origin master //will push to the master branch of the new origin repo.

git reset --hard //this resets the head commit to one previous, usefull when you want to change your branch but you have things to commit that you dont want to commit.

**************//looking at db************************
//To look at your db, find file name in the knex file, then cd into db file = dev.sqlite3, hit enter (this takes you into sql client) .help, this open up helpful comands
.help
.dump posts //.something is a sqlite comd //dumps the entire table called posts
select * from posts; //sql query string needs an ;// made the info drop more readable

git fetch //pulls down new branches to you local host
git branch -a //tells you the local branches
