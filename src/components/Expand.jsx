import PropTypes from 'prop-types';

function Expand({expandWindow}) {
  return (
    <>
        {expandWindow ? (
                    <svg
                        fill="black"
                        height="18px"
                        width="18px"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 489.3 489.3"
                        xmlSpace="preserve"
                    >
                        <g>
                            <g>
                                <path
                                    d="M0,12.251v464.7c0,6.8,5.5,12.3,12.3,12.3h224c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3H24.5v-440.2h440.2v210.5
                                c0,6.8,5.5,12.2,12.3,12.2s12.3-5.5,12.3-12.2v-222.7c0-6.8-5.5-12.2-12.3-12.2H12.3C5.5-0.049,0,5.451,0,12.251z"
                                />
                                <path
                                    d="M476.9,489.151c6.8,0,12.3-5.5,12.3-12.3v-170.3c0-6.8-5.5-12.3-12.3-12.3H306.6c-6.8,0-12.3,5.5-12.3,12.3v170.4
                                c0,6.8,5.5,12.3,12.3,12.3h170.3V489.151z M318.8,318.751h145.9v145.9H318.8V318.751z"
                                />
                                <path
                                    d="M135.9,257.651c0,6.8,5.5,12.3,12.3,12.3h109.5c6.8,0,12.3-5.5,12.3-12.3v-109.5c0-6.8-5.5-12.3-12.3-12.3
                                s-12.3,5.5-12.3,12.3v79.9l-138.7-138.7c-4.8-4.8-12.5-4.8-17.3,0c-4.8,4.8-4.8,12.5,0,17.3l138.7,138.7h-79.9
                                C141.4,245.351,135.9,250.851,135.9,257.651z"
                                />
                            </g>
                        </g>
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="black"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <polyline points="9 21 3 21 3 15"></polyline>
                        <line x1="21" y1="3" x2="14" y2="10"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
        )}
    </>
  )
}
Expand.propTypes = {
    expandWindow: PropTypes.bool.isRequired,
}

export default Expand