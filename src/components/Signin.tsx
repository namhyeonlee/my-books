import { useRef } from "react";
import { Row, Col, Input, Button } from 'antd';
import styles from './Signin.module.css';

// interface SigninProps {}


const Signin: React.FC<SigninProps> = () =>{
    const emailRef = useRef<Input>(null);
    const passwordRef = useRef<Input>(null);

    return (
        <Row align="middle" className={styles.signin_row}>
            <Col span={24}>
                <Row className={styles.signin_contents}>
                    <Col span={12}>
                        <img src="/bg_signin.png" alt="signin" className={ styles.signin_bg}/>
                    </Col>
                    <Col span={12}>
                        <div className={styles.signin_title}>my books</div>
                        <div className={styles.signin_subtitle}>Please Note your Opinion</div>
                        <div />
                        <div className={styles.signin_underline}>
                        </div>
                        <div className={styles.input_area}>
                            Email
                            <span className={styles.required}>*</span>
                            <Input
                                placeholder="Email"
                                autoComplete="email"
                                name="email"
                                className={styles.input}
                                ref={emailRef}
                            />
                        </div>
                        <div className={styles.password_title}>Password
                            <span className={styles.required}>*</span>
                        </div>
                        <div className={styles.input_area}>
                            <Input
                                type="password"
                                autoComplete="current-password"
                                name="password"
                                className={styles.input}
                                ref={passwordRef}
                            />
                        </div>
                        <div className={styles.button_area}>
                            <Button size="large" className={styles.button}>Sign in</Button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )

    function click() {
        const email = emailRef.current!.state.value;
        const password= passwordRef.current!.state.value;
        
    }
}