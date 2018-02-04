import React from 'react';
import PropTypes from 'prop-types';
import PageContainer from './PageContainer';
import PageContent from './PageContent';

const PageTemplate = props => (
  <PageContainer>
    <PageContent displayBlock="true">{props.children}</PageContent>
  </PageContainer>
);

PageTemplate.propTypes = {
  children: PropTypes.node
};

PageTemplate.defaultProps = {
  children: ''
};

export default PageTemplate;