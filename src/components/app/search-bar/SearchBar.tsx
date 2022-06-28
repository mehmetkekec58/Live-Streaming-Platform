import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import FormControl from 'react-bootstrap/esm/FormControl';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';


function SearchBar() {
    return (
        <div className='search'>
            <InputGroup>
                <FormControl
                    placeholder="Ara"
                    as='input'
                />
                <Button className='button'>
                    <SearchIcon />
                </Button>
            </InputGroup>
        </div>
    )
}

export default SearchBar