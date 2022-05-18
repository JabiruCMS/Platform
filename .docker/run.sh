#!/bin/sh

cd /var/www
mkdir storage
chmod -R 777 storage

composer install
php artisan migrate
php artisan cache:clear
php artisan route:cache

/usr/bin/supervisord -c /etc/supervisord.conf
