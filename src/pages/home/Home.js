import MyNavbar from "../../components/navbar/Navbar"
import { Container,Row,Col } from "react-bootstrap"
import apple from '../../assets/images/apple.svg'
import Course from "../../components/course/Course"
import { useState } from "react"
import appleid from '../../assets/images/appleid.webp'
import notActive from '../../assets/images/not active.webp'
import password from '../../assets/images/password.webp'
import icloud from '../../assets/images/icloud.webp'
import Footer from "../../components/footer/Footer"




function Home(){
    const [courses, setCourses] = useState([
        {   id:1,
            title:'اپل آیدی',
            text:'خدمات اپل آیدی با فرست آیدی شاپ',
            img: appleid,
            telegramLink:'@firstidshop'
        },
        {   id:2,
            title:' سرویس رفع نات اکتیو',
            text:'     سرویس رفع نات اکتیو',
            img: notActive,
            telegramLink:'@firstidshop'

        },
        {   id:3,
            title:' شخصی سازی اپل آیدی',
            text:'    شخصی سازی اپل آیدی   ',
            img: password,
            telegramLink:'@firstidshop'
        },
        {   id:4,
            title:' سرویس حذف آیکلود',
            text:'خدمات اپل آیدی با فرست آیدی شاپ',
            img: icloud,
            telegramLink:'@firstidshop'
        }

    ])
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
                <Row className="my-5">
                    <h2 className="py-4">خدمات اپل آیدی</h2>
                    {courses.map  (   course   => (
                        <Col key={course.id} className="py-3" md={6} lg={4} xl={3}>
                            <Course {...course} />
                        </Col>
                    ) )}
                </Row>
            </Container>
            <Footer/>
            
            
            
        </div>
    )
}
export default Home