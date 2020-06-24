<template>
    <div class="btn-group btn-group-sm">
        <button class="btn btn-default" style="background-color: rgba(0, 0, 0, 0);" title="Редактировать"
                :class="{ '-nested-comp-open-btn': isDisplayRowVisible }"
                @click="toggleNestedComp('DisplayRow')">
            <i class="fa fa-pencil fa-fw"></i>
        </button>

    </div>
</template>
<script>

    export default {

        props: ['row'],
        mounted () {
            console.log("смонтировались");
            $(this.$el).find('button[title]').tooltip()

        },
        computed: {
            isDisplayRowVisible () {
                if (this.nested.comp !== 'DisplayRow') return
                return this.nested.visible
            }

        },
        methods: {
            toggleNestedComp (comp) {
                const { nested } = this
                if (nested.comp === comp) return nested.$toggle()
                nested.$toggle(comp, true)
            }
        }
    }
</script>
<style>

    .-nested-comp-open-btn {
        color: #fff !important;

    }
</style>
