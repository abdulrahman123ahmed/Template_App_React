import React from 'react'

function AboutCard({icon, text, paraph}) {
    return (
        <>
            <div className='border py-14 px-8 rounded-xl'>
                <div>
                    {icon}
                    <h3 className='text-2xl font-bold py-4'>{text}</h3>
                    <p className='leading-loose'>{paraph}</p>
                </div>
            </div>
        </>
    )
}

export default AboutCard