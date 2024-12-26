"use client"
import { useRouter } from "next/navigation"
import { ButtonGroup, Button, Container } from "react-bootstrap"
import styles from './styles.module.css'
export default function SelectChild({children}){
    const router = useRouter()
    return <>
    <Container className='d-flex justify-content-center mb-4'>
        <ButtonGroup size='lg' >
            <Button variant="primary" onClick={() => {
                router.push('/main/valentin')
            }}>Валентин</Button>
            <Button
            className={styles.inna_button}
            onClick={() => {
                router.push('/main/inna')
            }}
            >Инна</Button>
        </ButtonGroup>
        </Container>
        {children}
    </>
}