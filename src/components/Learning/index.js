import './index.css'

const learningsList = [
	{
		'id': 1,
        "papersCount": 3,
		"title": "Knowledge Level",
		"points": [
			"Business and Technology (BT)",
			"Management Accounting (MA)",
			"Financial Accounting (FA)"
		]
	},
	{
        'id': 2,
		"papersCount": 6,
		"title": "Skill Level",
		"points": [
			"Corporate and Business Law (LW)",
			"Performance Management (PM)",
			"Taxation (TX)",
			"Financial Reporting (FR)",
			"Audit and Assurance (AA)",
			"Financial Management (FM)"
		]
	},
	{
        'id': 3,
		"papersCount": 4,
		"title": "Professional Level",
		"points": [
			"SBL - Strategic Business Leader",
			"SBR - Strategic Business Reporting",
			"Advanced Financial Management (AFM)",
			"Advanced Performance Management (APM)"
		]
	}
]


const Learning = () => {
    return (
        <div className='wcu-container'>
            <h1>What will you Learn in ACCA?</h1>
            <hr />
            <div className='cards-container'>
                {
                    learningsList.map(each => (
                        <div className='wcu-card learning-cards' key={each.id}>
                            <h3 className='card-majors'>{each.title}</h3>
                            <ul>
                                {
                                    each.points.map(eachPoint => <li>{eachPoint}</li>) 
                                }
                            </ul>
                            <h3 className='card-majors'>{each.papersCount}</h3>
                        </div>
                    ))
                }
            </div>
            
        </div>

    )
}

export default Learning