import { useState, useRef } from "react";
import { Stack, Form } from "react-bootstrap";
import { PiSun } from 'react-icons/pi';
import { BsMoonStars } from 'react-icons/bs';

const SwitchMode = () => {
    const [dark, setDark] = useState(true);
    const ball = useRef(null);

    const ToggleDarkMode = () => {
        setDark(!dark);
        if(dark)  {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            ball.current.style.transform ='translateX(-2.2rem)';
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
            ball.current.style.transform ='translateX(0rem)';
        }
    }

    return (
        <Stack className="switch-button">
            <Form.Label htmlFor="switch-theme">
                <Stack gap={3} direction="horizontal" className="p-2 rounded-pill border position-relative">
                    <PiSun style={{fontSize:'1.2rem'}}/>
                    <BsMoonStars style={{fontSize:'1.2rem'}}/>
                    <span className="ball position-absolute" ref={ball}></span>
                </Stack>
            </Form.Label>
            <Form.Check type="checkbox" id="switch-theme" onChange={ToggleDarkMode} className="d-none"/>
        </Stack>
    );
}

export default SwitchMode;