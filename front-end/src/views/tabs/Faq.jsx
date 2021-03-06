import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Accordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Container, Paper } from '@mui/material';

const faqData = [
  [`What is Venture Discovery?`,

    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor
    sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.`],

  [`What are the services provided by Venture Discovery?`,

    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor
    sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.`
  ],
  [`How Venture Discovery helps a startup?`,

    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor
    sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.`
  ],
  [`Who is a beta user?`,

    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor
    sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.`
  ],
  [`How can beta users help in development of your platform?`,

    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor
    sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.`
  ],
  [`Who are the beta users of Venture Discovery?`,

    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor
    sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.`
  ],
  [`What is the procedure to get feedback from beta users in Venture Discovery?`,

    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor
    sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.`],

  [`Why do you need data for your startup through Venture Discovery?`,

    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor
    sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.`
  ],
  [`How do we contact Venture Discovery?`,

    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor
    sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.`
  ],
  [`Is beta testing for our web/app free in Venture Discovery?`,

    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor
    sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.`
  ],
  [`What do beta users get for beta testing on Venture Discovery?`,

    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor
    sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.`
  ],
]

// const Accordion = styled((props) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   '&:before': {
//     display: 'none',
//   },
// }));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(255, 255, 255)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: '0.5px solid rgba(0, 0, 0, .125)',
}));

const Faq = () => {
  const [expanded, setExpanded] = React.useState('panel0');

  const handleChange = (panel) => (event, newExpanded) => {
    console.log(panel);
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container sx={{ paddingBlock: "4rem" }}>
      {/* <Paper> */}
      {faqData.map((faq, index) =>
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}>
          <AccordionSummary aria-controls={`panel${index}d - content`} id={`panel${index}d-header`}>
            <Typography>{faq[0]}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {faq[1]}
            </Typography>
          </AccordionDetails>
        </Accordion>

      )}

      {/* </Paper> */}
    </Container>
  );
}

export default Faq;
