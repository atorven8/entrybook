import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <List>
            {contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onClick={onDeleteContact}
                />
            ))}
        </List>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDelereContact: PropTypes.func.isRequired,
};

export default ContactList;