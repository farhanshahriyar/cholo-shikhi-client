"use client"
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import  {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";


// schema
const formSchema = z.object({
    title: z.string().min(1,{
        message: "Title is required"
    }),
})

const CreatePage = () => {
    // form hook
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ""
        },
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // console.log(values); // working perfectly // checked in console

        // try catch for pass the data to the server through api
        try {
            const response  = await axios.post("/api/courses", values);
            router.push(`/teacher/courses/${response.data.id}`);
        } catch (error) {
            // console.log(error, "something went wrong");
            toast.error("Something Went Wrong");
        }
    }

    return ( 
        <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
            <div>
                <h1 className="text-2xl">Create New Course</h1>
                <p className="text-gray-500 text-sm">Fill out the form below to create a new course.</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
                        <FormField control={form.control} name="title" render={({field}) => (
                            <FormItem>
                                <FormLabel htmlFor="title">Course Title</FormLabel>
                                <FormControl>
                                    <Input {...field} disabled={isSubmitting} id="title" placeholder="e.g 'Advanced MERN Stack Course' "/>
                                </FormControl>
                                <FormDescription>
                                   What will you teach in this course?
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                        <div className="flex items-center gap-x-2">
                            <Link href="/">
                                <Button variant="ghost">Cancel</Button>
                            </Link>
                            <Button type="submit" disabled={!isValid || isSubmitting}>Continue</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
     );
}
 
export default CreatePage;
