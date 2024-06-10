import "./Course.css";
import { useParams } from "react-router-dom";
import MyNavbar from "../../components/navbar/Navbar";
import { courseData } from "../../data";
import { Col, Container, Row } from "react-bootstrap";

function Course() {
  const courseId = useParams().courseId;
  const courseInfo = courseData.find((course) => course.id == courseId);
  console.log(courseInfo);
  return (
    <div>
      <MyNavbar />
      <Container>
        <Row className="align-items-center">
          <Col md={5}>
            <img src={courseInfo.img}  />
          </Col>
          <Col md={7} className="my-3">
            <h2 style={{ fontFamily: "Lalehzar" }}>{courseInfo.title}</h2>
            <p>
              <b>{courseInfo.text}</b>
            </p>
            <p style={{textAlign:'justify'}}>
              Apple ID همانند شناسنامه کاربران گوشی آیفون است. ساخت اپل آیدی
              اولین پیش‌نیاز جهت بهره بردن از استور غنی و خدمات دستگاه‌های اپل
              از جمله آیفون‌ها به شمار می‌رود. یکی از سخت‌گیری‌های اپل در چند
              سال اخیر اجباری شدن ساخت اپل ایدی با استفاده از شماره تلفن برای
              افزایش امنیت کاربران است و از آنجا که متأسفانه کشور ما از همان
              ابتدا در لیست پیش‌شماره‌های پشتیبانی‌شده اپل جایی نداشت، همین
              قابلیت‌های امنیتی برای کاربران ایرانی اپل دست‌وپاگیر می‌شوند.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Course;
