import React from 'react'

const Meeting = ({ params }: { params: { id: number } }) => {
    return (
        <div>
            Meeting Room ID: {params.id}
        </div>
    )
}

export default Meeting
