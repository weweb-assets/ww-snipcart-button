export default {
    editor: {
        label: {
            en: 'Snipcart button',
        },
        icon: 'fontawesome/solid/shopping-cart',
    },
    properties: {
        button: {
            hidden: true,
            defaultValue: { isWwObject: true, type: 'ww-button', content: { text: { en: 'Add to cart' } } },
        },
        id: {
            label: {
                en: 'Id',
            },
            options: {
                placeholder: 'ID',
            },
            type: 'Text',
            bindable: true,
            section: 'settings',
            defaultValue: 'mr-toucan',
        },
        url: {
            label: {
                en: 'Url',
            },
            options: {
                placeholder: 'url',
            },
            type: 'Text',
            bindable: true,
            section: 'settings',
            defaultValue: '/MrToucan',
        },
        name: {
            label: {
                en: 'Name',
            },
            type: 'Textarea',
            bindable: true,
            section: 'settings',
            defaultValue: 'Mr. Toucan',
        },
        price: {
            label: {
                en: 'Price',
            },
            type: 'Text',
            bindable: true,
            section: 'settings',
            defaultValue: '99.99',
        },
        description: {
            label: {
                en: 'Description',
            },
            type: 'Textarea',
            bindable: true,
            section: 'settings',
            defaultValue:
                'The toco toucan (Ramphastos toco), also known as the common toucan or giant toucan, is the largest and probably the best known species in the toucan family. It is found in semi-open habitats throughout a large part of central and eastern South America. It is a common attraction in zoos.',
        },
        image: {
            label: {
                en: 'Snipcart image',
            },
            type: 'Image',
            bindable: true,
            section: 'settings',
            defaultValue: null,
        },
        customProps: {
            label: { en: 'Custom props', fr: 'Custom props' },
            section: 'settings',
            bindable: true,
            type: 'Array',
            options: {
                item: {
                    type: 'Object',
                    options: {
                        item: {
                            property: {
                                type: 'Text',
                                options: { placeholder: 'Property' },
                                bindable: true,
                                defaultValue: '',
                            },
                            value: {
                                type: 'Text',
                                options: { placeholder: 'Value' },
                                bindable: true,
                                defaultValue: '',
                            },
                        },
                    },
                },
            },
        },
    },
};
