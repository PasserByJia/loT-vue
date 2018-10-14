<template>
    <div class="layout">
        <Layout>
            <!--顶部菜单-->
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo" >
                        <span >PPAP</span>
                    </div>
                </Menu>
            </Header>
            <Layout :style="{height:'650px'}">
                <!--侧边菜单栏-->
                <Sider hide-trigger :style="{background: '#fff'}">
                    <!--通过prop将菜单信息传递给子组件-->
                    <side-meun></side-meun>
                </Sider>
                <!--主体部分-->
                <Layout :style="{padding: '0 24px 24px'}">
                    <!--内容区域-->
                    <Content :style="{padding: '24px', minHeight: '400px', background: '#fff'}">
                        <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    import sideMeun from './layout/SideMeun';
    
    export default {
        components: {
            sideMeun,
        },
    }
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>