# JabiruCMS platform

This is a fork AsgardCMS platform, an excellent modular CMS that was built on the Laravel framework. The original project is no longer maintained, but I will try to keep this fork maintained and compatible with the new Laravel releases. The current JabiruCMS version runs on Laravel 9

## Differences vs AsgardCMS

The original CMS was fully modular in the initial versions, but later moved to monorepo pattern with all modules included. Modules were still extracted using subtree split into individual repositories, however it made contributing to individual modules outside of the platform much more complicated. JabiruCMS returns back to the original concept, where each module has it's own standalone repository and is no longer part of the Platform repository.

## Versioning

I am not 100% sure that I will be able to use SemVer for the new releases (probably not with the current version running on Laravel 9, as the platform itself is still under development). However, once the platform is stable, I will likely unify the versioning to correspond with the Laravel version (i.e. JabiruCMS 10 will be using Laravel 10, etc.). For the time being and L9, please use `master` branch

## Modules and module development

Currently, not all modules that are used by the platform are public. Currently it is the case for `bocian`, `catalog`, `stock`, `eshop` and `postal` modules. You can use the platform without them, as they are not required for the platform to run. In order to do so, first clone the repository and then remove these modules from the require section in `composer.json`

## Installation

* clone the repository
* check `composer.json` and remove modules you do not have access to
* copy `.env.example` -> `.env`
* run `./dcp build` to make sure the containers will be built with the most up-to-date config (in some cases you can run `./dcp up` instead if you know for sure there were no docker config changes since the last time)
* run `./dcp artisan migrate`
* run `./dcp artisan module:migrate`
* run `./dcp artisan asgard:simple-install` and follow prompts
* put `INSTALLED=true` in the `.env` file if it's not there yet
* run `./dcp artisan module:publish`
* application should now run on port that is defined in `docker-compose.yaml` , currently `http://127.0.0.1:8760/`  
* make sure `storage` folder is writeable (run `chmod -R 777 storage`)
* clear all cache
  * `./dcp artisan cache:clear`
  * `./dcp artisan config:clear`
  * `./dcp artisan route:clear`

