import { linkSync } from 'fs';
import * as React from 'react';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';

const NavbarScroller = (props: { 
  brand: { name: string, to: string } 
  links: Array<{ name: string; to: string }>
}) => {
  const { brand, links } = props;
  const NavLinks: any = () => 
  <ButtonGroup variant="text" size="large" color="primary" aria-label="text primary button group">
  {links.map((link: { name: string, to: string }) => 
    <Button key={link.name} href={link.to}>
      {link.name}
    </Button>)}
    
    </ButtonGroup>;
  return (
    <div>
      <NavLinks />
    </div>
  )
}

export default NavbarScroller;