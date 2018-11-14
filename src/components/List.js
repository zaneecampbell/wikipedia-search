import React from 'react';
import ListItem from './ListItem';

const List = (props) => (
            <div>
                {props.linkInfo.length === 0 && <p>Search for something on Wikipedia!</p>}
                {
                    props.linkInfo.map((listItem, index) => (
                        <ListItem
                            key={listItem.pageid}
                            title={listItem.title}
                            pageid={listItem.pageid}
                            snippet={listItem.snippet}
                        />
                    ))
                }
            </div>
)

export default List;