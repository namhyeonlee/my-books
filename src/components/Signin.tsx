import { Row, Col, Input, Button } from 'antd';
import styles from './Signin.module.css';

export default function Signin() {
    return (
        <Row align="middle" className={styles.signin_row}>
            <Col span={24}>
                <Row className={styles.signin_contents}>
                    <Col span={12}></Col>
                    <Col span={12}>
                        <div>my books</div>
                        <div>Please Note your Opinion</div>
                        <div />
                        <div>Email
                            <span>*</span>
                        </div>
                        <div>
                            <Input
                                placeholder="Email"
                                autoComplete="email"
                                name="email"
                            />
                        </div>
                        <div>Password
                            <span>*</span>
                        </div>
                        <div>
                            <Input
                                type="password"
                                autoComplete="current-password"
                                name="password"
                            />
                        </div>
                        <div>
                            <Button size="large">Sign in</Button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}