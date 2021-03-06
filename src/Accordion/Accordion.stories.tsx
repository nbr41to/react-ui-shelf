import React from 'react';
import { Accordion, AccordionProps } from './Accordion';

export default {
  title: 'Sample/Accordion',
  argTypes: {
    label: { control: 'text' },
    labelColor: { control: 'color' },
    bgColor: { control: 'color' },
  },
};

export const AccordionComponent = (arg: AccordionProps) => (
  <>
    <Accordion {...arg}>
      Details
    </Accordion>
    <Accordion {...arg}>
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
    </Accordion>
    <Accordion {...arg}>
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
  </Accordion>
    <Accordion {...arg}>
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
      Details...Details...Details...Details...Details...
    </Accordion>
  </>
)

AccordionComponent.args = {
  label: 'TITLE',

};
