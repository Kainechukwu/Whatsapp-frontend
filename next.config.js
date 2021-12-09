const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            /* development only config options here */
            env = {
                REACT_APP_AUTH_BASE_URL: 'localhost:4000'
            }
        }
    }

    return {
        /* config options for all phases except development here */
    }
}