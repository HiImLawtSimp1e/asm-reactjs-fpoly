import { Image } from 'cloudinary-react'

function CloudImage({ publicId, className }) {
    return (
        <Image cloudName="dehv1exqh" publicId={publicId} className={className} />
    )
}

export default CloudImage;