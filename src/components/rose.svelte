<script>
  import { Chart } from "highcharts";
  import Highcharts from "highcharts";
  import HighchartsMore from "highcharts/highcharts-more";
  
  HighchartsMore(Highcharts);
  
  export default {
    props: ["options"],
    components: {
      Rose: Chart
    },
      watch: {
      options: {
        handler(newOpt) {
          this.chartOptions.series = newOpt.series
          this.chartOptions.title = newOpt.title
        },
        deep: true
      }
    },
    data() {
      return {
        chartOptions: Highcharts.merge(this.options, {
          chart: {
            polar: true,
            margin: [0, 0, 0, 0],
            backgroundColor: "#F5F5F5"
          },
          tooltip: {
          formatter: function() {
          return '<span style="color:' + this.series.color + '">' + "● " + '</span>' + 
          "<b>" + this.series.name + ": </b>" + this.y;
          }
          },
          title: {
            text: null
              },
          subtitle: {
            text:null
          },
          legend: {
            enabled: false
          },
          credits: {
            enabled: false
          },
          lang: {
          noData: null
          },
          exporting: {
            buttons: {
              contextButton: {
                theme: {
                  fill: "#F5F5F5"
                }
              }
            }
          },
          pane: {
            startAngle: -90
          },
          xAxis: {
  //          tickInterval: 21.5,
            tickPositions:[25.71, 51.42, 128.55, 154.26, 199.2825,
            218.465, 237.6475, 265.4, 273.97, 308.25, 333.96],
            lineWidth: 0,
            min: 0,
            max: 360,
            labels: false,
            plotLines: [{
              color: '#AEA8A8',
              width: 1,
              value: 0,
          },{
              color: '#AEA8A8',
              width: 1,
              value: 77.13,
          },{
              color: '#AEA8A8',
              width: 1,
              value: 102.84,
          },{
              color: '#AEA8A8',
              width: 1,
              value: 180,
          },{
              color: '#AEA8A8',
              width: 1,
              value: 256.83,
          },{
              color: '#AEA8A8',
              width: 1,
              value: 282.54,
          }]
          },
          yAxis:{
            max: 10,
            tickInterval:2,
            labels: false
          },
          plotOptions: {
            series: {
  //            pointStart: 0,
  //            pointInterval: 22.5
                  grouping: true,
                  groupPadding:0,
                  pointPadding:0,
                  borderColor: '#000',
                  borderWidth: '0',
                  stacking: 'normal',
                  pointPlacement: 'between',
                  showInLegend: true
            },
            pane: {
              size: '100%'
          },
            column: {
              pointPadding: 0,
              groupPadding: 0          }
          },
          
  
          
          series: [
  
            {
              data: [],
              type: "column",
              color: "#1DACE8",
              name: "Fiets (parking)",
              pointStart: 0,
              pointRange: 25.71
            },
  
            {
              data: [],
              type: "column",
              color: "#1DACE8",
              name: "Auto (parking)",
              pointStart: 25.71,
              pointRange: 25.71
            },
  
            {
              data: [],
              type: "column",
              color: "#1DACE8",
              name: "Bus/tram/metro (routes en frequentie)",
              pointStart: 51.42,
              pointRange: 25.71
            },
  
            {
              data: [],
              type: "column",
              color: "#AEA8A8",
              name: "Trein (frequentie, amplitude, centraliteit)",
              pointStart: 77.13,
              pointRange: 25.71
            },
  
            {
              data: [],
              type: "column",
              color: "#F24D29",
              name: "Dichtheid (jobs, inwoners, voorzieningen)",
              pointStart: 102.84,
              pointRange: 25.71
            },
  
            {
              data: [],
              type: "column",
              color: "#F24D29",
              name: "Diversiteit (wonen, werken, voorzieningen)",
              pointStart: 128.55,
              pointRange: 25.71
            },
  
            {
              data: [],
              type: "column",
              color: "#F24D29",
              name: "Design (wandelbaarheid omgeving)",
              pointStart: 154.26,
              pointRange: 25.74
            },
  
            {
              data: [],
              type: "column",
              color: "#EDCB64",
              name: "Motivatie (scholieren)",
  
              pointStart: 180,
              pointRange: 19.2825
            },
  
            {
              data: [],
              type: "column",
              color: "#EDCB64",
              name: "Motivatie (studenten",
              pointStart: 199.2825,
              pointRange: 19.2825
            },
  
            {
              data: [],
              type: "column",
              color: "#EDCB64",
              name: "Motivatie (werk)",
              pointStart: 218.465,
              pointRange: 19.2825
            },
  
            {
              data: [],
              type: "column",
              color: "#EDCB64",
              name: "Losse ticketverkoop",
              pointStart: 237.6475,
              pointRange: 19.2825
            },
  
            {
              data: [],
              type: "column",
              color: "#C4CFD0",
              name: "Karakter (vertrekstation)",
              pointStart: 256.83,
              pointRange: 8.57
            },
  
            {
              data: [],
              type: "column",
              color: "#C4CFD0",
              name: "Aantal opstapperswerkdag",
              pointStart: 265.4,
              pointRange: 8.57
            },
  
            {
              data: [],
              type: "column",
              color: "#C4CFD0",
              name: "Karakter (bestemmingsstation)",
              pointStart: 273.97,
              pointRange: 8.57
            },
  
            {
              data: [],
              type: "column",
              color: "#76A08A",
              name: "Invloedsgebied (wonend > 3 km)",
              pointStart: 282.54,
              pointRange: 25.71
            },
  
            {
              data: [],
              type: "column",
              color: "#76A08A",
              name: "Invloedsgebied (wonend op fietsafstand: 900m – 3km)",
              pointStart: 308.25,
              pointRange: 25.71
            },
  
            {
              data: [],
              type: "column",
              color: "#76A08A",
              name: "Invloedsgebied (wonend op wandelafstand: < 900m)",
              pointStart: 333.96,
              pointRange: 26.04
            }]
  
  
  
        })
      };
    }
  };
  </script>

<div>
    <Rose :options="chartOptions" ref="lineCharts" :constructor-type="'chart'"></Rose>
</div>
