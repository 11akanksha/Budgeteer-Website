import ChartBar from "./ChartBar";
import '../chart.css';

const Chart = ({ dataPoints }) => {
    const dataPointsValues = dataPoints.map(dataPoint => dataPoint.value);
    const maxiVal = Math.max(...dataPointsValues);
    return (
        <div className="chart">
            {
                dataPoints.map((dataPoint) => {
                    return (<ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={maxiVal}
                        label={dataPoint.label}
                    />)
                })
            }
        </div>
    )
}

export default Chart