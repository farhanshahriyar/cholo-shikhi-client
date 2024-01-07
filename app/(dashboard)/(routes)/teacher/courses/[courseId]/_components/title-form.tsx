"use client"

import * as z from "zod"
import axios from "axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

// develop ui for title form
import {
    Form,
    FormField,
    FormControl,
    FormItem,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"

interface TitleFormProps {
    initialData: {
        title: string;
    }
    courseId: string;
}

// form schema
const formSchema = z.object({
    title: z.string().min(1,{
        message: "Title is required"
    }),
})


export const TitleForm = ({
    initialData,
    courseId,
}: TitleFormProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData,
    });

    const { isSubmitting, isValid } = form.formState;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            // const response = await axios.post(`/api/courses/${courseId}/title`, values);
            // console.log(response.data);
            console.log(values)
        } catch (error) {
            console.log(error);
        }
    }

        return (
        <div className="mt-6 border bg-slate-100 rounded-md p-4">
            <div className="font-medium flex items-center justify-between">
                Course Title
                <Button variant="ghost">
                    <Pencil className="h-4 w-4 mr-2" />
                    Edit Title
                </Button>
            </div>
        </div>
    )
}