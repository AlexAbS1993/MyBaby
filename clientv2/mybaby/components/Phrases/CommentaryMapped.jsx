'use client'
import React from 'react'
import {DateTime} from 'luxon'


export const CommentaryMappedOver = ({comment}) => {   
    const comments = comment.map((element) => {
        const date = DateTime.fromISO(element.dateOfPub).toLocaleString(DateTime.DATETIME_MED)
        return <div key={element.dateOfPub}>
            <p>{element.value}</p>
            <p>{date}</p>
            <p>{element.authorName}</p>
            <hr/>
        </div>
    })

    return (
        <>
        {comments}
        </>
    )

}

export const CommentaryMapped = React.memo(CommentaryMappedOver)