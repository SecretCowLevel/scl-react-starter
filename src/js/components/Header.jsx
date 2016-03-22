import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import Notification from './Notification.jsx';

const Header = ({testNotification, notification, dismissNotification}) => (
    <div>
        <h1>SCL Template v0.2</h1>
        <Notification notification={notification} onDismiss={dismissNotification} />
        <Button onClick={testNotification} bsStyle="info">Test Notification</Button>
    </div>
);

Header.propTypes = {
    notification: PropTypes.object.isRequired,
    testNotification: PropTypes.func.isRequired,
    user: PropTypes.object,
    dismissNotification: PropTypes.func.isRequired
};

export default Header;
