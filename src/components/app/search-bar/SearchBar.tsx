import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import FormControl from 'react-bootstrap/esm/FormControl';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';
import { Link, useNavigate } from 'react-router-dom';

const containsUrl: string = "search?q=";
const enter: string = "Enter";

function searchEmptyOrNull(searchText: string): boolean {
    return searchText != "" && searchText != null;
}

function SearchBar() {
    let navigate = useNavigate();
    const [search, setSearch] = useState<string>("");

    const OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === enter) {
            if (searchEmptyOrNull(search)) {
                navigate(`${containsUrl}${search}`)
            }

        }
    }
    return (
        <div className='search'>
            <InputGroup>
                <FormControl
                    placeholder="Ara"
                    as='input'
                    onChange={OnChange}
                    onKeyDown={handleKeyDown}
                />
                {searchEmptyOrNull(search) ?
                    <Link to={`/${containsUrl}${search}`}>
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