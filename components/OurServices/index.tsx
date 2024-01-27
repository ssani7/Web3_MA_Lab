import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

export default function OurServices() {
  return (
    <div id="services" className="my-16 px-16 flex flex-col text-center">
      <h3 className="text-5xl font-bold mb-16">We are providing services</h3>
      <div className="space-y-3">
        <Accordion className="bg-black border-b pb-7 border-gray-600 text-white text-left">
          <AccordionSummary
            expandIcon={
              <KeyboardArrowDownIcon
                className="text-white border rounded-full"
                fontSize="large"
              />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography className="text-4xl flex gap-2 font-semibold">
              <span className="text-xl font-normal">01</span> B2B Content
              Strategy
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ut laoreet justo, non condimentum dui. Pellentesque
              aliquam facilisis erat, at dapibus tortor tempus et. Vestibulum
              porttitor mi orci, eget luctus mi auctor in. Phasellus hendrerit
              arcu nec risus efficitur facilisis. Praesent iaculis urna et risus
              dapibus imperdiet. Phasellus sed sapien vitae justo efficitur
              iaculis ut id nisi.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-black text-white border-gray-600 border-b pb-7 text-left">
          <AccordionSummary
            expandIcon={
              <KeyboardArrowDownIcon
                className="text-white border rounded-full"
                fontSize="large"
              />
            }
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className="text-4xl flex gap-2 font-semibold">
              <span className="text-xl font-normal">02</span> Social Media
              Management
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ut laoreet justo, non condimentum dui. Pellentesque
              aliquam facilisis erat, at dapibus tortor tempus et. Vestibulum
              porttitor mi orci, eget luctus mi auctor in. Phasellus hendrerit
              arcu nec risus efficitur facilisis. Praesent iaculis urna et risus
              dapibus imperdiet. Phasellus sed sapien vitae justo efficitur
              iaculis ut id nisi.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-black border-b pb-7 border-gray-600 text-white text-left">
          <AccordionSummary
            expandIcon={
              <KeyboardArrowDownIcon
                className="text-white border rounded-full"
                fontSize="large"
              />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography className="text-4xl flex gap-2 font-semibold">
              <span className="text-xl font-normal">03</span> Lead Generation
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ut laoreet justo, non condimentum dui. Pellentesque
              aliquam facilisis erat, at dapibus tortor tempus et. Vestibulum
              porttitor mi orci, eget luctus mi auctor in. Phasellus hendrerit
              arcu nec risus efficitur facilisis. Praesent iaculis urna et risus
              dapibus imperdiet. Phasellus sed sapien vitae justo efficitur
              iaculis ut id nisi.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-black border-b pb-7 border-gray-600 text-white text-left">
          <AccordionSummary
            expandIcon={
              <KeyboardArrowDownIcon
                className="text-white border rounded-full"
                fontSize="large"
              />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography className="text-4xl flex gap-2 font-semibold">
              <span className="text-xl font-normal">04</span> Web Development
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ut laoreet justo, non condimentum dui. Pellentesque
              aliquam facilisis erat, at dapibus tortor tempus et. Vestibulum
              porttitor mi orci, eget luctus mi auctor in. Phasellus hendrerit
              arcu nec risus efficitur facilisis. Praesent iaculis urna et risus
              dapibus imperdiet. Phasellus sed sapien vitae justo efficitur
              iaculis ut id nisi.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
