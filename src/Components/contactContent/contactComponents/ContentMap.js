import React from 'react'

const ContentMap = () => {
    return (
    <div className='map col-12 pt-3'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54837.43499114424!2d30.958156825183075!3d30.793107018028287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c95daafcf035%3A0x7421820c5e8cae42!2sTanta%2C%20Tanta%20Qism%202%2C%20Tanta%2C%20Gharbia%20Governorate!5e0!3m2!1sen!2seg!4v1683591021388!5m2!1sen!2seg"
        allowfullscreen=""
        loading="lazy"
        title='This is a unique title'
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    )
}

export default ContentMap