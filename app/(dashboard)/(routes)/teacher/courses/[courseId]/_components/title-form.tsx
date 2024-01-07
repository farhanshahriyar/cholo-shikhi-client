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
import { useState } from "react"

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
    const [isEditing, setIsEditing] = useState(false);
    const toggleEdit = () => setIsEditing((current)=> !current);
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
                <Button onClick={toggleEdit} variant="ghost">
                    { isEditing ? (
                        <>Cancel</>
                    ) : (
                        <>
                            <Pencil className="h-4 w-4 mr-2" />
                            Edit Title
                        </>
                    )}
                </Button>
            </div>
            {!isEditing && (
                <p className="text-sm mt-2">
                    {initialData.title}
                </p>
            )}
            {isEditing && (
                <Form
                   {...form}>
                    <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="mt-4 space-y-4"
                    >
                        <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                    disabled={isSubmitting}
                                    {...field}
                                    placeholder="Course Title"
                                    />
                                </FormControl>
                                <FormMessage>
                                    {form.formState.errors.title?.message}
                                </FormMessage>
                            </FormItem>
                        )}
                        />
                    </form>
                </Form>
            )}
        </div>
    )
}