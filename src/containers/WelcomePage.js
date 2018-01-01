import React from 'react';
import Logo from '../components/Logo/Logo';
import Card from '../ui-kit/Card/Card';
import { connect } from 'react-redux';

const mapStateToProps = () => ({});

const WelcomePage = () => {
  return (
    <div className="Layout page-welcome">
      <Logo />
      <main className="Layout-content">
        <Card>lorem ipsum</Card>
      </main>
    </div>
  );
};

export default connect(mapStateToProps)(WelcomePage);
