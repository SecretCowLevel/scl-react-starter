import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
    static propTypes= {

    }

    componentDidMount () {
      // console.log('did it');
    }

    render () {
      return (
        <Fragment>
          <h1>This is the profile route</h1>
          <Link to='/'>go to home</Link>
        </Fragment>
      )
    }
}
