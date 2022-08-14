import { useRouter } from "next/router";

function CourseDetailPage(){
    const router = useRouter();
    const { courseId } = router.query;
    return <h1>{courseId}</h1>;
}

export default CourseDetailPage;