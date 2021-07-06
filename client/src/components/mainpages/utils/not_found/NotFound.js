import React from 'react'
import Emoji from './../../../headers/icon/emoji.png'

function NotFound() {
    return (
        <div className="not_found">
            404 | Not Found

            <div><img src={Emoji} alt="" width="60" /></div>
        </div>
    )
}

export default NotFound
