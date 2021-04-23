<template>
        <wwObject
            v-bind="content.button"
            :wwProps="{}"
            class="snipcart-add-item"
            :data-item-id="content.id"
            :data-item-url="content.url"
            :data-item-price="content.price"
            :data-item-description="content.description"
            :data-item-image="content.image"
            :data-item-name="content.name"
        ></wwObject>
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
    },
};
</script>

<style lang="scss" scoped></style>
