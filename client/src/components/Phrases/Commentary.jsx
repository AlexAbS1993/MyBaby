import React from 'react'
import { useMemo } from 'react'
import { CommentaryCreator } from './CommentaryCreater'
import { CommentaryMapped } from './CommentaryMapped'

export const Commentary = ({comment, id, auth}) => {
    // const mapped = useMemo(() => {return <CommentaryMapped comment={comment}/>}, [comment])
    return (
        <>
            <CommentaryMapped comment={comment}/>
            <CommentaryCreator id={id} auth={auth}/>
        </>
    )
}