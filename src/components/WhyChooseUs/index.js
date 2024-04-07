import './index.css'


const wcuList = [
    {
        id: 1,
        title: 'Expert Faculty',
        description: 'Our qualified Faculty with significant practical experience guide students every step of the way'
    },
    {
        id: 2,
        title: 'Complete Success Package',
        description: 'Leading Exam Prep Destination with Video classes, Live sessions, Doubt resolution Forums, MCQs, Practice tests, Webinars.'
    },
    {
        id: 3, 
        title: 'Placements',
        description: 'Resume building workshops, mock interviews and placement drives will help you impress the top employers and get your Dream Job.'
    }

]

const WhyChooseUs = () => {
    return(
        <div className='wcu-container'> 
            <h1>Why Choose Us?</h1>
            <hr />
            <div className='cards-container'>
                {wcuList.map(each => (
                    <div className='wcu-card' key={each.id}>
                        <h1>{each.title}</h1>
                        <p>{each.description}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default WhyChooseUs