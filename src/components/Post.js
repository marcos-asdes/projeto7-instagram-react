export default function Post({user, imgUser, imgContent, ellipsis, imgLikes, txtLikes1, friendLiked, txtLikes2}){
    return (
        <div className="Post">
            <PostTopBar user={user} imgUser={imgUser} ellipsis={ellipsis}/>
            <PostContent imgContent={imgContent}/>
            <PostIcons />
            <PostLikes imgLikes={imgLikes} txtLikes1={txtLikes1} friendLiked={friendLiked} txtLikes2={txtLikes2}/>
        </div>
    )
}

function PostTopBar({user, imgUser, ellipsis}) {
    return (
        <div className="PostTopBar">
            <div className="postOwnerUser">
                <img src={imgUser} />
                <p>{user}</p>
            </div>
            <p className="ellipsis">{ellipsis}</p>
        </div>
    )
}

function PostContent({imgContent}) {
    return (
        <div className="PostContent">
            <img src={imgContent} />
        </div>
    )
}

function PostIcons() {
    return (
        <div className="PostIcons">
            <div className="leftIcons">
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>                
            </div>
            <div className="rightIcons">
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    )
}

function PostLikes({imgLikes, txtLikes1, friendLiked, txtLikes2}) {
    return (
        <div className="PostLikes">
            <img src={imgLikes} />
            <p>{txtLikes1}<strong>{friendLiked}</strong>{txtLikes2}</p>
        </div>
    )
}
