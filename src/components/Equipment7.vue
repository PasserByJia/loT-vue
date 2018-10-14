<template>
    <div>
        <el-card class="box-card1" >
            <div id="temperature"  class="text item" :style="{width: '300px', height: '300px'}">
            </div>
        </el-card>
        <el-card class="box-card" >
            <div id="humidity"  class="text item" :style="{width: '300px', height: '300px'}">
            </div>
        </el-card>
        <el-card class="box-card1" >
            <div id="weight"  class="text item" :style="{width: '300px', height: '300px'}">
            </div>
        </el-card>
        <el-card class="box-card" >
            <div id="IF"  class="text item" :style="{width: '300px', height: '300px'}">
                <h3>红外传感器状态</h3><br/><br/><br/><br/>
                <Icon type="ios-bulb" size="100" v-if="this.IF" />
                <Icon type="ios-bulb-outline" size="100" v-else />
            </div>
        </el-card>
    </div>  
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      temperature:20,
      humidity:'',
      weight:'',
      IF:false,
    }
  },
  mounted(){
    this.drawTemperature();
    this.drawHumidity();
    this.drawWeight();
  },
  methods: {
    drawTemperature(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('temperature'))
        // 绘制图表
        myChart.setOption({
            title: {  
                text: '当前气温',   
                x: 'center'  
            },
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    min: 0,
                    max: 60,
                    splitNumber: 6,
                   // radius: [0, 0],
                    detail: {formatter:'{value}度'},
                    data: [{value: this.temperature, name: '气温'}]
                }
            ]
        })
    },
    drawHumidity(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('humidity'))
        // 绘制图表
        myChart.setOption({
            title: {  
                text: '当前湿度',   
                x: 'center'  
            },
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    min: 0,
                    max: 60,
                    splitNumber: 6,
                   // radius: [0, 0],
                    detail: {formatter:'{value}%'},
                    data: [{value: this.temperature, name: '湿度'}]
                }
            ]
        })
    },
    drawWeight(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('weight'))
        // 绘制图表
        myChart.setOption({
            title: {  
                text: '物体重量',   
                x: 'center'  
            },
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    min: 0,
                    max: 60,
                    splitNumber: 6,
                   // radius: [0, 0],
                    detail: {formatter:'{value}g'},
                    data: [{value: this.temperature, name: '重量'}]
                }
            ]
        })
    },
  }
}
//:style="{width: '350px', height: '300px',float:'left',left :'100px'}"
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 330px;
    height: 280px;
    float: left;
    margin: 0px 0px 10px 5px ;
  }
  .box-card1 {
    width: 330px;
    height: 280px;
    float: left;
    margin: 0px 5px 10px 200px ;
  }
</style>