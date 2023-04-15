import React from 'react';
import { Link } from '@mui/material';

const DisplayLink = ({ shortend }) => {
    return (
        <Link rel='noopener' target='_blank' href={`https://${shortend}`} style={{ padding: '10px' }}>
            {shortend}
        </Link>
    );
};

export default DisplayLink;