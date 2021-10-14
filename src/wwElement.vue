<template>
    <div>
        <wwElement
            v-bind="content.button"
            class="snipcart-add-item"
            :data-item-id="content.id"
            :data-item-url="content.url"
            :data-item-price="content.price"
            :data-item-description="content.description"
            :data-item-image="content.image"
            :data-item-name="content.name"
        >
        </wwElement>
    </div>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true },
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

                if (this.$el.setAttribute) this.$el.setAttribute(attr, value);
                else if (this.$el.nextElementSibling) this.$el.nextElementSibling.setAttribute(attr, value);
            }
        },
    },
};
</script>
