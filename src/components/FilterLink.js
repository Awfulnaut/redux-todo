import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Link = ({
    active,
    children,
    onClick
}) => {
    if (active) {
        return <span>{children}</span>;
    }

    return (
        <button className="btn-link"
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
        >
            {children}
        </button>
    );
};

const mapStateToProps = (
    state,
    ownProps
) => {
    return {
        active:
            ownProps.filter ===
            state.visibilityFilter
    };
};
const mapDispatchToProps = (
    dispatch,
    ownProps
) => {
    return {
        onClick: () => {
            dispatch(actions.setVisibilityFilter(ownProps.filter));
        }
    };
}
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;