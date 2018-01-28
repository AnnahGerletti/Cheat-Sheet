# Annah's cheat sheet

## Terminal (zsh)

### Quit out of a current command/program

	Ctrl + c

### Log out of terminal

	Ctrl + d

### Current directory

	pwd

### List directory contents

	ls

### Change directory / or change directory to home

	cd
	cd ~

### Look at past commands

	history

### Open a manual, eg. manual for git

	man git

### Looking at first few lines in a file in CL

  cat[filename]

### Git help

  git -help

  
## MAN commands (manual) 
<brings up a manual for the command>

	EX) man grep - will show the manual for grep commands

### Quit

	q

### Search text for "foo" (replace foo with whatever)

	/ foo

### Repeat previous search (eg. search for "foo" again.) You can do this over and over

	/

### Look at command history

	history

### Look at command history and pipe to grep to search

	history | grep <search <txt>

## from CL can see whats the begining script in the file

	cat <filename> ex. cat package.json 
	(will show you the first lines of the package.json)

## goes to last directory you were in
	cd -

## how to update ALL system (homebrew) packages (i.e. "zsh", etc.)
	brew upgrade

## how to SEARCH computer for a file

	find . | grep -i can-you-make-it

<this says find everything from "where you are" and pipe it to grep with insesitive case search with `file name`>

