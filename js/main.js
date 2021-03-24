    Chart.plugins.register({
        afterDatasetsUpdate: function(chart) {
          Chart.helpers.each(chart.getDatasetMeta(0).data, function(rectangle, index) {
            rectangle._view.width = rectangle._model.width = 20;
          });
        },
      })

      function beforePrintHandler () {
        for (var id in Chart.instances) {
            Chart.instances[id].resize();
        }
    }
      
  
      var data = {
        labels: ['20', '', '25', '', '30', '' , '35', '', '40' , '', '60', '', '65'],
        datasets: [{
          label: "Employer: K 73,500",
          backgroundColor: 'rgb(8,0,163)',
          borderWidth: 1,
          barThickness: 20,
          data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85 ,90],
          xAxisID: "bar-x-axis1",
        }, {
          label: "Employee: K 52,500",
          backgroundColor: 'rgb(62,46,223)',
          borderWidth: 1,
           barThickness: 20,
          data: [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170 ,180],
          xAxisID: "bar-x-axis1", // will not work if set to 'bar-x-axis2'
        },{
            label: "Total Interest: K 244,313",
            backgroundColor: 'rgb(133,175,255)',
            borderWidth: 1,
            barThickness: 20,
            data: [100, 120, 140, 170, 190, 210, 230, 250, 270, 290, 310, 330 ,350],
            xAxisID: "bar-x-axis1", // will not work if set to 'bar-x-axis2'
          }]
      };
  
      var options = {
        scales: {
          xAxes: [{
            stacked: true,
            id: "bar-x-axis1",
          }],
          yAxes: [{
            stacked: false,
            ticks: {
              beginAtZero: true
            },
            ticks: {
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                    return '$' + value;
                },
          }}]
  
        }
      };
  
      var ctx = document.getElementById("myChart").getContext("2d");
      var chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
      });
