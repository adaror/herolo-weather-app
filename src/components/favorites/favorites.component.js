import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { FavoriteCard } from './favorite-card.view';
import { getIconUrl } from '../../helpers/helpers';

class Favorites extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='favorites-container'>
                {
                    this.props.favorites.length > 0 ? 
                    this.props.favorites.map((favorite) => {
                        return (
                            <FavoriteCard
                             key={favorite.CityName} 
                             city={favorite}
                             getIconUrl={getIconUrl}
                            />
                        )
                    })
                    :
                    null
                }

            </div>
        )
    }
}

Favorites.propTypes = {
    favorites: PropTypes.array
}

const mapStateToProps = (state, ownProps) => ({
    favorites: state.favorites
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);