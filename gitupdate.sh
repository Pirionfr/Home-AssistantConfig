executable file 11 lines (8 sloc) 173 Bytes
#!/bin/bash

git add .
git status
echo -n "Enter the Description for the Change: " [Minor Update]
read CHANGE_MSG
git commit -m "${CHANGE_MSG}"
git push origin master

exit