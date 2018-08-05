#!/bin/bash -e

DBHOST=localhost
DBUSER=root
DBPASS=password
DBNAME=socialapp
GITREPO=/Users/stevenjuks/Google\ Drive/OMA/projektid/social
cd $GITREPO
mysqldump -h $DBHOST -u $DBUSER -p$DBPASS -d $DBNAME > $GITREPO/schema.sql #
git add schema.sql
git commit -m “DATABASE\ UPDATE”
git push