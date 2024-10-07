import PropTypes from "prop-types";

function Medal({ medal }) {
    return (
        <div>
            <img src={`/medal_icons/${medal}.svg`} alt="" />
        </div>
    );
}

Medal.propTypes = {

};

export default Medal;
