import { RiMessage3Line } from "react-icons/ri";
import { Stack, Form, Button } from "react-bootstrap";
import '../style/chatboard.css';
import { useState, useEffect, useRef } from "react";
import { GrSend } from "react-icons/gr";
import { IoMdCloseCircleOutline } from "react-icons/io";

const initChat = [
    {
        type : "respond",
        content: "I am your Corporate Investigator Assistant. How can I help you today?"
    }
];

const Chatboard = () => {
    const textEdit = useRef(null);
    const chatHistoryRef = useRef(null);
    const [showboard, setShowboard] = useState(false);
    const [height, setHeight] = useState('30rem');
    const [chatlog, setChatlog] = useState(initChat);
    const [text, setText] = useState('');
    const [textheight, setTextHeight] = useState(24);

    const scrollToEnd = () => {
        if(chatHistoryRef.current)
            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    };

    const getResponseFromGPT = async () => {
        const KEY = "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"
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${KEY}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content: text
                    }
                ]
            })
        }
        const response = await fetch('https://api.openai.com/v1/chat/completions', options);
        const data = await response.json();
        const resData = data.choices[0].message.content;
        return resData;
    }

    useEffect (() => {
        if(showboard){
            setHeight('30rem')
            // increaseOpacityWithDelay();
        } else {
            setHeight('0')
            // setTransparent ();
        }
        scrollToEnd();
    }, [showboard]);
    
    useEffect(scrollToEnd, [chatlog]);

    const setInitState = () => {
        if(textEdit.current) {
            textEdit.current.value = "";
            textEdit.current.style.height = "24px";
        }
    }

    const askAndAnswer = async () => {
        if(textEdit.current) {
            textEdit.current.value = "";
            textEdit.current.style.height = "24px";
        }
        const newReq = {type:"request", content:text };
        setChatlog([...chatlog, newReq]);
        const resData = await getResponseFromGPT();
        const newRes = {type: "respond", content: resData};
        setChatlog([...chatlog, newReq, newRes]);
    }

    const handleTextAreaChange = (e) => {
        setText(e.target.value);
        const rownum = Math.min(Math.floor(e.target.scrollHeight/24), 4)
        setTextHeight(rownum * 24);
    };

    return (
        <Stack className="chatbox">
            { 
                !showboard && <Form.Label>
                    <h3 onClick={ () => setShowboard(!showboard) }><RiMessage3Line /></h3>
                </Form.Label>
            }
            {  
                showboard && <Stack className='mainform position-relative' gap="1">
                    <h3 className="close-chat-btn" onClick={ () => setShowboard(!showboard)}><IoMdCloseCircleOutline /></h3>
                    <div ref={chatHistoryRef} className="chat-history" style={{height: height}}>
                        {chatlog.map((chat, idx) => (
                            chat.type === "respond" ? 
                            <div className="chatlog response" key={idx}>
                                {chat.content}
                            </div>
                            :
                            <div className="chatlog request" key={idx}>
                                {chat.content}
                            </div>
                        ))}
                    </div>
                    <Stack direction="horizontal" gap="2" className="align-items-end">
                        {/* <AutoResizeTextarea setContent={setText}/> */}
                        <Form.Control
                            ref={textEdit}
                            as="textarea"
                            style={{height: textheight}}
                            onChange={handleTextAreaChange}  // Call the function on input change
                            placeholder="Type something..."
                            cols="100"
                        />
                        <Button onClick={askAndAnswer} >
                            <h5 className="d-flex flex-row gap-1"><GrSend />Send</h5>
                        </Button>
                    </Stack>
                </Stack>
            }
        </Stack>
    )
}

export default Chatboard;