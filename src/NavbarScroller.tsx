import { linkSync } from 'fs';
import * as React from 'react';
import Button from '@material-ui/core/Button';
import { ButtonGroup, Typography } from '@material-ui/core';

const NavbarScroller = (props: { 
  brand: { name: string, to: string } 
  links: Array<{ name: string; to: string }>
}) => {
  const { brand, links } = props;
  const NavLinks: any = () => 
  <ButtonGroup variant="text" size="large" color="secondary" aria-label="text primary button group">
  {links.map((link: { name: string, to: string }) => 
    <Button key={link.name} href={link.to}>
      <Typography variant="h6">
      {link.name}
      </Typography>
    </Button>)}
    
    </ButtonGroup>;
  return (
    <div>
      <NavLinks />
    </div>
  )
}

export default NavbarScroller;