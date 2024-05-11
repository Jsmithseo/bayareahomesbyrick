import React, { useState } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayouts';

const MainStyle = {
  overflowX: 'hidden',
};

const copyStyle = {
  fontSize: '22px',
  fontFamily: 'avenir',
  textAlign: 'center',
};

export default function Wrapper() {
  return (
    <BaseLayout>
      <div id="idxStart"></div>
      <div id="idxStop"></div>
    </BaseLayout>
  );
}
