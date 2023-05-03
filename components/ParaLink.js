import React from 'react'

const ParaLink = ({text, href, className}) => {
    return (
        <>
            <span
                className={` ${className} text-textSecondary cursor-pointer relative after:box-border after:w-0 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-textSecondary hover:after:w-full after:transition-all`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {text}
            </span>
        </>
    )
}

export default ParaLink