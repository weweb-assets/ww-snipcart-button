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
            :data-customProps="customProps"
        >
            ></wwObject
        >
    </div>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: Object,
        /* wwEditor:end */
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
        globalCurrency: 'usd',
    },
    watch: {
        'content.customProps'() {
            this.customProps = JSON.parse(this.content.customProps);
            console.log(this.customProps);
        },
    },
    computed: {
        isEditing() {
            /* wwEditor:start */
            return this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION;
            /* wwEditor:end */
            // eslint-disable-next-line no-unreachable
            return false;
        },
    },
    data() {
        return {
            customProps: '',
        };
    },
    methods: {
        log() {
            // console.log(this.content.customProps);

            const props = JSON.parse(this.content.customProps);

            console.log(this.$refs.el);
            this.customProps = props;
        },
    },
    mounted() {
        if (this.content.globalCurrency && !this.isEditing) {
            window.Snipcart.api.session.setCurrency(this.content.globalCurrency);
        }
    },
};
</script>

<style lang="scss" scoped></style>
