import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import MainLayout from '../../layout/Main';
import UnauthLayout from '../../layout/Unauthenticated';

export default function RouteWithLayout({
  // layout: Layout,
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = localStorage.getItem('token');

  if (!signed && isPrivate === true) {
    return <Redirect to="/login" />;
  }
  const Layout = signed ? MainLayout : UnauthLayout;

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <>
          <Layout />
          <Container fluid>
            <Row>
              <Col>
                <Component {...matchProps} />
              </Col>
            </Row>
          </Container>
        </>
      )}
    />
  );
}

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  isPrivate: PropTypes.bool,
};

RouteWithLayout.defaultProps = {
  isPrivate: false,
};
