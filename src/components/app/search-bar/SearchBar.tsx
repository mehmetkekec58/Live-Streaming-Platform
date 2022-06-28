import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import FormControl from 'react-bootstrap/esm/FormControl';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';
import { Link } from 'react-router-dom';



function SearchBar() {
    const [search, setSearch] = useState<string>("");

    const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <div className='search'>
            <InputGroup>
                <FormControl
                    placeholder="Ara"
                    as='input'
                    onChange={OnChange}
                />
                {search != "" && search != null ?
                    <Link to={`/search?q=${search}`}>
                        <Button variant='light' className='button'>
                            <SearchIcon />
                        </Button>
                    </Link>
                    :
                    ""
                }
            </InputGroup>
        </div>
    )
}

export default SearchBar