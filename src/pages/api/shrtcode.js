import React from 'react';
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.shrtco.de/v2/',
})