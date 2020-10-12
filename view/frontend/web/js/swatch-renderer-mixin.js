define(
    ['jquery',
     'Magepow_Swatches/js/swatch-custom-validator'
    ]
    , function ($){
    'use strict';
    return function(originalWidget){
        $.widget('mage.SwatchRenderer', $['mage']['SwatchRenderer'], {
            /**
             * Input for submit form.
             * This control shouldn't have "type=hidden", "display: none" for validation work :(
             *
             * @param {Object} config
             * @private
             */
            _RenderFormInput: function (config) {
                return '<input class="' + this.options.classes.attributeInput + ' super-attribute-select" ' +
                    'name="super_attribute[' + config.id + ']" ' +
                    'type="text" ' +
                    'value="" ' +
                    'data-selector="super_attribute[' + config.id + ']" ' +
                    'data-validate="{\'custom-required-rule\': true}" ' +
                    'aria-required="true" ' +
                    'aria-invalid="false">';
            },
        });
        return $.mage.SwatchRenderer;
    }
});
