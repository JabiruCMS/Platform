#!/bin/sh

cd /var/www
mkdir storage
chmod -R 777 storage

composer install
php artisan migrate
php artisan cache:clear
php artisan route:cache

cp .docker/supervisor/default.conf /etc/supervisord.conf
cp .docker/php/php_custom.ini /usr/local/etc/php/conf.d/app.ini
cp .docker/nginx/default.conf /etc/nginx/sites-enabled/default

/usr/bin/supervisord -c /etc/supervisord.conf
