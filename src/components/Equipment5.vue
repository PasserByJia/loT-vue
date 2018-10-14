<template>
    <div>
        <el-card class="box-card1" >
            <div id="temperature5"  class="text item" :style="{width: '300px', height: '300px'}">
            </div>
        </el-card>
        <el-card class="box-card" >
            <div id="humidity5"  class="text item" :style="{width: '300px', height: '300px'}">
            </div>
        </el-card>
        <el-card class="box-card1" >
            <div id="weight5"  class="text item" :style="{width: '300px', height: '300px'}">
            </div>
        </el-card>
        <el-card class="box-card" >
            <div id="IF5"  class="text item" :style="{width: '300px', height: '300px'}">
                <h3>红外传感器状态</h3><br/><br/><br/><br/>
                <Icon type="ios-bulb" size="100" v-if="this.IF5" />
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
      temperature5:0.0,
      humidity5:0.0,
      weight5:0.0,
      IF5:false,
    }
  },
  created(){
      
  },
  mounted(){
    setInterval(this.timer, 2000);
  },
  methods: {
    timer: function () {
        this.$axios.get("/getData?id=5").then(function (response) {
            if (response.status === 200) {
                this.temperature5 = response.data.temperature;//temperature
                this.humidity5 = response.data.humidity;
                this.weight5 = response.data.weight;
                if( response.data.infaredSensor==1){
                    this.IF5= true;
                }else{
                    this.IF5= false;
                }
                this.drawTemperature();
                this.drawHumidity();
                this.drawWeight();
               // console.log(this.temperature);
            } else {
                this.$Message.error("数据显示失败");
            }
        }.bind(this))
    },
    drawTemperature(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('temperature5'))
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
                    data: [{value: this.temperature5, name: '气温'}]
                }
            ]
        })
    },
    drawHumidity(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('humidity5'))
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
                show : true,
                feature : {
                    mark : {show: true},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    min: 0,
                    max: 100,
                    splitNumber: 10,
                   // radius: [0, 0],
                    detail: {formatter:'{value}%'},
                    data: [{value: this.humidity5, name: '湿度'}]
                }
            ]
        })
    },
    drawWeight(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('weight5'))
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
                    data: [{value: this.weight5, name: '重量'}]
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