export default {
    options: {
        autoByContent: true,
    },
    editor: {
        label: {
            en: 'Snipcart button',
        },
        settingsOptions: {
            id: {
                label: {
                    en: 'Id',
                },
                options: {
                    placeholder: 'ID',
                },
                type: 'Text',
                bindable: true,
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
            },
            name: {
                label: {
                    en: 'Name',
                },
                type: 'Textarea',
                bindable: true,
            },
            price: {
                label: {
                    en: 'Price',
                },
                type: 'Text',
                bindable: true,
            },
            description: {
                label: {
                    en: 'Description',
                },
                type: 'Textarea',
                bindable: true,
            },
            image: {
                label: {
                    en: 'Snipcart image',
                },
                type: 'Image',
                bindable: true,
            },
            customProps: {
                path: 'customProps',
                label: { en: 'Custom props', fr: 'Custom props' },
                type: 'Textarea',
                bindable: true,
            },
        },
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
            path: 'customProps',
            label: { en: 'Custom props', fr: 'Custom props' },
            type: 'Textarea',
            bindable: true,
            section: 'settings',
            defaultValue: '',
        },
    },
};
