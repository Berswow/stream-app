import {z} from 'zod'
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Form
} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {toast} from "sonner";
import {Card, CardContent} from "@/components/ui/card.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";

const formSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email(),
    phoneNumber: z.coerce.number().refine(val => val > 0, {
        message: "Phone number must be a valid number",
    }),
    message: z.string().min(5).max(100),
})


export const SupportForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: undefined,
            message: ""
        }
    })

    const handleOnSubmit = (data: z.infer<typeof formSchema>) => {
        toast("Support message sent!");
        console.log(data);
    }

    return (
            <Card className='w-[976px] h-auto bg-neutral-900 rounded-2xl border-neutral-800 p-12.5'>
                <CardContent className='p-0'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-6 text-white">
                            <div className='flex flex-col gap-12.5'>
                                <div className='flex justify-between gap-12.5'>
                                    <FormField control={form.control} name="firstName" render={({field}) => (
                                        <FormItem className='flex flex-col gap-4 w-full'>
                                            <FormLabel className='text-[18px] font-semibold'>First Name</FormLabel>
                                            <FormControl className='h-[67px] border-neutral-800 bg-secondary'>
                                                <Input placeholder="John"  {...field}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                    <FormField control={form.control} name="lastName" render={({field}) => (
                                        <FormItem className='w-full'>
                                            <FormLabel className='text-[18px] font-semibold'>Last Name</FormLabel>
                                            <FormControl className='h-[67px] border-neutral-800 bg-secondary'>
                                                <Input placeholder="Doe" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                </div>
                                <div className='flex justify-between gap-12.5'>
                                    <FormField control={form.control} name="email" render={({field}) => (
                                        <FormItem className='flex flex-col gap-4 w-full'>
                                            <FormLabel className='text-[18px] font-semibold'>Email</FormLabel>
                                            <FormControl className='h-[67px] border-neutral-800 bg-secondary'>
                                                <Input placeholder="example@mail.com" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                    <FormField control={form.control} name="phoneNumber" render={({field}) => (
                                        <FormItem className='flex flex-col gap-4 w-full'>
                                            <FormLabel className='text-[18px] font-semibold'>Phone Number</FormLabel>
                                            <FormControl className='h-[67px] border-neutral-800 bg-secondary'>
                                                <Input placeholder="+1234567890" type="tel" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                </div>

                                <FormField control={form.control} name="message" render={({field}) => (
                                    <FormItem className='flex flex-col gap-4 w-full'>
                                        <FormLabel className='text-[18px] font-semibold'>Message</FormLabel>
                                        <FormControl className='h-[67px] border-neutral-800 bg-secondary'>
                                            <Textarea className='h-[163px] resize-none' placeholder="Your message..." {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}/>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2.5 items-center'>
                                        <Checkbox className='border-neutral-800 w-[28px] h-[28px]'/><span className='text-[18px] text-neutral-500'>I agree with Terms of Use and Privacy Policy</span>
                                    </div>
                                    <Button type="submit" className="mt-4">Send Message</Button>
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
    );
};


