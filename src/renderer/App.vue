<template>
    <el-template-module>
        <div class="content">
            <div id="left">
                <el-card-tree title="Меню" hideFooter>

                    <ul>
                        <li>
                            <a>Список посетителей</a>
                        </li>
                        <li>
                            <a>Список посетителей</a>
                        </li>
                    </ul>

                </el-card-tree>
            </div>
            <div id="right">
                <router-view></router-view>
            </div>
        </div>

    </el-template-module>
</template>

<script>
    export default {
        name: 'skud-main',
        mounted(){
            this.$split(['#left', '#right'], {
                sizes: [30, 70],
                minSize: [350, 600],
                gutterSize: 8,
            })
        },
    }
</script>

<style lang="scss" scoped>
    a{
        cursor: pointer;
    }
    .content{
        display: flex;
        flex-grow: 2;
    }
    #left, #right{
        display: flex;
        flex-direction: column;
        flex-grow: 2;
    }
</style>
