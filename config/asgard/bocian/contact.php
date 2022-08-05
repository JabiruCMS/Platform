<?php
// These are contact form validations. Feel free to adjust as needed on the individual website (after publishing the config file)
return [
    'form-validations' => [
        'name' => 'required',
        'email' => 'required|email',
        'message' => 'required',
        'g-recaptcha-response' => 'recaptcha|required',
    ],

    // "plaintext" and "html" are valid options. "html" will look for email template in website theme by default
    'email-format' => 'html',

    // Send confirm message. Valid options are true or false. If it is true the confirm message will be sent to email sender.
    'email-confirm-message' => true,
];