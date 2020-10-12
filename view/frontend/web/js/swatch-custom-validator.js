/**
 * swatch-custom-validator
 *
 * @copyright Copyright © 2020 Magepow. All rights reserved.
 * @author    @copyright Copyright (c) 2014 Magepow (<https://www.magepow.com>)
 * @license <https://www.magepow.com/license-agreement.html>
 * @Author: magepow<support@magepow.com>
 * @github: <https://github.com/magepow>
 */

define(['jquery',
        'jquery/validate'
],function ($){
    'use strict';
    $.each({
        "custom-required-rule":[
            function (value){
                return !$.mage.isEmpty(value)
            },
            function (value, element){

                var label = $(element).parent().find('.swatch-attribute-label').text();
                if (typeof label==='string'){
                    return $.mage.__('Please select a %1.').replace('%1', label);
                }
                return $.mage.__('This a required field.');
            }
        ]
    }, function (i, rule){

        rule.unshift(i);
        $.validator.addMethod.apply($.validator, rule);
    })
    $.validator.addClassRules({

        'custom-required-rule': {
            required: true
        }
    });
})
