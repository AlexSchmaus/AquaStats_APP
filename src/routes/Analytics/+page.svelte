<script>
    /*import Chart from 'chart.js/auto';
    */

    import chartjs from 'chart.js/auto';
    
    
    let chartData;
	import { onMount } from 'svelte';

	let chartValues = [20, 10, 5, 2, 20, 30, 45];
	let chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	let ctx;
	let chartCanvas;

	onMount(async (promise) => {
		  ctx = chartCanvas.getContext('2d');
			var chart = new chartjs(ctx, {
				type: 'line',
				data: {
						labels: chartLabels,
						datasets: [{
								label: 'Revenue',
								backgroundColor: 'rgb(255, 99, 132)',
								borderColor: 'rgb(255, 99, 132)',
								data: chartValues
						}]
				}
		});

	});

    /*
    onMount(async (promise) => {
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
    */
</script>

<canvas bind:this={chartCanvas} id="myChart"></canvas>

<!--

    <div style="width: 800px;">
        <canvas id="aquisitions"></canvas>
    </div>
-->

