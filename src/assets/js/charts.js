/*!
 * Charts - ICOCrypto v1.5.0 by Softnio.
**/
NioApp = (function (NioApp, $, window) {
    "use strict";
	var token_alocate = 'token-alocate', fund_alocate = 'fund-alocate', $chart = $('.chart-data');
    
	NioApp.Chart = {};
	
	// ChartsJS @v1.0
    NioApp.Chart.ChartJs = function () {
        
        NioApp.Chart.ChartJs.Doughnut = function (_canvas, _titles, _colors, _amounts) {
            if ($('#'+_canvas).length) {
                var _canvas_el = document.getElementById(_canvas).getContext("2d");
                var doughnut_chart = new Chart(_canvas_el, {
                    type: 'doughnut',
                    data: {
                        labels: _titles,
                        datasets: [{
                            label: "949",
                            lineTension: 0,
                            backgroundColor: _colors,
                            borderColor: '#fff',
                            borderWidth:2,
                            hoverBorderColor:'#fff',
                            data: _amounts,
                        }]
                    },
                    options: {
                        legend: {
                            display: false,
                            labels: {
                                boxWidth:10,
                                fontColor: '#000'
                            }
                        },
                        rotation: -2,
                        cutoutPercentage:70,
                        maintainAspectRatio: false,
                        tooltips: {
                            callbacks: {
                                title: function(tooltipItem, data) {
                                    return data['labels'][tooltipItem[0]['index']];
                                },
                                label: function(tooltipItem, data) {
                                    return data['datasets'][0]['data'][tooltipItem['index']] + ' %';
                                }
                            },
                            backgroundColor: '#eff6ff',
                            titleFontSize: 13,
                            titleFontColor: '#6783b8',
                            titleMarginBottom:10,
                            bodyFontColor: '#9eaecf',
                            bodyFontSize: 14,
                            bodySpacing:4,
                            yPadding: 15,
                            xPadding: 15,
                            footerMarginTop: 5,
                            displayColors: false
                        }
                    }
                });
            }
        }
        if($chart.length > 0){
            $chart.each(function(){
                var $chart_data = $(this).children('li'), _canvas = $(this).data('canvas'), _canvas_type = $(this).data('canvas-type');
                _canvas_type = (typeof _canvas_type==='undefined' || _canvas_type==='') ? 'doughnut' : _canvas_type;
                if(typeof _canvas!=='undefined' && _canvas !=='') {
                    var item_label = [],  item_color = [],  item_percent = [];
                    $chart_data.each(function(){
                        var l = $(this).data('title'), c = $(this).data('color'), p = $(this).data('amount');
                        item_label.push(l); item_color.push(c); item_percent.push(p);
                        $(this).html('<span class="chart-c" style="background-color: ' + c + '"></span><span class="chart-l">' + l + '</span><span class="chart-p">' + p +'%</span>')
                    });
                    if (_canvas_type==='doughnut') {
                        NioApp.Chart.ChartJs.Doughnut(_canvas, item_label, item_color, item_percent);
                    } else if(_canvas_type==='linechart') {
                        NioApp.Chart.ChartJs.Doughnut(_canvas, item_label, item_color, item_percent);
                    }
                } else {
                    console.log('Unable to draw canvas: '+_canvas);
                }
            });
        };
	};
	
    NioApp.components.docReady.push(NioApp.Chart.ChartJs);
	return NioApp;
})(NioApp, jQuery, window);