import React from 'react'
import {Alert} from 'react-bootstrap'

export const AlertComponent = ({error, doing}) => {
    return (
        <Alert variant="danger" className='mt-5 mt-md-2'>
  <Alert.Heading>Ошибка</Alert.Heading>
  <p>
    Произошла ошибка при {doing}. Причина: {error}
  </p>
  <hr />
  <p className="mb-0">
    Попробуйте еще раз.
  </p>
</Alert>
    )
} 