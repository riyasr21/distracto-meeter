import React from 'react';

const ConversationNotChosen = () => {
    return (
        <div className='conversation_not_chosen_overlay'>
            <p className='conversation_not_chosen_overlay_text'>
                Conversation not chosen. <br/>
                Please select someone from the participants to begin chat with.
            </p>
        </div>
    );
};

export default ConversationNotChosen;