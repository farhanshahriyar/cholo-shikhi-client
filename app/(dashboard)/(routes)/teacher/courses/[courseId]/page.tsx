import { IconBadge } from "@/components/icon-badge";
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs";
import { LayoutDashboard } from "lucide-react";
import { redirect } from "next/navigation";
import { TitleForm } from "./_components/title-form";

const CourseIdPage = async ({
    params 
}: {
    params: { courseId: string };
}) => {
    const { userId } = auth();
    if (!userId) {
        return redirect("/")
    }

    // fetech course data from the server
    const course = await db.course.findUnique({
        where: {
            id: params.courseId
        },
    });

    // check if the course is not available
    if (!course) {
        return redirect("/")
    }

    // missing message for the course
    const requireFields = [
        course.title,
        course.description,
        course.imageUrl,
        course.price,
        course.categoryId,
        // later I will add more fields
    ];

    const totalFields = requireFields.length;
    const completedFields = requireFields.filter(Boolean).length;

    const completionText = `( ${completedFields}/${totalFields} )`;

    return ( 
        <div className="p-6">
             {/* Course Id : {params.courseId} */}
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-2">
                    <h1 className="text-2xl font-medium">Course Setup</h1>
                    <span className="text-slate-700 text-sm">Complete all fields {completionText} </span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                <div>
                    <div className="flex items-center gap-x-2">
                        <IconBadge icon={LayoutDashboard}/>
                        <h2 className="text-xl">Customize your course</h2>
                    </div>
                    <TitleForm
                        initialData= {course}
                        courseId = {course.id}
                    />
                </div>
            </div>
         </div>
     );
}
 
export default CourseIdPage;