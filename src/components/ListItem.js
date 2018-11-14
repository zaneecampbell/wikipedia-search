import React from 'react';

const ListItem = (props) => {
    const page = 'https://en.wikipedia.org/?curid=' + props.pageid
    const replacer1 = /<span class="searchmatch">/g
    const replacer2 = /<\/span>/g
    const snippet = props.snippet.replace(replacer1, '').replace(replacer2, '')

    return (
        <div>
            <a href={page} className='divLink'>
                <div className='searchInfo'>
                    {props.title} : {snippet}
                </div> 
            </a>
        </div>
    );
}

export default ListItem;

// key title pageid snippet