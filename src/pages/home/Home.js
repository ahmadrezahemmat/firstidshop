import MyNavbar from "../../components/navbar/Navbar"
import { Container,Row,Col } from "react-bootstrap"
import apple from '../../assets/images/apple.svg'

function Home(){
    return(
        <div>
            <MyNavbar/>
            <Container fluid='md'>
                <Row className="align-items-center my-5">
                    <Col lg={6}>
                      <h1>خدمات اپل آیدی با فرست آیدی شاپ</h1>
                      <p style={{textAlign:'justify'}}>در سایت ما، خدمات متنوعی از جمله ساخت اپل آیدی با استفاده از ایمیل شخصی شما، رفع مشکلات نات اکتیو اپل آیدی و آموزش‌های جامع در مورد قوانین و استفاده صحیح از محصولات اپل ارائه می‌شود. یکی از مزایای اصلی ساخت اپل آیدی با ایمیل شخصی، افزایش امنیت و قابلیت بازیابی آسان‌تر حساب کاربری است که در مقایسه با استفاده از ایمیل‌های فیک، اطمینان بیشتری را برای کاربران فراهم می‌کند. ما با تکیه بر دانش و تجربه‌ی خود، تمامی خدمات را با کیفیت بالا و تضمین کامل ارائه می‌دهیم تا شما با خیالی آسوده از محصولات اپل بهره‌مند شوید.</p>
                    </Col>
                    <Col lg={6} className="py-4">
                      <img src={apple} className="img-fluid" />
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
export default Home