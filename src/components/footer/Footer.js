import { Container, Row , Col } from "react-bootstrap"
import './Footer.css'

function Footer(){
    return(
        <footer> 
            <Container>
                <Row>
                    <Col>
                        <h2>رسالت ما</h2>
                        <p>یکی از مزایای اصلی ساخت اپل آیدی با ایمیل شخصی، افزایش امنیت و قابلیت بازیابی آسان‌تر حساب کاربری است که در مقایسه با استفاده از ایمیل‌های فیک، اطمینان بیشتری را برای کاربران فراهم می‌کند</p>
                    </Col>
                    <Col style={{textAlign:'left'}}>
                        <img src='https://cdn.zarinpal.com/badges/trustLogo/1.svg' />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer
