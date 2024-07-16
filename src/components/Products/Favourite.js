import React, { useState } from 'react'
// import { ReactComponent as FavouriteIcon } from '../../utils/svg/fav.svg'
// import { ReactComponent as NonFavouriteIcon } from '../../utils/svg/non-fav.svg'
import { markAsFavourate } from '../../service/products'

export const Favourite = ({ isFavourite, id }) => {
    const [isFav, setIsFav] = useState(!!isFavourite)

    const onClick = async () => {
        try {
            setIsFav(original => !original)
            await markAsFavourate(id, !isFav)
        } catch {
            setIsFav((revert) => !revert)
        }

    }
    return (
        <div onClick={onClick} title={isFav ? "Remove from favourite" : "Mark as favourite"} style={{ zIndex: 2, position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}>
            {/* {isFav ? <FavouriteIcon /> : <NonFavouriteIcon />} */}
        </div>
    )
}
