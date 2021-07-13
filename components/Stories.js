import StoryCard from "./StoryCard"

const stories=[
    {
        src:"https://links.papareact.com/4zn",
        profile:"https://links.papareact.com/kxk",
        name:'Sonny Sangha'
    },
    {
        src:"https://links.papareact.com/k2j",
        profile:"https://links.papareact.com/f0p",
        name:'Rafeh Qazi '
    },
    {
        src:"https://links.papareact.com/xql",
        profile:"https://links.papareact.com/snf",
        name:'Nazariy Dumanskyy '
    },
    {
        src:"https://links.papareact.com/4u4",
        profile:"https://links.papareact.com/2vy",
        name:'Rafeh Qazi '
    }
]
function Stories() {
    return (
        <div className="flex justify-content space-x-3 mx-auto">
            {stories.map((story)=>(
                <StoryCard
                    key={story.src}
                    name={story.name}
                    src={story.src}
                    profile={story.profile}
                />
            ))}
        </div>
    )
}

export default Stories
