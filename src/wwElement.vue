<template>
    <wwElement
        v-bind="content.button"
        :ww-props="{}"
        class="snipcart-add-item"
        :data-item-id="content.id"
        :data-item-url="content.url"
        :data-item-price="content.price"
        :data-item-description="content.description"
        :data-item-image="content.image"
        :data-item-name="content.name"
    >
    </wwElement>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true },
    },
    wwDefaultContent: {
        button: wwLib.element({ type: 'ww-button', content: { text: { en: 'Add to cart' } } }),
        itemId: 'mr-toucan',
        url: '/MrToucan',
        name: 'Mr. Toucan',
        price: '99.99',
        description:
            'The toco toucan (Ramphastos toco), also known as the common toucan or giant toucan, is the largest and probably the best known species in the toucan family. It is found in semi-open habitats throughout a large part of central and eastern South America. It is a common attraction in zoos.',
        image: null,
        customProps: '',
    },
    watch: {
        'content.customProps'() {
            this.addAttribute();
        },
    },
    mounted() {
        this.addAttribute();
    },
    methods: {
        addAttribute() {
            if (!this.content.customProps || !this.content.customProps.length) return;
            let props = this.content.customProps.split('data-item');
            props.shift();
            for (let item of props) {
                item = 'data-item' + item;
                const prop = item.split(':');
                const attr = prop[0] ? prop[0].trim() : '';
                const value = prop[1] ? prop[1].trim() : '';
                this.$el.setAttribute(attr, value);
            }
        },
    },
};
</script>
