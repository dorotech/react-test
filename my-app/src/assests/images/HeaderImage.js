import React from "react"
import styled from 'styled-components'
const Img_header = styled.img `
height: 250px;
filter: invert(100%);
`

function RickAndMorty(params) {
    return(
        <Img_header src = 'https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVJ-v6J4uSUKs4BnfgPgFTso7MOvWVH_zJ2pdPg8NkqiQeTMmhLPSd41G2PThaD1FdGezFyFTNsjnG6L61XdlaOWPz4PJL3bsGwp.png?r=5f0'></Img_header>
    )
}
export default RickAndMorty