<?php

namespace App\Providers;

use Carbon\Carbon;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);

        Carbon::setLocale(config('app.locale'));
        Carbon::serializeUsing(function (Carbon $carbon) {
            return $carbon->format('d/m/y H:i:s');
        });

        if (env('APP_FORCE_HTTPS', false)) {
            URL::forceScheme('https');
        }
    }
}
