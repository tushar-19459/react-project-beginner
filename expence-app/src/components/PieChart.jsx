import Chart from "react-apexcharts";

const PieChart = ({ income, expense }) => {
    const options = {
        chart: {
            type: 'pie',
        },
        labels: ['Total Income', 'Total Expense'],
        colors: ['#00E396', '#FF4560'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                },
                legend: {
                    position: 'bottom',
                },
            },
        }],
    };

    const series = [income, expense];

    return (
        <div id="chart">
            <Chart options={options} series={series} type="pie" width="380" />
        </div>
    );
};

export default PieChart;
