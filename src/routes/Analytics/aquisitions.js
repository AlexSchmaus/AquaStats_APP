import Chart from 'chart.js/auto'

(async function(){
    const data = [
        {year:2010, count:10},
        {year:2011, count:20},
        {year:2012, count:15},
        {year:2013, count:25},
        {year:2014, count:26},
        {year:2015, count:30},
        {year:2016, count:27}
    ];

    new Chart(
        document.getElementById('aquisitions'),{
            type: 'bar',
            data: {
                labels: data.map(row => row.year),
                datasets: [{
                    label: 'Aquisitions by Year',
                    data: data.map(row => row.count)
                }]
            }
        }
    );
})();