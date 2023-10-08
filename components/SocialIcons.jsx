export default function SocialIcons({
    srcFb = './icons/fb.png',
    srcInsta = './icons/insta.png',
}) {
    return (
        <div className="social-media-icons">
            <a href="https://www.instagram.com/vmgshutteringstore/" target="_blank">
                <img
                    className="insta-icon"
                    src={srcFb}
                    alt='fb-icon'
                />
            </a>
            <a href="https://www.instagram.com/vmgshutteringstore/" target="_blank">
                <img
                    className="insta-icon"
                    src={srcInsta}
                    alt='instagram-icon'
                />
            </a>
        </div>
    )
}
