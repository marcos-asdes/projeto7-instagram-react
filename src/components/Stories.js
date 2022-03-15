let imgRoot = "../assets/img/";
let storiesProps = [
    {user:"9gag", image:imgRoot+"9gag.svg"},
    {user:"meowed", image:imgRoot+"meowed.svg"},
    {user:"barked", image:imgRoot+"barked.svg"},
    {user:"nathanwpylestrangeplanet", image:imgRoot+"nathanwpylestrangeplanet.svg"},
    {user:"wawawicomics", image:imgRoot+"wawawicomics.svg"},
    {user:"respondeai", image:imgRoot+"respondeai.svg"},
    {user:"filomoderna", image:imgRoot+"filomoderna.svg"},
    {user:"memeriagourmet", image:imgRoot+"memeriagourmet.svg"}
];

export default function Stories() {
    return (
        <div className="Stories">
            {
            storiesProps.map((story, index) => {
            return <Story key={story.user+index} image={story.image} user={story.user} />
            })
            }
            <div className="storiesArrow">
                <span className="iconify" data-icon="ion:chevron-forward-outline"></span>
            </div>
        </div>
    )
}

function Story({image, user}) {
    return (
        <div className="Story">
            <div className="storyImg">
                <img src={image} />
            </div>
            <div className="storyUser">
                <p>{user}</p>
            </div>
        </div>
    )
}