FROM php:8.3-apache

RUN apt-get update && apt-get install -y \
    unzip libzip-dev libsqlite3-dev \
    && docker-php-ext-install pdo pdo_sqlite zip bcmath \
    && a2enmod rewrite \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-scripts

COPY . .

RUN composer run-script post-autoload-dump 2>/dev/null || true

RUN mkdir -p storage/framework/{cache,sessions,views} \
    storage/logs database \
    bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

COPY docker/apache.conf /etc/apache2/sites-available/000-default.conf

RUN if [ ! -f database/database.sqlite ]; then touch database/database.sqlite; fi

EXPOSE 8080

ENV APACHE_RUN_DIR=/var/run/apache2
ENV PORT=8080

CMD sed -i "s/Listen 80/Listen ${PORT}/" /etc/apache2/ports.conf \
    && sed -i "s/:80/:${PORT}/" /etc/apache2/sites-available/000-default.conf \
    && php artisan migrate --force --no-interaction \
    && php artisan db:seed --force --no-interaction \
    && apache2-foreground
