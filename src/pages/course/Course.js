
import { useParams } from "react-router-dom"
import MyNavbar from "../../components/navbar/Navbar"

function Course (){
    
    const courseId = useParams().courseId
    console.log(courseId)
    return(
        <div>
            <MyNavbar/>
            <h1>aboout course</h1>
        </div>
    )
}
export default Course