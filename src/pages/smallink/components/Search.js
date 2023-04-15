import React, { useState } from 'react';
import { Button, TextField, LinearProgress } from '@mui/material';

import shrtcode from '../../api/shrtcode';
import DisplayLink from './DisplayLink';


const HTTP_URL_VALIDATOR_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

const Search = () => {
    const [link, setLink] = useState('');
    const [short, setShort] = useState('');
    const [loading, setLoading] = useState(false);

    // Submit form function
    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkLink(link)) {
            getLink(link);
            setLink('');
            setLoading(!loading);
        }
    };

    // Link Validation Function
    const checkLink = (string) => {
        // Regex to check if string is a valid URL
        return string.match(HTTP_URL_VALIDATOR_REGEX);
    };

    // Function that calls the API if link is valid
    const getLink = async () => {
        await shrtcode
            .get(`shorten?url=${link}`)
            .then((response) => {
                setShort(response.data.result.short_link);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <div onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
                {/* <Label htmlFor='input'>Long Link Here:</Label> */}
                <textarea
                    style={{ marginBottom: '20px', resize: 'none', width: '100%', paddingTop: '20px', }}
                    label='Link'
                    variant='outlined'
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder='Paste Link here'
                />

                {!loading && (
                    <div className="d-grid gap-2">
                        <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={(e) => handleSubmit(e)}
                            style={{ padding: '10px', marginLeft: '10px', marginRight: '10px', marginBottom: '10px' }}
                        >
                            Submit
                        </button>
                    </div>
                )}

                {loading && <LinearProgress />}
            </div>
            {short && (
                <div
                    style={{
                        display: 'flex',
                        height: '50px',
                        backgroundColor: "white",
                        marginLeft: '10px',
                        marginRight: '10px',
                        marginBottom: '10px',
                        borderWidth: '2px',
                        borderColor: 'black',
                        borderStyle: 'solid'
                    }}
                >
                    <h5 style={{ padding: '10px' }}>Short Link: </h5>
                    <DisplayLink shortend={short} />
                </div>
            )}
        </>
    );
};

export default Search