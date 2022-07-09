import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Container, Paper } from '@mui/material';

const faqData = [
  [`Collapsible Group Item #1`,

    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor
    sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.`],

  [`Collapsible Group Item #2`,

    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor
    sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.`
  ],
  [`Collapsible Group Item #3`,

    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor
    sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.`
  ],
]

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:before': {
    display: 'none',
  },
}));

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
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    console.log(panel);
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container sx={{ paddingBlock: "4rem" }}>
      {faqData.map((faq, index) =>
        <Accordion key={index} expanded={expanded === ('panel' + { index })} onChange={handleChange('panel' + { index })}>
          <AccordionSummary aria-controls={('panel' + { index } + 'd - content')} id={('panel' + { index } + 'd-header')}>
            <Typography>{faq[0]}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {faq[1]}
            </Typography>
          </AccordionDetails>
        </Accordion>
      )}

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default Faq;
