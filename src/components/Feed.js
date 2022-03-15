import Post from './Post.js';

let imgRoot = "../assets/img/";
let posts = [
    {user:"meowed", imgUser:imgRoot+"meowed.svg", ellipsis:"...", imgContent:imgRoot+"gato-telefone.svg", imgLikes:imgRoot+"respondeai.svg", txtLikes1:"Curtido por ", friendLiked:"respondeai", txtLikes2:" e outras 3.554 pessoas"},
    {user:"barked", imgUser:imgRoot+"barked.svg", ellipsis:"...", imgContent:imgRoot+"dog.jpg", imgLikes:imgRoot+"adorable-animals.svg", txtLikes1:"Curtido por ", friendLiked:"adorable_animals", txtLikes2:" e mais 4110 pessoas"},
    {user:"meowed", imgUser:imgRoot+"meowed.svg", ellipsis:"...", imgContent:imgRoot+"gato-telefone.svg", imgLikes:imgRoot+"respondeai.svg", txtLikes1:"Curtido por ", friendLiked:"respondeai", txtLikes2:" e outras 2.761 pessoas"}
]

export default function Feed() {
    return (
        <div className="Feed">
            {
            posts.map((post, index) => {
            return <Post key={index} user={post.user} imgUser={post.imgUser} ellipsis={post.ellipsis} imgContent={post.imgContent} imgLikes={post.imgLikes} txtLikes1={post.txtLikes1} friendLiked={post.friendLiked} txtLikes2={post.txtLikes2}/>
            })
            }
        </div>
    )
}