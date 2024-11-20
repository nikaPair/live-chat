import { MessageContainer, MessageAvatar, MessageContent } from './Message.style';
interface MessageProps {
    src: string;
    content: string;
    msg?: any;
    user?: any;
}

const Message = ({ src, content, msg, user }: MessageProps) => {
    return (
        <MessageContainer
            sx={{
                justifyContent: msg.uid === user?.uid ? 'flex-end' : 'flex-start',
            }}
        >
            {msg.uid !== user?.uid ? <MessageAvatar src={src} /> : null}
            <MessageContent
                sx={{
                    backgroundColor: msg.uid === user?.uid ? '#9b73f2' : '#b96e98',
                    color: 'white',
                }}
            >
                {content}
            </MessageContent>
        </MessageContainer>
    );
};

export default Message;
