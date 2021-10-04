import React from "react";
import IconButton from 'rsuite/IconButton';
import ButtonToolbar from 'rsuite/ButtonToolbar';
import {AiOutlineCloseCircle} from 'react-icons/ai';

export const Notes = ({notes}) => {
    return (
        <ul className="list-group">
            {notes.map(note => (
                <li className="list-group-item"
                    key={note.id}>{note.title}
                    <ButtonToolbar>
                        <IconButton icon={<AiOutlineCloseCircle />} />
                    </ButtonToolbar>
                </li>
            ))}

        </ul>
    )
}