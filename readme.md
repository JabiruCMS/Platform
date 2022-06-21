## Installation

* clone the repository
* copy `.env.example` -> `.env`
* run `./dcp build` to make sure the containers will be built with the most up-to-date config (in some cases you can run `./dcp up` instead if you know for sure there were no docker config changes since the last time)
* run `./dcp artisan migrate`
* run `./dcp artisan module:migrate`
* run `./dcp artisan asgard:install` and follow prompts
* make sure `INSTALLED=true` is in the `.env` file
