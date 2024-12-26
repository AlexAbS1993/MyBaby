"use client"
import { useRouter } from "next/navigation"
import { ButtonGroup, Button, Container } from "react-bootstrap"

export default function SelectChild({children}){
    const router = useRouter()
    return <>
    <Container className='d-flex justify-content-center'>
        <ButtonGroup size='lg' >
            <Button variant="primary" className='auto' onClick={() => {
                router.push('/main/valentin')
            }}>Валентин</Button>
            <Button variant="success" 
            onClick={() => {
                router.push('/main/inna')
            }}
            >Инна</Button>
        </ButtonGroup>
        </Container>
        {children}
    </>
}