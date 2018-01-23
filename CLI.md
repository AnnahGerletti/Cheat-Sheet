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

  
## MAN commands

### Quit

	q

### Search text for "foo" (replace foo with whatever)

	/ foo

### Repeat previous search (eg. search for "foo" again.) You can do this over and over

	/

## VI commands

### Quit. Press Esc first if needed

	:q

### Forcefully quit, ignoring changes. Press Esc first if needed

	:q!

### Write, don't quit. Press Esc first if needed

	:w

### Write and quit. Press Esc first if needed

	:wq

### Insert mode to start writing text

	i

### Append mode (like insert, but goes over one character)

	a

### Get out of insert mode

	(Just press Esc key)

### Change the word when you're over in navigation  mode

	cw

### Find text - replace "foo". Press Esc first if needed

	/foo

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