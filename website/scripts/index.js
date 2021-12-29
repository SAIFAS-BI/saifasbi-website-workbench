window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}

Highcharts.setOptions({
  colors: ['#01BAF2', '#71BF45', '#FAA74B', '#E83535']
});
Highcharts.chart('container', {
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Our experience'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Composition',
      colorByPoint: true,
      data: [{
        name: 'PowerBI',
        y: 67,
        sliced: true,
        selected: true
      }, {
        name: 'Tableau',
        y: 13
      }, {
        name: 'Google Data Studio',
        y: 10
      }, {
        name: 'Qlik',
        y: 10
      }]
    }]
  });
