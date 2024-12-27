'use client'
import { CommentaryCreator } from './CommentaryCreater'
import { CommentaryMapped } from './CommentaryMapped'

export const Commentary = ({comment, id, auth}) => {
    return (
        <>
            <CommentaryMapped comment={comment}/>
            <CommentaryCreator id={id} auth={auth}/>
        </>
    )
}