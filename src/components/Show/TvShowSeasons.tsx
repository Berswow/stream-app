import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Season} from "@/Interface/Show/TvShowDetailInterface.ts";
import {TvShowEpisodeItem} from "@/components/Show/TvShowEpisodeItem.tsx";

type TvShowSeasonsProps = {
    tvShowId: number;
    seasons: Season[];
}

export const TvShowSeasons = ({seasons, tvShowId}: TvShowSeasonsProps) => {
    const seasonsData = seasons.filter((season: Season) => season.season_number !== 0)
    console.log(seasonsData)

    return (
        <div className='flex flex-col rounded-xl p-12.5 gap-7.5' style={{backgroundColor: "var(--black-15)"}}>
            <h4 style={{color: "var(--grey-60)"}}>Seasons and Episodes</h4>

            <Accordion type="single" collapsible className="flex flex-col gap-5 w-full">
                {seasonsData.map((season: Season, index: number) => (
                    <AccordionItem key={season.id} value={`item-${index + 1}`} className='border-none'>
                        <AccordionTrigger className='bg-neutral-950 p-12.5 rounded-xl data-[state=open]:rounded-b-none'>
                            <div className='flex gap-2.5 items-center'>
                                <h4>{season.name}</h4>
                                <p className='text-neutral-600'>{season.episode_count} Episodes</p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='flex flex-col bg-neutral-950 rounded-b-xl p-0'>
                            <TvShowEpisodeItem tvShowId={tvShowId} seasonId={season.season_number}/>
                        </AccordionContent>
                    </AccordionItem>
                ))}


            </Accordion>
        </div>
    );
};