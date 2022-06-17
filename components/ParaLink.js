import React from 'react'

const ParaLink = ({text, href, className}) => {
    return (
        <>
            <a
                className={` ${className} text-textSecondary transition-all hover:underline`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {text}
            </a>
        </>
    )
}

export default ParaLink