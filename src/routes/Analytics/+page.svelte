<div style="width: 800px">
    <canvas bind:this={chartCanvas} id="myChart"></canvas>
</div>


<script>
 
    import chartjs from 'chart.js/auto';
    import { onMount } from 'svelte';
   
    const data = [
        {year:2010, count:10},
        {year:2011, count:20},
        {year:2012, count:15},
        {year:2013, count:25},
        {year:2014, count:26},
        {year:2015, count:30},
        {year:2016, count:27}
    ];

    let ctx;
    let chartCanvas;

	onMount(async (promise) => {
        ctx = chartCanvas.getContext('2d');
        var chart = new chartjs(ctx, {
            type: 'line',
            data: {
                labels: data.map(row => row.year),
                datasets: [{
                    label: 'Aquisitions',
                    borderColor: 'rgb(255, 99, 132)',
                    data: data.map(row => row.count),
                    fill: {
                        target: 'origin',
                        below: 'rgb(255, 99, 100)'
                    }
                }]
            }
		});
	});

    /*

    onMount(async (promise) => {
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



<!--

    <div style="width: 800px;">
        <canvas id="aquisitions"></canvas>
    </div>
-->

