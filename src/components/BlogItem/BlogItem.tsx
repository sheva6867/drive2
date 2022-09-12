import './BlogItem.scss'

interface Props {
    nickname: string;
    title: string;
    text: string;
    image: string
}

function BlogItem({text, title, nickname, image}: Props) {
    return (
        <div className={'blog-item_container'}>
            <div className={'nickname'}><p>{nickname}</p></div>
            <h2>{title}</h2>
            <p>{text}</p>
            <img className={'personal_BlogImg'} src={image} alt=""/>
        </div>
    )
}

export default BlogItem;