import {Col} from 'react-bootstrap'
import { MiniPhoto } from '@/styled/styled';
import config from '@/config/config';

export const MappedPhoto = ({element, index, setCurrentPhoto, setIsBig}) => {
    let path = element.photo.replace('localhost', config.serverIP)
    return (
        <Col className="col-4 mb-2 align-self-center p-1">
                 <MiniPhoto src={path}  onClick={() => {setCurrentPhoto(index); setIsBig(true)}} />
        </Col>
    )
}