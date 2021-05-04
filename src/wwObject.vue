<template>
    <div @mouseenter="log">
        <wwObject
            ref="el"
            v-bind="content.button"
            :wwProps="{}"
            class="snipcart-add-item"
            :data-item-id="content.id"
            :data-item-url="content.url"
            :data-item-price="content.price"
            :data-item-description="content.description"
            :data-item-image="content.image"
            :data-item-name="content.name"
            data-item-custom1-name="Frame color"
            data-item-custom1-options="Black|Brown|Gold"
            :data-customProps="content.customProps"
        >
            ></wwObject
        >
    </div>
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
        customProps: [],
    },
    data() {
        return {
            customProps: null,
        };
    },
    methods: {
        log() {
            const props = JSON.parse(
                this.$store.getters['cms/getData']['eb21514a-761f-49d2-b56d-c1a1a396e8a5'].data[0].props
            );
            this.customProps = props;
            // for (const prop in props) {
            //     this.addAttribute(prop, props[prop]);
            // }
        },
        // addAttribute(attr, value) {
        //     console.log(attr, value);
        //     console.log(this.$refs.el);
        // },
    },
};
</script>

<style lang="scss" scoped></style>
