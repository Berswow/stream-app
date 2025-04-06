import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const table = [
    {
        name: "Price",
        basic: "$9.99/Month",
        standard: "$12.99/Month",
        premium: "$14.99/Month",
    },
    {
        name: "Content",
        basic: "Access to a wide selection of movies and shows, including some new releases.",
        standard: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
        premium: "Access to the widest selection of movies and shows, including all new releases and Offline Viewing",
    },
    {
        name: "Devices",
        basic: "Watch on one device simultaneously",
        standard: "Watch on two devices simultaneously",
        premium: "Watch on four devices simultaneously",
    },
    {
        name: "Free Trial",
        basic: "7 Days",
        standard: "7 Days",
        premium: "7 Days",
    },
    {
        name: "Cancel Anytime",
        basic: "Yes",
        standard: "Yes",
        premium: "Yes",
    },
    {
        name: "HDR",
        basic: "No",
        standard: "Yes",
        premium: "Yes",
    },
    {
        name: "Dolby Atmos",
        basic: "No",
        standard: "Yes",
        premium: "Yes",
    },
    {
        name: "Ad-Free",
        basic: "No",
        standard: "Yes",
        premium: "Yes",
    },
    {
        name: "Offline Viewing",
        basic: "No",
        standard: "Yes, for select titles.",
        premium: "Yes, for all titles.",
    },
    {
        name: "Family Sharing",
        basic: "No",
        standard: "Yes, up to 5 family members.",
        premium: "Yes, up to 6 family members.",
    },
]

export const SubscriptionTable = () => {
    return (
        <div className='flex flex-col gap-20'>
            <div className='flex justify-between items-center gap-24'>
                <div className='flex flex-col gap-3.5'>
                    <h2>Compare our plans and find the right one for you</h2>
                    <p style={{color: "var(--grey-60)"}}>StreamVibe offers three different plans to fit your needs:
                        Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right
                        for you.</p>
                </div>
            </div>
            <Table className='border border-neutral-700'>
                <TableHeader className='h-[90px] text-[20px] bg-neutral-950 border border-neutral-700'>
                    <TableRow className='border border-neutral-700'>
                        <TableHead className='text-white border border-neutral-700 p-7.5'>Features</TableHead>
                        <TableHead className='text-white border border-neutral-700 p-7.5'>Basic</TableHead>
                        <TableHead className='text-white border border-neutral-700 p-7.5'>Standard</TableHead>
                        <TableHead className='text-white border border-neutral-700 p-7.5'>Premium</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className='text-[20px]'>
                    {table.map((item, i) => (
                        <TableRow className='h-[90px]' key={i}>
                            <TableCell
                                className='whitespace-normal break-words border border-neutral-700 p-7.5 text-neutral-400'>{item.name}</TableCell>
                            <TableCell
                                className='whitespace-normal break-words border border-neutral-700 p-7.5 text-neutral-400'>{item.basic}</TableCell>
                            <TableCell
                                className='whitespace-normal break-words border border-neutral-700 p-7.5 text-neutral-400'>{item.standard}</TableCell>
                            <TableCell
                                className='whitespace-normal break-words border border-neutral-700 p-7.5 text-neutral-400'>{item.premium}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};