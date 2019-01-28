import React from 'react'
import Highcharts from 'highcharts'

class Graph extends React.Component {

    componentDidMount() {
        this.initGraph(this.props.records);
    }
    componentWillReceiveProps(nextProps) {
        this.initGraph(nextProps.records);
    }

    initGraph = (records) => {
        Highcharts.chart('graph', {
            title: {
                text: 'My weight register'
            },
            xAxis: {
                type: "datetime"
            },
            series: [{
                name: 'Weight',
                data: records
            }
            ]
        })
    }
    render() {
        return (
            <div id="graph" className="z-deph-2 hoverable"></div>
        )
    }
}

export default Graph;