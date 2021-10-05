import React from "react";
import IconButton from 'rsuite/IconButton';
import ButtonToolbar from 'rsuite/ButtonToolbar';
import {AiOutlineCloseCircle, AiFillStar} from 'react-icons/ai';
import {HiOutlinePencilAlt} from 'react-icons/hi';
import {FaRegCheckCircle} from 'react-icons/fa';
import './notes.scss'

export const Notes = ({notes}) => {
    return (
        <ul className="list-group">
            {notes.map(note => (
                <li className="list-group-item note"
                    key={note.id}>{note.title}
                    <ButtonToolbar className="button_bar">
                        <button className="button_star"></button>
                        <IconButton icon={<FaRegCheckCircle />} className="button"/>
                        <IconButton icon={<HiOutlinePencilAlt />} className="button"/>
                        <IconButton icon={<AiOutlineCloseCircle />} className="button"/>
                    </ButtonToolbar>
                </li>
            ))}

        </ul>
    )
}