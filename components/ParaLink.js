import React from 'react'

const ParaLink = ({text, href, className, notTarget}) => {
    return (
        <>
            <a
                className={` ${className} text-textSecondary relative after:box-border after:w-0 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-textSecondary hover:after:w-full after:transition-all`}
                href={href}
                target={notTarget?"":"_blank"}
                rel="noopener noreferrer"
            >
                {text}
            </a>
        </>
    )
}

export default ParaLink