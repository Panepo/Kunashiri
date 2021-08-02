import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

import { factorialize, factorializeFib } from './helpers/fibonacci.helper'

const styles = (theme: Object) => ({
  root: {
    marginTop: '-55vh',
    marginBottom: theme.spacing(1),
    flex: 1
  },
  formControl: {
    margin: theme.spacing(1),
    width: 130
  },
  charts: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center'
  },
  chart: {
    margin: theme.spacing(1)
  }
})

class App extends Component {
  state = {
    factorialData: {
      labels: ['JavaScript', 'WebAssembly'],
      datasets: [
        {
          label: 'Time taken to complete (in milliseconds)',
          data: [],
          backgroundColor: [
            'rgba(255, 206, 86, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: ['rgba(255, 206, 86, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderWidth: 1
        }
      ]
    },
    factorialFibData: {
      labels: ['JavaScript', 'WebAssembly'],
      datasets: [
        {
          label: 'Time taken to complete (in milliseconds)',
          data: [],
          backgroundColor: [
            'rgba(255, 206, 86, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: ['rgba(255, 206, 86, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderWidth: 1
        }
      ]
    }
  }

  componentDidMount() {
    this.loadWasm()
  }

  loadWasm = async () => {
    try {
      const wasm = await import('wasm-koala-blog')
      this.setState({ wasm })
    } catch (err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`)
    }
  }

  updateGraph(time, lang, graph) {
    let data
    let stateVal
    if (graph === 'fac') {
      data = this.state.factorialData
      stateVal = 'factorialData'
    } else if (graph === 'facFib') {
      data = this.state.factorialFibData
      stateVal = 'factorialFibData'
    }

    const datasetsCopy = data.datasets.slice(0)
    const dataCopy = datasetsCopy[0].data.slice(0)
    if (lang === 'js') {
      dataCopy[0] = time
    } else if (lang === 'wa') {
      dataCopy[1] = time
    }
    datasetsCopy[0].data = dataCopy
    this.setState({
      [stateVal]: Object.assign({}, data, {
        datasets: datasetsCopy
      })
    })
  }

  handleCalc1 = async () => {
    const { wasm = {} } = this.state
    const t0 = performance.now()
    console.log('t0:' + t0)
    await wasm.factorialize(500)
    const t1 = performance.now()
    console.log('t1:' + t1)
    this.updateGraph(t1 - t0, 'wa', 'fac')
    const t2 = performance.now()
    console.log('t2:' + t2)
    factorialize(500)
    const t3 = performance.now()
    console.log('t3:' + t3)
    this.updateGraph(t3 - t2, 'js', 'fac')
  }

  handleCalc2 = async () => {
    const { wasm = {} } = this.state
    const t0 = performance.now()
    console.log('t0:' + t0)
    await wasm.factorialize_fib(30)
    const t1 = performance.now()
    console.log('t1:' + t1)
    this.updateGraph(t1 - t0, 'wa', 'facFib')
    const t2 = performance.now()
    console.log('t2:' + t2)
    factorializeFib(30)
    const t3 = performance.now()
    console.log('t3:' + t3)
    this.updateGraph(t3 - t2, 'js', 'facFib')
  }

  render() {
    return (
      <Container>
        <Card className={this.props.classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              JavaScript vs WebAssembly speed test
            </Typography>

            <Container>
              <Container>
                <Button
                  className={this.props.classes.formControl}
                  onClick={this.handleCalc1}
                  color="primary">
                  Calculate the factorial of 500
                </Button>
                <Button
                  className={this.props.classes.formControl}
                  onClick={this.handleCalc2}
                  color="primary">
                  Factorialize the first 30 numbers of the fibonacci sequence
                </Button>
              </Container>
              <Container>
                <div className={this.props.classes.charts}>
                  <div className={this.props.classes.chart}>
                    <Bar
                      data={this.state.factorialData}
                      width={400}
                      height={400}
                      options={{
                        maintainAspectRatio: false,
                        scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
                      }}></Bar>
                  </div>
                  <div>
                    <Bar
                      data={this.state.factorialFibData}
                      width={400}
                      height={400}
                      options={{
                        maintainAspectRatio: false,
                        scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
                      }}></Bar>
                  </div>
                </div>
              </Container>
            </Container>
          </CardContent>
        </Card>
      </Container>
    )
  }
}

export default withStyles(styles)(App)
