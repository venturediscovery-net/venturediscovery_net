import * as React from 'react';
import Box from '@mui/material/Box';
import TitleDescriptionCard from '../../components/TitleDescriptionCard';
import ShortAnswerTextQCard from '../QuestionCards/ShortAnswerTextQCard';
import MultipleChoiceQCard from '../QuestionCards/MultipleChoiceQCard';
import { useState, useEffect  } from 'react';
import { SurveyQuestions } from '../../misc/SurveyQuestions';
import { useCallback } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { LoadingButton } from '@mui/lab';

var surveyTitle = "Is user feedback on your web/app dev actionable?";
var surveyDescription = [
	"We are curious to know how do you/your friends test the practical application, of theory lectures received in the college/institute regarding any new software development (web/app dev). (It's a 2 min survey)",
	"Also, at the end of the survey, there's a surprise for you :)",
	"This survey is being conducted by Venture Discovery which is building a platform to strengthen the startup eco-system in India. Please note, your filling this form would be considered as your consent to use the data for Venture Discovery's analysis. At the end of the survey, we would be happy to share some of the anonymized survey learnings/analytics which could help you in building and testing your software dev projects more efficiently."
]

var surpriseTitle = "Its time for the surprise!";
var surpriseDecscription = [
	"Free session on A-Z of starting a new venture / startup / software development --- Starting with idea selection, to product development, to funding, to a successful exit and much more! Session host:  https://www.linkedin.com/in/rajivguptacal"
]
var surpriseQuestion = {
	"ID": 10,
	"Type": "MCQ",
    "QText": "Are you up for the session?",
    "QOptions": [
        "Yes",
        "No",
        "Later"
    ]
}


const Survey = () => {
	let [surveyAnswers, setSurveyAnswers] = useState({
		1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null,
	});

	// let questionSelected;
	// let questionDeSelected;

	const [loading, setLoading] = React.useState(false);
  	function handleClick() {
  	  	setLoading(true);
  	}

  	return (
		<Box sx={{ height: 'fit-content', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingInline: 25 }}>
			<TitleDescriptionCard 
				title = {surveyTitle}
				description = {surveyDescription}
			/>
			<form 
				style={{ 
					width: '100%', 
					display: 'flex', 
					flexDirection: 'column', 
					alignItems: 'center',
					// marginBottom: 50
				}}
				noValidate 
				autoComplete='off'
			>	
				{SurveyQuestions.map((question, id) => {
					if (question.Type == "SA") {
						return (
							<ShortAnswerTextQCard 
								id={question.ID} 
								qText={question.QText} 
								key={question.ID}
							/>)
					} else if (question.Type == "MCQ") {
						return (
							<MultipleChoiceQCard 
								id={question.ID} 
								qText={question.QText}
								qOptions={question.QOptions}
								setSurveyAnswers={setSurveyAnswers}
								key={question.ID}
							/>
						) 
					}
				})}
			</form>
			<TitleDescriptionCard 
				title = {surpriseTitle}
				description = {surpriseDecscription}
			/>
			<MultipleChoiceQCard
				qText={surpriseQuestion.QText}
				qOptions={surpriseQuestion.QOptions}
				setSurveyAnswers={setSurveyAnswers}
				key={surpriseQuestion.ID}
			/>
			<LoadingButton
          		size="small"
          		onClick={handleClick}
          		endIcon={<ArrowForwardIcon />}
          		loading={loading}
          		loadingPosition="end"
          		variant="contained"
        	>
        	  	Submit
        	</LoadingButton>
		</Box>
  	)
}

export default Survey;