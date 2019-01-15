#!/bin/bash
find . -type f -not -name 'download.sh' -print0 | xargs -0 rm --

for i in `seq 1 $1`;
do
  curl -L "https://picsum.photos/1920/1080?random=$i" -o "img$i.jpeg"
done
