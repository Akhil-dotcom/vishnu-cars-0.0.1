import { Button } from '@material-ui/core'
import React from 'react'
import './Mobile__Completed.scss'

function Mobile__Completed() {
    return (
        <div className="completed">
            <div className="content">
                <div className="content__head">Drive Well, Drive Safe</div>
                <div className="content__sub">Completed with learning.</div>
                <div className="content__body">It's time to check out our car collection.</div>
                <Button className="btn"><a href="http://www.vishnucars.com/">Check Out</a></Button>
            </div>
        </div>
    )
}

export default Mobile__Completed
